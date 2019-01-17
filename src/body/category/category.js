import React from "react";
import "./category.css";
import "../body.css";

class Category extends React.Component {
  render() {
    return (
      <div className="border berder-dark shadow-sm container bg-gray pb-2 mt-2 ">
        <div className="container ">
          <div class="d-flex">
            <h2 class=" p-2">Category</h2>
            <a href="/" class="ml-auto p-2 textLink mt-2">
              See More...
            </a>
          </div>
          <div class="row d-flex justify-content-center ">
            <div class="col-xs-1 h-100 mr-1 border border-warning cardHover ">
              <div class="card-body card1 ">
                <img
                  class="iconLogo ml-2 mb-2 d-flex justify-content-center"
                  src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/kategory-paint.png?alt=media&token=fbc34e6d-e637-4983-9e9a-7620747ff26c"
                  alt=" "
                />
                <p class="mb-0 d-flex justify-content-center">Paint</p>
              </div>
            </div>
            <div class="col-xs-1 h-100 mr-1  border border-warning cardHover  ">
              <div class="card-body card1">
                <img
                  class="iconLogo ml-2 mb-2 mb-2 d-flex justify-content-center"
                  src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/tools.png?alt=media&token=398c447f-5ea2-4106-ac81-13afa30374dd"
                  alt=" "
                />
                <p class="mb-0 mb-2 d-flex justify-content-center">Tools</p>
              </div>
            </div>
            <div class="col-xs-1 h-100 mr-1 border border-warning cardHover  ">
              <div class="card-body card1">
                <img
                  class="iconLogo ml-2 mb-2 d-flex justify-content-center"
                  src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/plumbing-category.png?alt=media&token=6d192a10-851e-46df-b692-abc4b7ecf77a"
                  alt=" "
                />
                <p class="mb-0 d-flex justify-content-center">Plumbing</p>
              </div>
            </div>
            <div class="col-xs-1 h-100 mr-1 border border-warning cardHover  ">
              <div class="card-body card1  ">
                <img
                  class="iconLogo ml-2 pr-0 mb-2  justify-content-center"
                  src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/cement.png?alt=media&token=78562397-9a17-4230-84d5-17ba456dd18c"
                  alt=" "
                />
                <p class="mb-0 mb-2 d-flex justify-content-center">Cement</p>
              </div>
            </div>
            <div class="col-xs-1 h-100 mr-1 border border-warning cardHover  ">
              <div class="card-body card1  ">
                <img
                  class="iconLogo ml-2 pr-0 mb-2  justify-content-center"
                  src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/electric-logo.png?alt=media&token=46d5f0bf-d0d4-48fa-8d22-9e357656a3d3"
                  alt=" "
                />
                <p class="mb-0 mb-2 d-flex justify-content-center">Electric</p>
              </div>
            </div>
            <div class="col-xs-1 h-100 mr-1 border border-warning cardHover  ">
              <div class="card-body card1  ">
                <img
                  class="iconLogo ml-2 pr-0 mb-2  justify-content-center"
                  src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/shower-logo.png?alt=media&token=81b4cce2-9e6b-4233-9cf2-6075988110ec"
                  alt=" "
                />
                <p class="mb-0 mb-2 d-flex justify-content-center">Shower</p>
              </div>
            </div>
            <div class="col-xs-1 h-100 mr-1 border border-warning cardHover  ">
              <div class="card-body card1  ">
                <img
                  class="iconLogo ml-2 pr-0 mb-2  justify-content-center"
                  src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/wall-logo.png?alt=media&token=d3e942e3-c005-4faa-833e-aa2830bb3472"
                  alt=" "
                />
                <p class="mb-0 mb-2 d-flex justify-content-center">Wall</p>
              </div>
            </div>
            <div class="col-xs-1 h-100 mr-1 border border-warning cardHover  ">
              <div class="card-body card1  ">
                <img
                  class="iconLogo ml-2 pr-0 mb-2  justify-content-center"
                  src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/floor.png?alt=media&token=42b16dba-29bd-43b9-b4ae-5cbec9897507"
                  alt=" "
                />
                <p class="mb-0 mb-2 d-flex justify-content-center">Floor</p>
              </div>
            </div>
            <div class="col-xs-1 h-100 mr-1 border border-warning cardHover  ">
              <div class="card-body card1  ">
                <img
                  class="iconLogo ml-2 pr-0 mb-2  justify-content-center"
                  src="https://firebasestorage.googleapis.com/v0/b/bangunin-98794.appspot.com/o/dark-door.png?alt=media&token=e0ddb963-54b1-4258-8cfa-bf1da1d6ece2"
                  alt=" "
                />
                <p class="mb-0 mb-2 d-flex justify-content-center">Door</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
