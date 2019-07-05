import request from '../utils/request';
import { userProfile } from '../dataSourceConfig';

export default {
  userinfo: {
    name: '',
    department: '',
    avatar: '',
  },
  userid: '',

  async fetchData() {
    try {
      const { data } = await request(userProfile);
      const { name, department, avatar, userid } = data.data;
      this.userinfo = { name, department, avatar };
      this.userid = userid;
    } catch (err) {
      console.error(err);
    }
  },

};
