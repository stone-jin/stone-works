const {
    Sequelize,
    Model,
    DataTypes
} = require('sequelize');
const path = require('path')

const dbFile = path.join(__dirname, 'main.sqlite')

const sequelize = new Sequelize(`sqlite::${dbFile}`);

class User extends Model {}
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, {
    sequelize,
    modelName: 'user'
});

class Project extends Model {}
Project.init({
    name: DataTypes.STRING,
    dir: DataTypes.STRING
}, {
    sequelize,
    modelName: 'project'
});

const init = async() => {
    await sequelize.sync();
}

module.exports = {
    init,
    Project
}