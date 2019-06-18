import React from 'react';
import IceContainer from '@icedesign/container';
import { Checkbox, Button, Message } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import styles from './index.module.scss';

export default function TermsInfo() {
  function handleChange() {
    Message.success('已开通');
  }

  return (
    <IceContainer>
      <h1 className={styles.title}>
        <FormattedMessage id="app.terms.title" />
      </h1>

      <div className={styles.content}>
        <p className={styles.desc}>
          鉴于淘宝网提供的信息发布服务属于电子公告牌（BBS）性质，淘宝网上的店铺、商品信息（包括但不限于店铺名称、公司名称、
          联系人及联络信息、产品的描述和说明、相关图片、视频等）由用户自行提供并上传，由用户对其提供并上传的信息承担相应法律责任
          淘宝网服务提供者对此另有约定的，将在相关的协议或其他法律文本中与您进行明确。
        </p>
        <p className={styles.desc}>
          我们尊重知识产权，反对并打击侵犯知识产权的行为。知识产权权利人若认为淘宝网内容（包括但不限于淘宝网用户发布的商品信息）
          侵犯其合法权益的，可以通过阿里巴巴知识产权保护平台（https://ipp.alibabagroup.com/）进行投诉，我们将在收到知识
          产权权利人合格通知后依据相应的法律法规以及平台规则及时处理。
        </p>
        <p className={styles.desc}>
          广告、分析服务类的授权合作伙伴。除非得到您的许可，否则我们不会将您的个人身份信息（指可以识别您身份的信息，例如姓名或
          电子邮箱，通过这些信息可以联系到您或识别您的身份）与提供广告、分析服务的合作伙伴共享。我们会向这些合作伙伴提供有关其
          广告覆盖面和有效性的信息，而不会提供您的个人身份信息，或者我们将这些信息进行汇总，以便它不会识别您个人。例如，只有在广
          告主同意遵守我们的广告发布准则后，我们才可能会告诉广告主他们广告的效果如何，或者有多少人看了他们广告或在看到广告后安
          装了应用，或者向这些合作伙伴提供不能识别个人身份的统计信息（例如“男性，25-29岁，位于北京”），帮助他们了解其受众或顾客。
        </p>
        <p className={styles.desc}>
          我们已采取符合业界标准、合理可行的安全防护措施保护您提供的个人信息安全，防止个人信息遭到未经授权访问、公开披露、使用、修
          改、损坏或丢失。例如，在您的浏览器与服务器之间交换数据（如信用卡信息）时受
          SSL（Secure Socket Layer）协议加密保护；
          我们同时对淘宝网网站提供HTTPS（Hyper Text Transfer Protocol over
          Secure Socket Layer）协议安全浏览方式。
        </p>
      </div>

      <p>
        <Checkbox>
          <FormattedMessage id="app.terms.hint" />
        </Checkbox>
      </p>

      <div className={styles.button}>
        <Button type="primary" onClick={handleChange}>
          <FormattedMessage id="app.terms.btn" />
        </Button>
      </div>
    </IceContainer>
  );
}
