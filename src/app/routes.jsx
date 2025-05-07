import AuthGuard from "./auth/AuthGuard";
import AppLayout from "./components/appLayout/AppLayout";
import sessionRoutes from "./views/sessions/SessionRoutes";
import { Navigate } from "react-router-dom";
import NotFound from "./views/sessions/NotFound";
import mastersRoutes from "./views/masters/MasterRoutes";
import { Dashboard, Home } from "@mui/icons-material";

import UnderDevelopment from "./views/sessions/UnderDevelopment";

import HomePage from "./views/Home/Home";
import accountRoutes from "./views/Account/AccountRoutes";
import hiringRoutes from "./views/Hiring DashBoard/Hiringroutes";

const routes = [
    {
      element: (
        <AuthGuard>
          <AppLayout />
        </AuthGuard>
      ),
      children: [
         { path: '/home', element:<HomePage/> },
        // ...mastersRoutes,
        ...accountRoutes,
        ...hiringRoutes,
        { path: '*', element: <UnderDevelopment /> },
      ],
    },
    ...sessionRoutes,
    // { path: '/', element: <Navigate to="/session/signin" /> },
    { path: '/', element: <Navigate to="/session/crea-load-page" /> },
    { path: '*', element: <NotFound /> },


    





  ];
  
  export default routes;