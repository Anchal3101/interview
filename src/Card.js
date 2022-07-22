import React from "react";
const Card = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://commons.wikimedia.org/wiki/File:St_Lawrence_Jewry,_City_of_London,_UK_-_Diliff.jpg#/media/File:St_Lawrence_Jewry,_City_of_London,_UK_-_Diliff.jpg"
            className="d-block w-100"
            alt="img"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://en.wikipedia.org/wiki/Main_Page#/media/File:St_Lawrence_Jewry,_City_of_London,_UK_-_Diliff.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://en.wikipedia.org/wiki/Main_Page#/media/File:St_Lawrence_Jewry,_City_of_London,_UK_-_Diliff.jpg"
            className="d-block w-100"
            alt=""
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Card;
