import React from 'react';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function SimpleTestimonial() {
  return (
    <div className={`${styles.simpleTestimonial} simple-testimonial`}>
      <IceContainer>
        <div className={styles.item}>
          <p className={styles.description}>
            “
            随着个人用户对于互联网内容获取的要求和口味越来越特别，怎样提供更加精准个性化的资
            讯订阅服务是提升用户体验的关键。虽然我们发现目前市面上有非常多的资讯类
            app 都标榜自己能
            够提供个人定制化的新闻阅读功能，但是本质上来说一般都是通过新闻源+兴趣点+智能推荐这样的组合实现的
            ”
          </p>
          <div className={styles.infoBox}>
            <img
              className={styles.avatar}
              src={require('./images/TB1cUfViZrI8KJjy0FhXXbfnpXa-450-456.png')}
              alt="图像"
            />
            <h5 className={styles.name}>人物名</h5>
            <p className={styles.company}>就职公司/职务</p>
          </div>
        </div>
      </IceContainer>
    </div>
  );
}
