import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import Taxdomroute from './Routes/Taxdomroute';
import SuperAdminLogin from './pages/superAdmin/SuperAdminLogin';
import AdminLogin from './pages/admin/AdminLogin';
import Confirmationcode from './pages/Firmlogin/Confirmationcode';
import YourInformation from './pages/Firmlogin/YourInformation';
import FirmInformation from './pages/Firmlogin/FirmInformation';
import ServicesFirm from './pages/Firmlogin/ServicesFirm';
import FirmSettings from './pages/Firmlogin/FirmSettings';
import RangeSlider from './pages/admin/RangeSlider';

function App() {
 return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Taxdomroute/>} />
    <Route path='/superadminlogin' element={<SuperAdminLogin/>} />
    <Route path='/adminlogin' element={<AdminLogin/>} />
    <Route path='/rangeslider' element={<RangeSlider/>} />
   

    

  </Routes>
  
  </BrowserRouter>
  
    
  </>
    
  );
}

export default App;