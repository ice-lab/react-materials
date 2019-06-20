import React from 'react';
import Exception from '@/components/Exception';

/**
  权限组件，可控制页面或者组件
  @authorities 表示哪些权限可以访问

    控制页面例子：
      import React from 'react';
      import { withAuth } from '@/components/Auth';

      function BasicList() {
        return (
          <div className="list-page">
            <Table />
          </div>
        );
      }

      export default withAuth({
        authorities: ['admin', 'user'],
      })(BasicList);

    控制组件例子：
      <Auth authorities={['admin', 'user']}>
        <Button>auth</Button>
      </Auth>
 */

const Auth = ({ children, authorities = [] }) => {
  // 获取当前用户的权限
  const userAuthority = localStorage.getItem('ice-pro-authority') || 'guest';

  if (authorities.indexOf(userAuthority) === -1) {
    // 也可以跳转到统一的无权限页面，具体看业务需求
    return (
      <Exception
        statusCode="403"
        description="抱歉，你没有权限访问该页面"
      />
    );
  }

  return children;
};

const withAuth = (params) => (TargetElement) => {
  return (props) => {
    return (
      <Auth {...params}>
        <TargetElement {...props} />
      </Auth>
    );
  };
};

export { withAuth };

export default Auth;
