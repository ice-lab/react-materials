import React from 'react';
import { Nav } from '@alifd/next';
import { headerMenuConfig } from '@/config/menu';

export default function HeaderNav() {
  return (
    <>
      {headerMenuConfig && headerMenuConfig.length > 0 ? (
        <Nav direction="hoz" type="primary" selectedKeys={[]}>
          {headerMenuConfig.map((nav, idx) => {
            const linkProps = {};
            if (nav.newWindow) {
              linkProps.href = nav.path;
              linkProps.target = '_blank';
            } else if (nav.external) {
              linkProps.href = nav.path;
            } else {
              linkProps.to = nav.path;
            }
            return (
              <Nav.Item key={idx} icon={nav.icon ? nav.icon : null}>
                <a {...linkProps}>{nav.name}</a>
              </Nav.Item>
            );
          })}
        </Nav>
      ) : null}
    </>
  );
}
