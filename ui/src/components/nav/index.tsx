import React from 'react';
import styles from './index.less'
import { CloudServerOutlined, CommentOutlined, DashboardOutlined, FieldTimeOutlined, SettingOutlined} from '@ant-design/icons'
import { history } from 'umi';

export const Nav = () => {
  return <div className={styles.left}>
    <img src="https://avatars.githubusercontent.com/u/6525544?v=4" alt="" className={styles.avatar} />
    <CloudServerOutlined className={styles.Icon} onClick={() => { history.push('/') }}/>
    <FieldTimeOutlined className={styles.Icon} onClick={() => { history.push('/application') }}/>
    <SettingOutlined className={styles.Icon} onClick={() => { history.push("/setting") }}/>
    <CommentOutlined className={[styles.Icon, styles.bottom].join(" ")} onClick={() => { history.push('/feedback') }}/>
  </div>
}