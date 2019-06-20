import request from '@/utils/request';
import { userProfile, userLogout, userLogin } from '../dataSourceConfig';

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
      const { name, department, avatar, userid, authority } = data.data;
      this.userinfo = { name, department, avatar };
      this.userid = userid;
      this.authority = authority;
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
    if (callback) {
      callback();
    }
  },

  async logout(callback) {
    const { data } = await request(userLogout);
    this.authority = data.authority;
    if (callback) {
      callback();
    }
  },
};
