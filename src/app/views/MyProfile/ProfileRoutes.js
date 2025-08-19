import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const Basicinfo = Loadable(lazy(() => import('./Basicinfo')));
const AddSkills = Loadable(lazy(() => import('./AddSkill')));

const ProfileRoutes = [
  { path: '/MyProfile/Basicinfo', element: <Basicinfo /> },
   { path: '/MyProfile/AddSkill', element: <AddSkills /> },


  

];
export default ProfileRoutes;
