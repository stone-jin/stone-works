import { Nav } from '@/components/nav';
import styles from './index.less';
import { AppTemplate } from './templates';

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className={styles.content}>
        <div className={styles.header}>
          <span>应用模板中心</span>
        </div>
        <div className={styles.body}>
          <AppTemplate></AppTemplate>
        </div>
        
      </div>
    </div>
  );
}
