import styles from './index.module.css';

export default (props) => {
  return (
    <div className="icestark-child-app">
      <h3 className={styles.title}>icestark React 微应用</h3>
      {props.children}
    </div>
  );
};
