import React from 'react';

const Gallery = ({ tours, setTours }) => {
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id}>
          <img src={tour.image} alt={tour.name} />
          <h2>{tour.name}</h2>
          <h4>{tour.price}</h4>
          <p>{tour.info}</p>
          <button onClick={() => removeTour(tour.id)}>Not Interested</button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;