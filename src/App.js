//U99796912
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';

const App = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery tours={tours} setTours={setTours} />} />
      </Routes>
    </Router>
  );
};

export default App;