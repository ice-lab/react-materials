import React from 'react';
import cookie from 'cookie';
import { Link } from 'react-router-dom';

import Exception from '@/components/Exception';

/**
 * 权限组件，可控制页面或者组件
 * @param {authorities} 权限列表
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
const Auth = ({ children, authorities = [] }) => {
  // 服务端将 authority 保存在 cookie 中，前端只负责取 cookie
  const { authority } = cookie.parse(document.cookie);

  if (authorities.indexOf(authority) === -1) {
    // 也可以跳转到统一的无权限页面，具体看业务需求
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

  return children;
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
