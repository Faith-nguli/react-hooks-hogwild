import React from 'react';
import { Container } from 'react-bootstrap'; // Ensure you import Container if using react-bootstrap
import HogDetails from './HogDetails'; // Import HogDetails component

const HogCard = ({ hog, onToggleDetails, showDetails, onHide }) => {
  const toggleHogDetails = (e) => {
    e.stopPropagation(); // Prevent triggering parent onClick
    onToggleDetails(hog.name); // Toggle details for this hog
  };

  const handleHide = (e) => {
    e.stopPropagation(); // Prevent triggering parent onClick
    onHide(hog.name); // Hide this hog
  };

  return (
    <Container className="my-4"> {/* Adjust margin-top and margin-bottom */}
      <div className="card mb-3">
        <img src={hog.image} className="card-img-top" alt={hog.name} loading="lazy" />
        <div className="card-body">
          <h5 className="card-title">{hog.name}</h5>
          <p className="card-text">{hog.specialty}</p>
          <div className="button-container d-flex justify-content-between">
            <button 
              onClick={toggleHogDetails} 
              style={{ backgroundColor: 'orange', color: 'white' }} 
              className="btn"
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
            <button 
              onClick={handleHide} 
              style={{ backgroundColor: 'blue', color: 'white' }} 
              className="btn"
            >
              Hide Hog
            </button>
          </div>
          {showDetails && <HogDetails hog={hog} />}
        </div>
      </div>
    </Container>
  );
};

export default HogCard;
