import request from '@/utils/request';
import { userProfile, userLogout, userLogin } from '../dataSourceConfig';

export default {
  userinfo: {
    name: '',
    department: '',
    avatar: '',
  },
  userid: '',

  async fetchData() {
    const { data } = await request(userProfile);
    const { name, department, avatar, userid } = data.data;
    this.userinfo = { name, department, avatar };
    this.userid = userid;
  },

  async login(params, callback) {
    const { data } = await request({
      ...userLogin,
      data: {
        ...userLogin.data,
        ...params,
      },
    });
    if (callback) {
      callback(data);
    }
  },

  async logout(callback) {
    const { data } = await request(userLogout);
    if (callback) {
      callback(data);
    }
  },
};
