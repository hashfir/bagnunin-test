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
              src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/greeting.jpg?alt=media&token=490ffd95-374b-4cf2-b948-00e5b99a3740"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-10"
              src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/greeting%202.jpg?alt=media&token=f81baadf-7ca7-4cb0-a138-bb05b6fad43e"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-10"
              src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/greeting2.jpg?alt=media&token=3b197ece-546b-4f3c-9883-05684fc77237"
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
