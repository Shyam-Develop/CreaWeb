
import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const HiringdashBoard = Loadable(lazy(() => import('./hiringpage')));
 const AddInternShip = Loadable(lazy(() => import('./addInternShip')));
 const ProjectHiring = Loadable(lazy(() => import('../Account/Arthography')));
 const ProjectFeed = Loadable(lazy(() => import('./addPostFeed')));
 const CastingCall = Loadable(lazy(() => import('./addCastingCall')));
 const GigWork = Loadable(lazy(() => import('./addGigWork')));

 //  const Experience = Loadable(lazy(() => import('./Experience')));
//  const Arthography = Loadable(lazy(() => import('./Arthography')));
const hiringRoutes = [
  { path: '/hiring-dash-board', element: <HiringdashBoard /> },
  { path: '/hiring-dash-board/:screenName', element: <AddInternShip /> },
  { path: '/hiring-dash-board/project/:screenName', element: <ProjectHiring /> },
  { path: '/hiring-dash-board/add-post-feed', element: <ProjectFeed /> },
  { path: '/hiring-dash-board/add-casting-call', element: <CastingCall /> },
  { path: '/hiring-dash-board/add-gigwork', element: <GigWork /> },
  //   { path: '/account/my-profile/Experience', element: <Experience /> },
//   { path: '/account/my-profile/Arthography', element: <Arthography /> },
];

export default hiringRoutes;
