import React from "react";
import Review from "./Review";
//https://react-icons.github.io/react-icons/
// import { FaBeer, FaGithubSquare } from 'react-icons/fa';

const App = () => {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </main>
  );
};

export default App;
