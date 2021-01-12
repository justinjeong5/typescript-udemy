import { User } from './User'
import { Company } from './Company'
import { FacadeMap } from './FacadeMap'

const facadeMap = new FacadeMap('googleMap');
const user = new User();
const company = new Company();

facadeMap.addMarker(user);
facadeMap.addMarker(company);
