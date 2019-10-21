import Icestore from '@ice/store';
import userProfile from './userProfile';
import expandAside from './expandAside';

const icestore = new Icestore();
icestore.registerStore('userProfile', userProfile);
icestore.registerStore('expandAside', expandAside);

export default icestore;
