
import Icestore from '@ice/store';
import userProfile from './userProfile';

const icestore = new Icestore();
icestore.registerStore('userProfile', userProfile);

export default icestore;
