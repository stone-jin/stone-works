import { Nav } from "@/components/nav";
import { AppTemplate } from "../templates";
import styles from './index.less'
import { Button } from 'antd';
import { request } from 'umi'
import { useEffect, useState } from 'react';
import Layout from '../../components/layout/index';

export default function SettingPage() {
  const [apps, setApps] = useState<any>([]);
  const init = () => {
    request('http://127.0.0.1:12581/applications').then(res => {
      setApps(res);
    });
  }
  useEffect(() => {
    init();
  }, []);

  const open = (item: any) => {
    request('http://127.0.0.1:12581/openProject', {
      method: 'post',
      data: {
        name: item.name,
        dir: item.dir
      }
    }).then(res => {
      //setApps(res);
    });
  }
  return <Layout title={'我的应用'}>
    {apps.map((item: any, index: any) => {
      return <div key={index}>
        <div className={styles.icon}>{item.name.substr(0, 1)}</div>
        <span>{item.name}</span>
        <Button type="primary" onClick={() => { open(item) }}>打开</Button>
      </div>
    })}
  </Layout>
}
