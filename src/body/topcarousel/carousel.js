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
              src="https://firebasestorage.googleapis.com/v0/b/profile-b10e7.appspot.com/o/CMS_Creative_164657191_Kingfisher.jpg?alt=media&token=b9c09765-4549-4623-adba-9e116f22ceea"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-10"
              src="https://firebasestorage.googleapis.com/v0/b/profile-b10e7.appspot.com/o/FD_image.jpg?alt=media&token=43978daf-da19-4e4a-a52e-c5301fe84393"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-10"
              src="https://firebasestorage.googleapis.com/v0/b/profile-b10e7.appspot.com/o/visual-reverse-image-search-v2_1000x560.jpg?alt=media&token=bf3bbfa5-2948-4b19-b387-9b3e5af9fd84"
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
