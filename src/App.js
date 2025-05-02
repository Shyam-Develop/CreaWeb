import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './LoginForm/Login';
import LoginDetails from './LoginForm/LoginDetails';
import SignUp from './LoginForm/Signup';
import EmailVerification from './LoginForm/Emailverification';
import AccountVerification from './LoginForm/Accountverification';
import UploadGovernmentID from "./LoginForm/UploadgovermentID";
import UploadgovID from "./LoginForm/UploadgovID";
import JoinAs from './LoginForm/Joinus'; 
import CountryIndustryScreen from './LoginForm/Countryindustryscreen'; 
import Yourskills from "./LoginForm/Yourskills";
import DetailScreen from "./LoginForm/Detailscreen";
import Experience from "./LoginForm/Experience";
import Education from "./LoginForm/Education"; 
import HomeScreen from "./Homepages/Home";
import Searchscreen from "./Homepages/Search";
import CreaScreen from "./LoginForm/creapage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login-details" element={<LoginDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/account-verification" element={<AccountVerification />} />
        <Route path="/upload-id" element={<UploadGovernmentID />} />
        <Route path="/uploadgov-id" element={<UploadgovID />} />
        <Route path="/join-as" element={<JoinAs />} /> 
        <Route path="/country-industry" element={<CountryIndustryScreen />} />
        <Route path="/your-skills" element={<Yourskills />} />
        <Route path="/detail-screen" element={<DetailScreen />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} /> 
        <Route path="/home" element={<HomeScreen/>} /> 
        <Route path="/search" element={<Searchscreen/>} /> 
        {/* <Route path="/" element={<CreaScreen />} /> */}


      </Routes>
    </Router>
  );
}

export default App;
