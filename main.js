// main.js

// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow,
    dialog
} = require('electron')
const path = require('path')
const koa = require('koa');
const Router = require('koa-router');
const cp = require('child_process')
var bodyParser = require('koa-bodyparser');
const model = require('./model')

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        titleBarStyle: 'hidden',
        vibrancy: 'popover',
        thickFrame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })



    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:8000/')

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(async() => {
    await model.init();
    createWindow()

    let result = '';
    let prefix = '';
    const web = new koa();
    const router = new Router();
    web.use(async(ctx, next) => {
        console.log("=====>in")
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Access-Control-Allow-Headers', '*')
        await next();
    });
    web.use(bodyParser());
    router.get("/selectDir", (ctx) => {
        let result = dialog.showOpenDialogSync({
            properties: ['openDirectory']
        })
        ctx.body = result;
    });
    router.post("/openProject", async(ctx) => {
        const {
            name,
            dir
        } = ctx.request.body;
        cp.exec(`code ${path.join(dir, name)}`);
        ctx.body = 'success';
    })
    router.post("/createApp", async(ctx) => {
        console.log("========")
        console.log(ctx.request.body);
        const {
            name,
            dir
        } = ctx.request.body;
        await model.Project.create({
            name,
            dir
        })
        result = '';
        let info = cp.spawn('npm', ['init', 'midway', '--type=web',
            name
        ], {
            cwd: dir
        });

        info.stdout.on('data', (chunk) => {
            console.log(chunk.toString());
            if (prefix === chunk.toString()) {
                return;
            }
            prefix = chunk.toString();
            result += new Date().toISOString() + ": " + chunk.toString() + "\n";
        });
        info.stderr.on('data', (chunk) => {
            console.log(chunk.toString());
        });
        ctx.body = 'success';
    });
    router.post("/progress", (ctx) => {
        ctx.body = result;
    })

    router.get('/applications', async(ctx) => {
        ctx.body = await model.Project.findAll();
    })

    router.get("/clear", (ctx) => {
        result = '';
        ctx.body = 'success';
    })

    web.use(router.routes())
    web.use((ctx, next) => {
        ctx.body = 'hello';
    })

    web.listen(12581);

    app.on('activate', function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。