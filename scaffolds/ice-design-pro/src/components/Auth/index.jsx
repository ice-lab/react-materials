import React from 'react';
import cookie from 'cookie';
import { Link } from 'react-router-dom';

import Exception from '@/components/Exception';

/**
 * 权限组件，可根据权限控制页面或者组件的显示隐藏或者显示无权限页
 * @params {array} authorities 允许哪些角色使用
 * @params {boolean} hidden 无权限时是否直接隐藏
 *
 * 控制页面例子：
 *    import React from 'react';
 *    import { withAuth } from '@/components/Auth';
 *     function BasicList() {
 *       return (
 *         <div className="list-page">
 *           <Table />
 *         </div>
 *       );
 *     }
 *
 *     export default withAuth({
 *       authorities: ['admin', 'user'],
 *     })(BasicList);
 *
 * 控制组件例子：
 *     <Auth authorities={['admin', 'user']}>
 *       <Button>auth</Button>
 *     </Auth>
 */
const Auth = ({ children, authorities = [], hidden }) => {
  // 服务端将 authority 保存在 cookie 中，前端只负责取 cookie
  const { authority } = cookie.parse(document.cookie);
  const hasAuth = authorities.indexOf(authority) !== -1;

  if (hasAuth) {
    // 有权限直接渲染内容
    return children;
  } else {
    // 无权限
    if (hidden) {
      // 无权限则不显示内容
      return null;
    }
    // 无权限则显示指定 UI，也可以跳转到统一的无权限页面
    return (
      <Exception
        statusCode="403"
        description={<div>
          <p>抱歉，当前用户为 {authority || 'Guest'}, 没有权限访问该页面</p>
          <p>您可以<Link to="/user/login">登录 Admin 用户</Link>再查看该页面</p>
        </div>}
      />
    );
  }
};

const withAuth = (params) => (WrapperedComponent) => {
  return (props) => {
    return (
      <Auth {...params}>
        <WrapperedComponent {...props} />
      </Auth>
    );
  };
};

export { withAuth };

export default Auth;
