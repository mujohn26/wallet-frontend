import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 