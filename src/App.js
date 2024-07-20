//U99796912
import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchTours();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <Gallery tours={tours} setTours={setTours} />
    </div>
  );
};

export default App;