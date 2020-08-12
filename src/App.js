import React from "react";
import "./App.css";

import StarRating from "./StarRating";

function App() {
  return (
    <div className="App">
      <StarRating starCount={2} />
    </div>
  );
}

export default App;
