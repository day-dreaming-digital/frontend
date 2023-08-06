import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        {/* <Layout> */}
          <Routes></Routes>
        {/* </Layout> */}
      </Router>
    </div>
  );
}

export default App;
