import React from 'react';

const Rating = (props) => {
  const { children } = props;
  const filledStars = Math.round(children);
  const maxStars = 5;
  
  const stars = [];
  
  for (let i = 0; i < maxStars; i++) {
    if (i < filledStars) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }
  
  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className="star">
          {star}
        </span>
      ))}
    </div>
  );
};

export default Rating;