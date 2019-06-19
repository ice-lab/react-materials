
import Icestore from '@ice/store';
import userProfile from './userProfile';
import userLogout from './userLogout';

const icestore = new Icestore();
icestore.registerStore('userProfile', userProfile);
icestore.registerStore('userLogout', userLogout);

export default icestore;
