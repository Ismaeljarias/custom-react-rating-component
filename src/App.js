import React, { useState } from "react";
import "./App.css";

import StarRating from "./StarRating";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="App">
      <StarRating
        rating={rating}
        setRating={setRating}
        hover={hover}
        setHover={setHover}
      />
    </div>
  );
}

export default App;
