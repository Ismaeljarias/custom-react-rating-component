import React from "react";

const StarRating = ({ rating, setRating, hover, setHover }) => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <i
              className="star fas fa-star"
              style={{
                color: `${
                  ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }`,
              }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}></i>
          </label>
        );
      })}
      <p>The rating {rating}.</p>
    </div>
  );
};

export default StarRating;
