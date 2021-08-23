import { Nav } from "@/components/nav";
import { AppTemplate } from "../templates";
import styles from './index.less'

export default function SettingPage() {
  return <div>
    <Nav />
    <div className={styles.content}>
      <div className={styles.header}>
        <span>设置页面</span>
      </div>
      <div className={styles.body}>
        <div>我是设置页面</div>
      </div>

    </div>
  </div>
}