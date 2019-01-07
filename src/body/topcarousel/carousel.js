import React from "react";

const positionCarousel = {
  margin: "auto",
  width: "100%",
  padding: "10px"
};
class Carousel extends React.Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={positionCarousel}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-10"
              src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/greeting.jpg?alt=media&token=02f4038c-bdd3-41ef-b1a7-b1c2ba0750f2"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-10"
              src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/greeting%202.jpg?alt=media&token=178ab959-613f-4004-9702-6c81bf255721"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-10"
              src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/greeting2.jpg?alt=media&token=c74b3eb0-107c-4c88-80c3-3a32a0a6f669"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
