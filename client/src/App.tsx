import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Components
import Header from './components/Header';
import Home from './Home';
import Write from './Write';

//CSS
import './css/App.module.css';

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/write' element={<Write />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
