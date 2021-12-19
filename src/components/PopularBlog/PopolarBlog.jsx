import React from "react";
import { Link } from "react-router-dom";

const PopularBlog = () => {
  return (
    <div className="bg-white p-2 my-4">
      <h5>POPULAR POST</h5>
      <Link to="blog" className="text-dark text-decoration-none">
        <div className="d-flex my-3 border p-2">
          <div className="w-25">
            <img
              src="https://image.freepik.com/free-photo/blue-morning-natural-mountains-bamboo_1417-32.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="w-75  ps-2">
            <h6>Lorem ipsum dolor sit amet.</h6>
            <small>10 Dec 2021</small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PopularBlog;
