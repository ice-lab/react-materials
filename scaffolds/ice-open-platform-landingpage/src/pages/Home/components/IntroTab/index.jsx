import React, { useState } from 'react';
import styles from './index.module.scss';

export default function IntroTab() {
  const [index, setIndex] = useState(0);

  const isSelected = (selectedIndex, target) => (selectedIndex === target ? 'selected' : ' ');

  const clickTab = (event) => {
    let { index: dataIndex } = event.currentTarget.dataset;
    dataIndex = parseInt(dataIndex, 10);
    if (isNaN(dataIndex)) {
      dataIndex = 0;
    }
    setIndex(dataIndex);
  };

  return (
    <div className={styles.scenarioColumn}>
      <h3>应用场景</h3>
      <div className={styles.scenarioSlider}>
        <div className={styles.scenarioList}>
          <div
            data-index="0"
            onClick={clickTab}
            className={`${styles.scenarioItem} ${isSelected(index, 0)}`}
          >
            <img
              src={require('./images/buKnoKlvQeEzYxttqrFh.svg')}
              alt=""
            />
            <img
              className={styles.selected}
              src={require('./images/MnBlZZrbYBdVvXrCOyfW.svg')}
              alt=""
            />
            <h4>物业缴费</h4>
            <p>提升缴费效率</p>
          </div>

          <div
            data-index="1"
            onClick={clickTab}
            className={`${styles.scenarioItem} ${isSelected(index, 1)}`}
          >
            <img
              src={require('./images/BdPVAfibJHPeFvZIcsTr.svg')}
              alt=""
            />
            <img
              className={styles.selected}
              src={require('./images/NqHbRYuggzIiBJTZOCfa.svg')}
              alt=""
            />
            <h4>小区生活号</h4>
            <p>物业运营阵地</p>
          </div>

          <div
            data-index="2"
            onClick={clickTab}
            className={`${styles.scenarioItem} ${isSelected(index, 2)}`}
          >
            <img
              src={require('./images/ZDqQbDUiGLDzygPQIMxp.svg')}
              alt=""
            />
            <img
              className={styles.selected}
              src={require('./images/rHxglRXhjrhTOgRfqrah.svg')}
              alt=""
            />
            <h4>社区理财</h4>
            <p>提升现金管理收益</p>
          </div>
        </div>
      </div>
      <div className={styles.scenarioDetailList}>
        <div className={`${styles.scenarioDetailItem} ${isSelected(index, 0)}`}>
          <div className={styles.scenarioDetailLeft}>
            <h4>物业缴费</h4>
            <p>
              用户可通过“支付宝—生活缴费—物业费，选择自己的房间号后即可查询相关费用并进行缴费；支持在线付、扫码付和代扣等
            </p>
            <ul className={styles.scenarioAbilityList}>
              <li>
                <h5 className={styles.abilityTitle}>场景价值</h5>

                <p className={styles.abilityDesc}>
                  为业主提供简单的缴费服务
                  {' '}
                  <br />
为物业降低催收成本、提升缴费效率
                </p>
              </li>

              <li>
                <h5 className={styles.abilityTitle}>包含产品能力</h5>

                <div className={styles.abilityRealRow}>
                  <span className={`${styles.circleItem} ${styles.blueCircle}`}>线上缴费 </span>
                  <span className={styles.circleItemSpacing} />

                  <span className={`${styles.circleItem} ${styles.blueCircle}`}>当面付</span>
                  <span className={`${styles.circleItemSpacing}`} />
                </div>
              </li>

              <li>
                <h5 className={styles.abilityTitle}>关联产品能力</h5>

                <div className={styles.abilityRealRow}>
                  <span className={styles.circleItem}>账单提醒</span>
                  <span className={styles.circleItemSpacing} />

                  <span className={styles.circleItem}>余利宝 </span>
                  <span className={styles.circleItemSpacing} />

                  <span className={styles.circleItem}>资金清算</span>
                  <span className={styles.circleItemSpacing} />

                  <span className={styles.circleItem}>电子发票</span>
                  <span className={styles.circleItemSpacing} />
                </div>
              </li>

              <li>
                <h5 className={styles.abilityTitle}>合作门槛及要求</h5>

                <p className={styles.abilityDesc}>
                  1、商务能力：有物业行业资源和客户
                  {' '}
                  <br />
2、开发能力：有系统开发和对接能力
                  <br />
                  {' '}
                  3、服务能力：有物业公司的运营活动和地推引导等服务运营能力
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.scenarioDetailRight}>
            <img
              src={require('./images/ATrmyVCFsdLJlliHBppp.png')}
              alt=""
            />
          </div>
        </div>

        <div className={`${styles.scenarioDetailItem} ${isSelected(index, 1)}`}>
          <div className={styles.scenarioDetailLeft}>
            <h4>
              小区生活号
            </h4>
            <p>
              以生活号为阵地，接入各项业务，搭建智慧社区运营阵地。可以通过此平台对用户进行信息推送、服务输出、交易场景打通和会员关系管理；
              支持：自定义扩展区、自定义菜单、用户标签、消息推送
            </p>
            <ul className={styles.scenarioAbilityList}>
              <li>
                <h5 className={styles.abilityTitle}>场景价值</h5>

                <p className={styles.abilityDesc}>
                  为物业公司低成本搭建一个个性化的APP，实现物业品牌露出和形象传播；
                  <br />
智慧社区持续的运营阵地，实现服务与用户的连接；
                  <br />
借助自身的能力、资源以及第三方资源丰富了业主服务内容；
                  <br />
生态各方的协作与专业分工，为业主提供更好服务，实现生态共赢
                </p>
              </li>

              <li>
                <h5 className={styles.abilityTitle}>包含产品能力</h5>

                <div className={styles.abilityRealRow}>
                  <span className={`${styles.circleItem} ${styles.blueCircle}`}>生活号</span>
                  <span className={styles.circleItemSpacing} />
                </div>
              </li>

              <li>
                <h5 className={styles.abilityTitle}>关联产品能力</h5>

                <div className={styles.abilityRealRow}>
                  <span className={styles.circleItem}>业主卡</span>
                  <span className={styles.circleItemSpacing} />

                  <span className={styles.circleItem}>小程序</span>
                  <span className={styles.circleItemSpacing} />

                  <span className={styles.circleItem}>圈子</span>
                  <span className={styles.circleItemSpacing} />
                </div>
              </li>

              <li>
                <h5 className={styles.abilityTitle}>合作门槛及要求</h5>

                <p className={styles.abilityDesc}>
                  1、有一定的开发能力，有物业行业合作经验的服务商
                  <br />
2、有一定的运营能力，可以进行线上线下的运营活动、地推引导
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.scenarioDetailRight}>
            <img
              src={require('./images/qhiRAOVMONMMircrVhJB.png')}
              alt=""
            />
          </div>
        </div>

        <div className={`${styles.scenarioDetailItem} ${isSelected(index, 2)}`}>
          <div className={styles.scenarioDetailLeft}>
            <h4>
              社区理财
            </h4>
            <p>
              物业公司在收到物业费停车费等相关费用后，直接发起余利宝的申购，能享受理财收益，待需要费用支出时，再从余利宝中赎回，将资金付给相关人员
            </p>
            <ul className={styles.scenarioAbilityList}>
              <li>
                <h5 className={styles.abilityTitle}>场景价值</h5>

                <p className={styles.abilityDesc}>
                  物业公司：零门槛享受互联网理财服务；获得相对低风险的稳定理财收益；同时保持资金的充分流动性；
                  <br />
合作伙伴：与风险理财产品的对接，增强自身方案的完整性，降低物业公司的合作成本，增强市场竞争力；
                </p>
              </li>

              <li>
                <h5 className={styles.abilityTitle}>包含产品能力</h5>

                <div className={styles.abilityRealRow}>
                  <span className={`${styles.circleItem} ${styles.blueCircle}`}>余利宝</span>
                  <span className={styles.circleItemSpacing} />
                </div>
              </li>

              <li>
                <h5 className={styles.abilityTitle}>合作门槛及要求</h5>

                <p className={styles.abilityDesc}>
                  已开通企业支付宝账号及相关认证
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.scenarioDetailRight}>
            <img
              src={require('./images/ySkOyTnwEMufrSgxRSyq.png')}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={`${styles.scenarioActions} ${isSelected(index, 0)}`}>
        <a className={`${styles.scenarioAction} ${styles.primary}`} href="#">
          立即接入
        </a>

        <a className={`${styles.scenarioAction} ${styles.secondary}`} href="#">
          查看接入指南
        </a>
      </div>

      <div className={`${styles.scenarioActions} ${isSelected(index, 1)}`}>
        <a className={`${styles.scenarioAction} ${styles.primary}`} href="#">
          立即接入
        </a>

        <a className={`${styles.scenarioAction} ${styles.secondary}`} href="#">
          查看接入指南
        </a>
      </div>

      <div className={`${styles.scenarioActions} ${isSelected(index, 2)}`}>
        <a className={`${styles.scenarioAction} ${styles.primary}`} href="#">
          立即接入
        </a>

        <a className={styles.scenarioAction} href="#">
          接入指南
        </a>
      </div>
    </div>
  );
}
