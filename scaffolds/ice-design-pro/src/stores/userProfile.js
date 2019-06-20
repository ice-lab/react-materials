import request from '@/utils/request';
import { userProfile, userLogout, userLogin } from '../dataSourceConfig';

const CURRENT_USER_KEY = 'ice-pro-authority';

export default {
  userinfo: {
    name: '',
    department: '',
    avatar: '',
  },
  userid: '',
  authority: 'guest',

  async fetchData() {
    try {
      const { data } = await request(userProfile);
      const { name, department, avatar, userid } = data.data;
      this.userinfo = { name, department, avatar };
      this.userid = userid;
    } catch (err) {
      console.log(err);
    }
  },

  async login(params, callback) {
    const { data } = await request({
      ...userLogin,
      data: {
        ...userLogin.data,
        ...params,
      },
    });
    this.authority = data.authority;
    localStorage.setItem(CURRENT_USER_KEY, data.authority);
    if (callback) {
      callback();
    }
  },

  async logout(callback) {
    const { data } = await request(userLogout);
    this.authority = data.authority;
    localStorage.setItem(CURRENT_USER_KEY, data.authority);
    if (callback) {
      callback();
    }
  },
};
