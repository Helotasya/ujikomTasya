import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './components/Menu';
import './components/style/main.css';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route index element={<Main/>}/>
      <Route path='menu' element={<Menu/>}></Route>
      <Route path='about' element={<AboutUs/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}


export default App;
