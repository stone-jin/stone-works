import Layout from "@/components/layout";
import  { useState } from 'react';
import {
  Form,
  Input,
  Button
} from 'antd';
import { request, history } from 'umi';


export default function CreateApp() {
  const [dir, setDir] = useState<string>('');
  const [name, setName] = useState<string>('');
  const selectDir = () => {
    request('http://127.0.0.1:12581/selectDir').then(res => {
      console.log(res);
      setDir(res[0]);
    })

  };

  const createApp = () => {
    request('http://127.0.0.1:12581/createApp', {
      method: 'post',
      data: {
        name,
        dir
      }
    }).then(res => {
      console.log(res);
      history.push('/createAppProgress')
    })
  }
  return <Layout title={'应用创建'}>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
    >
      <Form.Item label="项目名称">
        <Input />
      </Form.Item>
      <Form.Item label="项目英文">
        <Input name="name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Item>
      <Form.Item label="目标文件夹">
        <Button onClick={selectDir}>选择文件夹</Button>
        {/* <input type="file" name="dir" webkitdirectory="true" directory></input> */}
      </Form.Item>
      <Form.Item label="">
        <Button onClick={createApp}>创建</Button>
      </Form.Item>
    </Form>
  </Layout>
}