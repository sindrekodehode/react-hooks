import { useState } from "react";
import { CaruselArray } from "./CaruselArray";

export default function Carusel() {
  const [currentImgIndex, setImgIndex] = useState(0);

  const handlePreviousClick = () => {
    if (currentImgIndex > 0) {
      setImgIndex(currentImgIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImgIndex < CaruselArray.length) {
      setImgIndex(currentImgIndex + 1);
    }
  };

  const handleHomeClick = () => {
    setImgIndex(0);
  };

  return (
    <>
      <img src={CaruselArray[currentImgIndex]} alt="" />
      <div className="buttons-container">
        <button id="previous-btn" onClick={handlePreviousClick}>
          Previous
        </button>
        <button id="home-btn" onClick={handleHomeClick}>
          Home
        </button>
        <button id="next-btn" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
}
