import React from "react";
import styles from "./index.module.scss";

export default function PlatformIntro2() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <h2 className={styles.title}>高效的内容创作工具</h2>
        <p className={styles.text}>
          聚集全网最新鲜的创意，直击用户需求
          <br />
          海量优质素材，快速锁定优质商品、图片、视频
          <br />
          发布前内容质量诊断，内容编辑更高效
        </p>
      </div>
      <img
        src={require("./images/TB1DzIrRVXXXXckXFXXXXXXXXXX-1740-800.png")}
        alt=""
        className={styles.image}
      />
    </div>
  );
}
