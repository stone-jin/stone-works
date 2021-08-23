import styles from './index.less';

export const TemplateItem = (props: any) => {
  return <div className={styles.box} onClick={props.onClick}>
    <div><span className={styles.title}>{props.title}</span></div>
    <div><span className={styles.description}>{props.description}</span></div>
  </div>
}