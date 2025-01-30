import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import EmployeeForm from './EmployeeForm';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import './App.css';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/EmployeeForm" element={<EmployeeForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}



export default App;