import React from 'react';
import { HashRouter as HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/contact';
import Header from './components/Header/header';
import HomeScreen from './components/Home/home';
import ProjectPage from './components/Project/ProjectPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
