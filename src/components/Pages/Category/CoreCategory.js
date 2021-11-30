import React from "react";
import "../../CSS/Category/Category.css";
import CategoryBtn from "./components/CategoryBtn";
import frame from "../../../images/Normal-User/Single-frame.png";
import { Link } from "react-router-dom";
import Navigation from "../../Header/Navigation";

const CoreCategory = () => {
  return (
    <>

<Navigation />

    <div className="main-container">
      <div className="container category-contaienr p-5 bg-dark  bg-img">
        <div className="d-flex justify-content-center align-items-center">
          <div className="center-frame">
            <img src={frame} alt="" className="frame" />
            <h6 className="category-title">CHOOSE CATEGORY</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3  text-center">
            <CategoryBtn title="Sports" />
          </div>
          <div className="col-md-3  text-center">
            <CategoryBtn title="Film" />
          </div>
          <div className="col-md-3  text-center">
            <CategoryBtn title="Music" />
          </div>
          <div className="col-md-3  text-center">
            <CategoryBtn title="Dance" />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-3  text-center">
            <CategoryBtn title="Drama" />
          </div>
          <div className="col-md-3  text-center">
            <CategoryBtn title="Tech" />
          </div>
          <div className="col-md-3 text-center">
            <CategoryBtn title="Comedy" />
          </div>
          <div className="col-md-3  text-center">
            <CategoryBtn title="Social" />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-3 text-center">
            <CategoryBtn title="Sports" />
          </div>
          <div className="col-md-3  text-center">
            <CategoryBtn title="Kids" />
          </div>
          <div className="col-md-3  text-center">
            <CategoryBtn title="Music" />
          </div>
          <div className="col-md-3  text-center">
            <CategoryBtn title="Dance" />
          </div>
        </div>

        <div className="category-footer mt-4 ">
          <h6 className=" text-center mt-2">
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <span className="text-light">Choose at least 5 Categories</span>{" "}
            <i className="far fa-star text-warning mx-1"></i>{" "}
            <i className="far fa-star text-warning mx-1"></i>
          </h6>

          <div className="ct-btn text-center">
            <Link to='/subCategory'><button className="btn mt-3 cg-done">Done</button></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CoreCategory;
