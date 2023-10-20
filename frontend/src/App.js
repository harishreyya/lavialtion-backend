import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import MultiStepForm from './components/MultiStepForm';
import SubmissionTable from './components/SubmissionTable';
import "./App.css"

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ background: '#f2f2f2', padding: '10px', marginBottom: '20px' }}>
          <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}>
            <li style={{ marginRight: '20px' }}>
              <Link to="/login">Login</Link>
            </li>
            <li style={{ marginRight: '20px' }}>
              <Link to="/register">Register</Link>
            </li>
            <li style={{ marginRight: '20px' }}>
              <Link to="/multistepform">Multi-Step Form</Link>
            </li>
            <li>
              <Link to="/submissiontable">Submission Table</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegistrationForm/>} />
          <Route path="/multistepform" element={<MultiStepForm/>} />
          <Route path="/submissiontable" element={<SubmissionTable/>} />
          
        </Routes>

        
      </div>
    </Router>
  );
};

export default App;
