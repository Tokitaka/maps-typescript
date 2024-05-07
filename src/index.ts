import { User } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';

//Show the location of user and company as markers on Google Map
const user = new User();
const customMap = new CustomMap('map');

customMap.addMarkerOnUser(user);
