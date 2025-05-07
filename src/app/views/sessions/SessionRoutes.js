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

const ConnectLoad = Loadable(lazy(() => import('./ConnectLoadPage')));

const DiscoverLoad = Loadable(lazy(() => import('./DiscoverLoadPage')));

const ExploreLoad = Loadable(lazy(() => import('./ExploreLoadPage')));
const SelectYourSkills = Loadable(lazy(() => import('./SelectYourSkills')));
const Biography = Loadable(lazy(() => import('./Biography')));
const Experience = Loadable(lazy(() => import('./Experience')));
const Education = Loadable(lazy(() => import('./Education')));
const PhoneNumber = Loadable(lazy(() => import('./PhoneNumber')));
const PhoneNumberOTP = Loadable(lazy(() => import('./PhoneNumberOTP')));
const EmailVerify = Loadable(lazy(() => import('./EmailVerify')));
const EmailVerifyOTP = Loadable(lazy(() => import('./EmailVerifyOTP')));
const LoadScreen = Loadable(lazy(() => import('./LoadScreen')));
const PrimaryIndustry = Loadable(lazy(() => import('./PrimaryIndustry')));
const SelectedSkills = Loadable(lazy(() => import('./SelectedSkills')));
const ProfileStep = Loadable(lazy(() => import('./ProfileStep')));
const HelpOptionScreen = Loadable(lazy(() => import('./HelpOptionScreen')));
const LoadingPage = Loadable(lazy(() => import('./LoadingPage')));
const Education2 = Loadable(lazy(() => import('./Education2')));






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
 {path:"/crea/on-boarding" ,element:<ConnectLoad/>},
 {path:"/session/crea-discover" ,element:<DiscoverLoad/>},
 {path:"/session/crea-explore" ,element:<ExploreLoad/>},
  {path:"/session/select-your-skills" ,element:<SelectYourSkills/>},
  {path:"/session/biography" ,element:<Biography/>},
  {path:"/session/experience" ,element:<Experience/>},
  {path:"/session/education" ,element:<Education/>},
  {path:"/session/phone-number" ,element:<PhoneNumber/>},
  {path:"/session/phone-number-otp" ,element:<PhoneNumberOTP/>},
  {path:"/session/email-verify" ,element:<EmailVerify/>},
  {path:"/session/email-verify-otp" ,element:<EmailVerifyOTP/>},
  {path:"/session/load-screen" ,element:<LoadScreen/>},
  {path:"/session/primary-industry" ,element:<PrimaryIndustry/>},
  {path:"/session/selected-skills" ,element:<SelectedSkills/>},
  {path:"/session/profile-step" ,element:<ProfileStep/>},
  {path:"/session/help-option-screen" ,element:<HelpOptionScreen/>},
  {path:"/session/loading-page" ,element:<LoadingPage/>},
  {path:"/session/education2" ,element:<Education2/>},



















];

export default sessionRoutes;
