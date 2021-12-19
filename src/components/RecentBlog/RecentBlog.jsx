import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const RecentBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("./blog.json").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="bg-white">
      {blogs.length ? (
        blogs.map((blog) => (
          <div className="p-3 border-bottom" key={blog._id}>
            <Link
              to={"blog/" + blog._id}
              className="text-dark text-decoration-none"
            >
              <img
                src="https://image.freepik.com/free-photo/blue-morning-natural-mountains-bamboo_1417-32.jpg"
                className="w-100"
                alt=""
              />
              <h4 className="py-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                porro voluptas veniam.
              </h4>
            </Link>
            <div className="d-flex justify-content-between">
              <AiOutlineHeart className="fs-1" />
              <RiShareForwardLine className="fs-1" />
            </div>
          </div>
        ))
      ) : (
          <div className="d-flex align-items-center justify-content-center" style={{height:'25rem'}}>
            <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
      )}
    </div>
  );
};

export default RecentBlog;
