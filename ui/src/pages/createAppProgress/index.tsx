import Layout from "@/components/layout";
import {
  Input,
} from 'antd';
import { request, history } from 'umi';
import { useEffect, useState } from 'react';

let interval: any = null;
export default function CreateAppProgress() {
  const [data, setData] = useState<string>('');
  const init = () => {
    request('http://127.0.0.1:12581/progress', {
      method: 'post',
      data: {
        name
      }
    }).then(res => {
      setData(res);
      if (res.indexOf('Successfully') >= 0) {
        clearInterval(interval);
        request('http://127.0.0.1:12581/clear');
        history.push('/appInfo')
      }
    })
  }

  useEffect(() => {

    if (!interval) {
      interval = setInterval(() => {
        init();
      }, 2000);
    }
  }, []);
  return <Layout title={'应用创建中'}>
    <Input.TextArea value={data} readOnly/>
  </Layout>
}
