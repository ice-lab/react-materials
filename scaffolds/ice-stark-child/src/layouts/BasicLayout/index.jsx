import React from 'react';
import { Link } from 'react-router-dom';
import LayoutTitle from '@/components/LayoutTitle';

import style from './index.module.scss';

export default props => {
  return (
    <div className={style.main}>
      <LayoutTitle title={<Link to="/">商家平台</Link>} />
      {props.children}
    </div>
  );
};
