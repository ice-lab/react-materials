import { UserInfo } from '@/interfaces/user';
import { createModel } from 'ice';

export default createModel({
  state: {
    name: '',
    avatar: '',
    id: '',
  } as UserInfo,
  reducers: {
    updateUserInfo(prevState: UserInfo, payload = {}) {
      return { ...prevState, ...payload }
    }
  },
})
