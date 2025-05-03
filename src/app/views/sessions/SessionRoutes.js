import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NotFound = Loadable(lazy(() => import('./NotFound')));
const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')));
const ResetPassword = Loadable(lazy(() => import('./ResetPassword')));
const JwtLogin = Loadable(lazy(() => import('./JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('./JwtRegister')));
const UnlockPassword = Loadable(lazy(() => import('./UnLockPassword')));
const Notification = Loadable(lazy(() => import('./Notificaion')));
const JwtLogindetails=Loadable(lazy(() => import('./JwtLoginDetails')));
const Signup = Loadable(lazy(() => import('./Signup')));
const EmailVerification = Loadable(lazy(() => import('./EmailVerificatio')));
const AccountVerification = Loadable(lazy(() => import('./AccountVerification')));
const UploadGovID = Loadable(lazy(() => import('./UploadGovId')));
const UploadUID = Loadable(lazy(() => import('./UploadUid')));
const JoinUS = Loadable(lazy(() => import('./JoinUS')));
const CountyIND = Loadable(lazy(() => import('./CountryIndustry')));
const EnterYourOTP = Loadable(lazy(() => import('./EnterYourOTP')));
const ResetPassSucces = Loadable(lazy(() => import('./ResetPassSucces')));
const CreaLoadPage = Loadable(lazy(() => import('./CreaLoadPage')));






const sessionRoutes = [
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },
  { path: '/session/reset-password', element: <ResetPassword /> },
  { path: '/session/unlock-password', element: <UnlockPassword /> },
  { path: '/session/unlock-password/:notificationName', element: <Notification/> },
  { path: '/session/404', element: <NotFound /> },
  {path:'/session/login-details',element:<JwtLogindetails/>},
 { path:"/session/email-verification", element:<EmailVerification />},
 {path:"/session/account-verification" ,element:<AccountVerification />},
 {path:"/session/signup-page" ,element:<Signup/>},
 {path:"/session/upload-id" ,element:<UploadGovID/>},
 {path:"/session/uploadgov-id" ,element:<UploadUID/>},
 {path:"/session/join-us" ,element:<JoinUS/>},
 {path:"/session/country-industry" ,element:<CountyIND/>},
 {path:"/session/enter-your-otp" ,element:<EnterYourOTP/>},
 {path:"/session/reset-pass-succes" ,element:<ResetPassSucces/>},
 {path:"/session/crea-load-page" ,element:<CreaLoadPage/>},






];

export default sessionRoutes;
