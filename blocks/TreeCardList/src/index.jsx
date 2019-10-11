import React from "react";
import { Select } from "@alifd/next";
import IceContainer from "@icedesign/container";
import styles from  './index.module.scss';

const { Option } = Select;

const dataSource = [
  { tab: "首页", url: "##", subTitle: "10W" },
  { tab: "列表页", url: "##", subTitle: "20W" },
  { tab: "详情页", url: "##", subTitle: "30W" },
  { tab: "下单页", url: "##", subTitle: "10W" },
  { tab: "猜你喜欢", url: "##", subTitle: "40W" },
  { tab: "欢迎页面", url: "##", subTitle: "10W" },
  { tab: "项目管理页", url: "##", subTitle: "20W" },
];

export default function TreeCardList() {
  const renderItem = (item, idx) => {
    return (
      <a href={item.url} className={styles.treecarditem} key={idx}>
        <span>{item.tab}</span>
        <span>{item.subTitle}</span>
      </a>
    );
  };

  return (
    <div className={styles.treecardlist}>
      <IceContainer>
        <div className={styles.firstRow}>
          <span>站点列表</span>
          <Select size="small">
            <Option value="淘宝">淘宝</Option>
            <Option value="支付宝">支付宝</Option>
            <Option value="阿里巴巴">阿里巴巴</Option>
          </Select>
        </div>
        {dataSource.map(renderItem)}
      </IceContainer>
    </div>
  );
}
