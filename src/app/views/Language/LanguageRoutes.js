import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
const ChooseLanguage = Loadable(lazy(() => import('./ChooseLang')));
const ChooseLangType = Loadable(lazy(() => import('./ChooseLangType')));
const ChooseLangOrgType = Loadable(lazy(() => import('./LangOrgType')));
const LanuguageProfile = Loadable(lazy(() => import('./LangProfile')));
const LanguageProjects = Loadable(lazy(() => import('./LanguageProjects')));
const AddPastProjects = Loadable(lazy(() => import('./AddPastProjects')));
const Endorsementproj = Loadable(lazy(() => import('./Endorsement')));
const Addendoresementsnow = Loadable(lazy(() => import('./Addendoresementsnow')));
const OwnerAccount = Loadable(lazy(() => import('./OwnerAccount')));
const CompanyVerification = Loadable(lazy(() => import('./ComapanyVerification')));
const CompanyVerifyComplete = Loadable(lazy(() => import('./CompanyVerifyComplete')));
const HiringPreference = Loadable(lazy(() => import('./HiringPreference')));

const LanguageRoutes = [
  { path: '/Language/ChooseLang', element: <ChooseLanguage /> },
  { path: '/Language/ChooseLangType', element: <ChooseLangType /> },
  { path: '/Language/LangOrgType', element: <ChooseLangOrgType /> },
  { path: '/Language/LangProfile', element: <LanuguageProfile /> },
  { path: '/Language/LanguageProjects', element: <LanguageProjects /> },
  { path: '/Language/AddPastProjects', element: <AddPastProjects /> },
  { path: '/Language/Endorsement', element: <Endorsementproj /> },
  { path: '/Language/Addendoresementsnow', element: <Addendoresementsnow /> },
  { path: '/Language/OwnerAccount', element: <OwnerAccount /> },
  { path: '/Language/CompanyVerification', element: <CompanyVerification /> },
  { path: '/Language/CompanyVerifyComplete', element: <CompanyVerifyComplete /> },
  { path: '/Language/HiringPreference', element: <HiringPreference /> },

  

];
export default LanguageRoutes;
