import { request } from '@/utils/request';
import { userProfile } from '@/config/dataSource';

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
};
