import React from "react";
import reviews from "./reviews";
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Persons() {
  const [index, setIndex] = React.useState(0);

  const { name, image, job, text } = reviews[index];

  const checkLength = (number) => {
    if (number > reviews.length - 1) {
      number = 0;
    }
    if (number < 0) {
      number = reviews.length - 1;
    }
    return number;
  };

  const nextIndex = () => {
    setIndex((index) => {
      let newNumber = index + 1;
      return checkLength(newNumber);
    });
  };
  const prevIndex = () => {
    setIndex((index) => {
      let newNumber = index - 1;
      return checkLength(newNumber);
    });
  };

  const suprprise = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkLength(randomNumber));
  };

  return (
    <div className="person-card">
      <div className="image-container">
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
        <img src={image} alt="" />
      </div>
      <h4 className="author">
        {name
          .split(" ")
          .map((item) => item[0].toUpperCase() + item.slice(1) + " ")}
      </h4>
      <h5 className="job">{job.toLocaleUpperCase()}</h5>
      <p className="text">{text}</p>
      <div className="btn-container">
        <button className="arrow-btn" onClick={nextIndex}>
          <FaChevronLeft />
        </button>
        <button className="arrow-btn" onClick={prevIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className="surprise-btn" onClick={suprprise}>
        Surprise
      </button>
    </div>
  );
}

export default Persons;
