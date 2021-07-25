import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = number => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex(prevIndex => {
      return checkNumber(prevIndex + 1);
    });
  };
  const prevPerson = () => {
    setIndex(prevIndex => {
      return checkNumber(prevIndex - 1);
    });
  };

  const randomData = () => {
    setIndex(Math.floor(Math.random() * (people.length - 1 - 0) + 0));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          {" "}
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomData} className="random-btn">
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
