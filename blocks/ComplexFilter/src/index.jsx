import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Select, Grid } from '@alifd/next';
import styles from  './index.module.scss';

const { Row, Col } = Grid;
const {
  Option,
} = Select;

export default function Index() {
  const [currentFilterType, setCurrentFilterType] = useState('article');
  const [categories, setCategories] = useState(['type1', 'type3']);

  const FILTERS = [
    { type: 'article', text: '文章' },
    { type: 'app', text: '应用' },
    { type: 'other', text: '其他' },
  ];

  const CATEGORIES = [
    { type: 'all', text: '全部' },
    { type: 'type1', text: '类目一' },
    { type: 'type2', text: '类目二' },
    { type: 'type3', text: '类目三' },
    { type: 'type4', text: '类目四' },
  ];
  return (
    <div className={styles.complexFilter}>
      <IceContainer className={styles.tabFilterContainer}>
        {FILTERS.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.tabFilterItem} ${
              currentFilterType === item.type ? styles.active  : ''
            }`}
            onClick={() => {
              setCurrentFilterType(item.type);
            }}
          >
            {item.text}
          </div>
        ))}
      </IceContainer>

      <IceContainer>
        <div className={styles.filterBelonging}>
          <span className={styles.filterBelongingLabel}>所属类目：</span>
          {CATEGORIES.map((cat, idx) => (
            <span
              className={`${styles.filterBelongingItem} ${
                categories.indexOf(cat.type) > -1 ? styles.active : ''
              }`}
              onClick={() => {
                const isInCategory = categories.indexOf(cat.type) > -1;
                if (isInCategory) {
                  setCategories(categories.filter(
                    (item) => item !== cat.type
                  ));
                } else {
                  setCategories([...categories, cat.type]);
                }
              }}
              key={idx}
            >
              {cat.text}
            </span>
          ))}
        </div>

        <Row wrap className={styles.filterForm}>
          <Col xxs={24} s={8} className={styles.col}>
            所有者：
            <Select
              className={styles.combobox}
              defaultValue={["卓凌"]}
              mode="tag"
              onBlur={() => console.log('blur')} />
          </Col>

          <Col xxs={24} s={8} className={styles.col}>
            活跃用户：
            <Select className={styles.select}>
              <Option value="">空</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="andy">Andy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
            </Select>
          </Col>

          <Col xxs={24} s={8} className={styles.col}>
            好评度：
            <Select className={styles.select}>
              <Option value="">空</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="andy">Andy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
            </Select>
          </Col>
        </Row>
      </IceContainer>
    </div>
  );
}
