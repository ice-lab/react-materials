import { history } from 'ice';
import { Avatar, Overlay, Menu, Icon } from '@alifd/next';
import styles from './index.module.css';
import store from '@/store';
import { logout } from '@/services/user';

const { Item } = Menu;
const { Popup } = Overlay;

export interface Props {
  name?: string;
  avatar?: string;
  mail?: string;
}

const UserProfile = ({ name, avatar, mail }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Avatar src={avatar} alt="用户头像" />
      </div>
      <div className={styles.content}>
        <h4>{name}</h4>
        <span>{mail}</span>
      </div>
    </div>
  );
};

const HeaderAvatar = (props: Props) => {
  const {
    name = 'Admin',
    mail = 'name@gmail.com',
    avatar = 'https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png',
  } = props;
  const [, userDispatcher] = store.useModel('user');

  const loginOut = async () => {
    await logout();
    const pathname = history?.location?.pathname;
    history?.push({
      pathname: '/login',
      search: pathname ? `redirect=${pathname}` : '',
    });
  };
  function onMenuItemClick(key: string) {
    if (key === 'logout') {
      userDispatcher.updateCurrentUser({});
      loginOut();
    }
  }

  return (
    <Popup
      trigger={
        <div className={styles.headerAvatar}>
          <Avatar size="small" src={avatar} alt="用户头像" />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </div>
      }
      triggerType="hover"
    >
      <div className={styles.avatarPopup}>
        <UserProfile name={name} mail={mail} avatar={avatar} />
        <Menu className={styles.menu} onItemClick={onMenuItemClick}>
          <Item key="accountSetting"><Icon size="small" type="account" />个人设置</Item>
          <Item key="systemSetting"><Icon size="small" type="set" />系统设置</Item>
          <Item key="logout"><Icon size="small" type="exit" />退出</Item>
        </Menu>
      </div>
    </Popup>
  );
};

export default HeaderAvatar;
