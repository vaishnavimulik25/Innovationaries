import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import MembersLogin from './components/MembersLogin';
import ProgramsOffered from './components/ProgramsOffered';

import Login from './components/Login';
import SignUp from './components/SignUp';
import OrphanagesPage from './components/OrphanagesPage';
/*import Mentorship from './components/Mentorship'; // Replace with your Meimport React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import MembersLogin from './components/MembersLogin';
import ProgramsOffered from './components/ProgramsOffered';

import Login from './components/Login';
import SignUp from './components/SignUp';
import OrphanagesPage from './components/OrphanagesPage';
/*import Mentorship from './components/Mentorship'; // Replace with your Mentorship component
import Interactions from './components/Interactions'; // Replace with your Interactions component*/

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programsOffered" element={<ProgramsOffered/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/user-login" element={<MembersLogin />} />
        <Route path="/orphanage-login" element={<MembersLogin />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/orphanages" element={<OrphanagesPage />} />

        {/* Uncomment and add other routes for additional pages if needed */}
        {/*<Route path="/mentorship" element={<Mentorship />} />
        <Route path="/interactions" element={<Interactions />} />
         Add other routes for additional pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;