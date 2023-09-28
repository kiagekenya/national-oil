import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Check from './components/check/Check';
import  CheckOut from './components/checkout/CheckOut';
import All from './components/all/All';
import Splash from './components/splash/splash';
import Report from './components/report/Report';
import Signin from './components/Authin/authin';
import Signup from './components/Auth/auth';
import Admin from './components/admin/Admin';
import List from './components/list/List';
import './styles.css'


export default function App() {

    const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3100); 
  }, []);



    return (
      <BrowserRouter>
        <Routes>

        {loading ? (
          <Route exact path='/' element={<Splash />} />
        ) : (
            <Route exact path='/' element={< All />}></Route>
        )}
         <Route exact path='/checkin' element={< Check/>}></Route>
                <Route exact path='/checkout' element={< CheckOut />}></Route>
                <Route exact path= '/signin' element={< Signin />}></Route>
                <Route exact path= '/signup' element={<Signup />}></Route>
                <Route exact path= '/report' element={<Report />}></Route>
                <Route exact path= '/admin'  element={<Admin />}></Route>
                <Route exact path= '/list' element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/> );