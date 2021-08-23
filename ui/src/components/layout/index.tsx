import { Nav } from '@/components/nav';
import styles from './index.less';

export default function Layout(props: any) {
  return (
    <div>
      <Nav />
      <div className={styles.content}>
        <div className={styles.header}>
          <span>{props.title}</span>
        </div>
        <div className={styles.body}>
          {props.children}
        </div>

      </div>
    </div>
  );
}
