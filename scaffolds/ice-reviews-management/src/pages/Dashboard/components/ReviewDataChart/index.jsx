import React from 'react';
import IceContainer from '@icedesign/container';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import DataSet from '@antv/data-set';
import styles from './index.module.scss';

const data = [
  {
    name: '已完成',
    一月: 118,
    二月: 128,
    三月: 139,
    四月: 181,
    五月: 147,
    六月: 120,
    七月: 124,
    八月: 135,
  },
  {
    name: '已邀请',
    一月: 212,
    二月: 223,
    三月: 234,
    四月: 299,
    五月: 252,
    六月: 235,
    七月: 237,
    八月: 242,
  },
  {
    name: '已回绝',
    一月: 12,
    二月: 13,
    三月: 24,
    四月: 129,
    五月: 122,
    六月: 225,
    七月: 117,
    八月: 22,
  },
];
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'fold',
  fields: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月'],
  key: '月份',
  value: '数量',
});

export default function ReviewDataChart() {
  return (
    <IceContainer title="数据图表">
      <div className={styles.coreDataTitle}>近一月</div>
      <div className={styles.coreDataWrapper}>
        <div className={styles.coreData}>
          <div className={styles.coreDataCount}>135</div>
          <div className={styles.coreDataDesc}>
            <span
              style={{ backgroundColor: '#5e83fb' }}
              className={styles.indicator}
            />
            <span>已完成</span>
          </div>
        </div>
        <div className={styles.coreData}>
          <div className={styles.coreDataCount}>242</div>
          <div className={styles.coreDataDesc}>
            <span
              style={{ backgroundColor: '#ee706d' }}
              className={styles.indicator}
            />
            <span>已邀请</span>
          </div>
        </div>
        <div className={styles.coreData}>
          <div className={styles.coreDataCount}>22</div>
          <div className={styles.coreDataDesc}>
            <span
              style={{ backgroundColor: '#58ca9a' }}
              className={styles.indicator}
            />
            <span>已回绝</span>
          </div>
        </div>
      </div>
      <div className={styles.coreDataChartWrapper}>
        <Chart padding={[40, 40, 40, 40]} height={300} data={dv} forceFit>
          <Axis name="月份" />
          <Axis name="数量" />
          <Tooltip crosshairs={{ type: 'y' }} />
          <Geom
            type="interval"
            position="月份*数量"
            color={['name', ['#5e83fb', '#ee706d', '#58ca9a']]}
            adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]}
          />
        </Chart>
      </div>
    </IceContainer>
  );
}
