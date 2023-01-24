import React from 'react';
import ReactDOM from 'react-dom/client';
import MyHome from './components/Home'
import {About} from './components/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
    <Route path='' element={<MyHome/>}/>

    <Route path='Home' element={<MyHome/>}>

    <Route path='About' element={<About/>}/>

    </Route>


    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
