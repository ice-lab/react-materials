import React from "react";
import Logo from "../Logo";
import styles from  "./index.module.scss";

export default () => {
  return (
    <div className={styles.footer}>
      <div className={styles.div}>
        <Logo isDark />
      </div>
      <div className={styles.footerb}>
        阿里巴巴集团
        <br />© 2018 版权所有
      </div>
    </div>
  );
};
