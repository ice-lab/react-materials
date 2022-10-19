import { UserInfo } from '@/interfaces/user';
import { fetchUserInfo } from '@/services/user';
import { createModel } from 'ice';

export default createModel({
  state: {
    name: '',
    avatar: '',
    id: '',
  } as UserInfo,
  reducers: {
    update(prevState: UserInfo, payload = {}) {
      return {
        ...prevState,
        ...payload,
      }
    }
  },
  effects: (dispatch) => ({
    async updateUserInfo(userType) {
      const userInfo = await fetchUserInfo(userType);
      this.update(userInfo);
    },
  }),
})
