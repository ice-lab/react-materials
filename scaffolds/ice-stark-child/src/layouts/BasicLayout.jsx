import React from 'react';

import style from './BasicLayout.module.scss';

export default (props) => {
  return (
    <div className={style.main}>
      <h1>BasicLayout</h1>
      {props.children}
    </div>
  );
};
