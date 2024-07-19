import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ tours, setTours }) => {
  const [showMore, setShowMore] = useState({});

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const toggleShowMore = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (tours.length === 0) {
    return <h2>No tours left</h2>;
  }

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <div key={tour.id} className="tour-card">
          <img src={tour.image} alt={tour.name} />
          <h2>{tour.name}</h2>
          <h4>{tour.price}</h4>
          <p>
            {showMore[tour.id] ? tour.info : `${tour.info.substring(0, 100)}...`}
            <button onClick={() => toggleShowMore(tour.id)}>
              {showMore[tour.id] ? 'Show Less' : 'Read More'}
            </button>
          </p>
          <button onClick={() => removeTour(tour.id)}>Not Interested</button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;