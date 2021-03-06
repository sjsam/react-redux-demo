import React, { Fragment } from 'react';
import CompanyData from './components/CompanyData';
import { CompDataFn } from './components/CompanyDataFn';
import FrontOffice from './components/FrontOffice';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import RouterCheck from './components/RouterCheck';
import { AutoNavigate } from './components/AutoNavigator';
import './App.css';

function App() {
  return (
    <Router >
      <AutoNavigate />
      <div className='w-full'>
        <div className='w-full text-center m-4'><h1 className='text-2xl' >XYZ Insurance Company</h1></div>
        <Routes>
          <Route path="/" element={<Fragment>
            <div className="flex flex-row p-4">
              <div className="flex-1 m-2 bg-gray-200 border rounded-md">
                <div className="p-4">
                  <h1 className="text-lg">Front Office</h1>
                  <FrontOffice />
                </div>
              </div>
              <div className="flex-1 m-2 bg-gray-200 border rounded-md">
                <div className="p-4">
                  <h1 className="text-lg">Centralized Company Data</h1>
                  <CompanyData />
                </div>
              </div>
            </div>
            <div className='m-4 p-4 bg-gray-200 border rounded'>
              <h1 className='text-2xl'>State Displayed using Functional Component</h1>
              <CompDataFn />
            </div>
          </Fragment>} />
          <Route path="/fraud" element={<RouterCheck />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
