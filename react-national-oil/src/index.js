import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Check from './components/check/Check';
import  CheckOut from './components/checkout/CheckOut';
import All from './components/all/All';
import Splash from './components/splash/splash';
import Report from './components/report/Report';
import Signup from './components/Auth/auth';
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
                <Route exact path= '/signup' element={< Signup />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/> );