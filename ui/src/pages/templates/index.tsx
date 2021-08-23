import { TemplateItem } from '@/components/templateItem';
import { Tabs } from 'antd';
import { history} from 'umi'

const { TabPane } = Tabs;

function callback() {
}

export const AppTemplate = () => {

  const createApp = () => {
    console.log("======")
    history.push('/createApp');
  }

  return <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="传统应用模板" key="1">
      <TemplateItem title={'Web'} description={'A web application boilerplate with midway and Egg.js'} onClick={createApp}/>
      <TemplateItem title={'Koa'} description={'A web application boilerplate with midway and koa'} />
      <TemplateItem title={'Express'} description={'A web application boilerplate with midway and express'} />
      <TemplateItem title={'Grpc'} description={'Midway grpc boilerplate'} />
      <TemplateItem title={'Socket.io'} description={'Midway socket.io boilerplate'} />
      <TemplateItem title={'web-socketio'} description={'Midway web application (Egg.js) with socket.io'} />
      <TemplateItem title={'web-grpc'} description={'Midway web application (Egg.js) with grpc server'} />
    </TabPane>
    <TabPane tab="Serverless应用模板" key="2">
      <TemplateItem title={'faas'} description={'A simple serverless boilerplate include http trigger for aliyun fc, tencent scf and so on'} />
      <TemplateItem title={'faas-all'} description={'A serverless boilerplate include all trigger case for aliyun fc, tencent scf and so on'} />
      <TemplateItem title={'faas-aggr'} description={'A serverless http aggregation boilerplate for aliyun fc, tencent scf and so on'} />
    </TabPane>
    <TabPane tab="前后端一体化方案" key="3">
      <TemplateItem title={'koa-hooks-react'} description={'The next generation of integrated front and back-end application development solutions'} />
      <TemplateItem title={'faas-hooks-react'} description={'A serverless boilerplate with react and use hooks'} />
    </TabPane>
    <TabPane tab="组件开发" key="4">
      <TemplateItem title={'component'} description={'A midway component boilerplate'} />
    </TabPane>
    <TabPane tab="Serverless应用迁移方案" key="5">
      <TemplateItem title={'egg-layer'} description={'A egg-layer component with Egg.js migration boilerplate'} />
      <TemplateItem title={'egg-layer-midway'} description={'A egg-layer boilerplate for Midway v2 application migration'} />
      <TemplateItem title={'koa-layer'} description={'A koa-layer boilerplate for koa application migration'} />
      <TemplateItem title={'express-layer'} description={'A express-layer boilerplate for express application migration'} />
    </TabPane>
  </Tabs>
}