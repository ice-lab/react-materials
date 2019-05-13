import React from 'react';
import './UserLayout.scss';

export default () => {
  return (
    <div className="footer">
      <div className={styles.links}>
        <a href="#" className="link">
          帮助
        </a>
        <a href="#" className="link">
          隐私
        </a>
        <a href="#" className="link">
          条款
        </a>
      </div>
      <div className={styles.copyright}>阿里巴巴集团 © 2018 版权所有</div>
    </div>
  );
};


