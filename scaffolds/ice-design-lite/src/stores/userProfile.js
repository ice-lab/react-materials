import request from '../utils/request';
import { userProfile } from '../sourceConfig';

export default {
  name: '',
  department: '',
  avatar: '',
  userid: '',

  async fetchData() {
    try {
      const { data } = await request(userProfile);
      const { name, department, avatar, userid } = data;
      this.name = name;
      this.department = department;
      this.avatar = avatar;
      this.userid = userid;
    } catch (error) {
    }
  }

};
