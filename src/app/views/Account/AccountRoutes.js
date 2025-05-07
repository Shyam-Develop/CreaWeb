
import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const MyAccount = Loadable(lazy(() => import('./MyAccount')));
 const BiodataEdit = Loadable(lazy(() => import('./BiodataEdit')));
 const Experience = Loadable(lazy(() => import('./Experience')));
 const Arthography = Loadable(lazy(() => import('./Arthography')));
const accountRoutes = [
  { path: '/account/my-profile', element: <MyAccount /> },
  { path: '/account/my-profile/biodata/:mode', element: <BiodataEdit /> },
  { path: '/account/my-profile/Experience', element: <Experience /> },
  { path: '/account/my-profile/:screenName', element: <Arthography /> },
];

export default accountRoutes;
