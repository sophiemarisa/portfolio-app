import React from 'react';
//import { HashRouter as HashRouter, Route, Routes, Switch } from 'react-router-dom';
import { HashRouter as HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from './components/Contact/contact';
import Header from './components/Header/header';
import HomeScreen from './components/Home/home';
import ProjectPage from './components/Project/ProjectPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeScreen/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/projects" element={<ProjectPage/>} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;

