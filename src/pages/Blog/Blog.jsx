import React from "react";
import { Container } from "react-bootstrap";
import Layouts from "../../components/Layouts/Layouts";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Layouts>
      <Container>
        <div className="position-relative">
          <img
            src="https://image.freepik.com/free-photo/blue-morning-natural-mountains-bamboo_1417-32.jpg"
            className="w-100 h-100"
            alt=""
          />
          <div className="position-absolute top-50 start-50 translate-middle bg-light bg-light p-5 bg-opacity-50 ">
            <div
              className="d-flex align-items-center justify-content-between text-uppercase flex-column flex-md-row
"
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
                alt=""
                className="w-25 rounded-circle"
              />
              <div className="text-center">
                <h5>Shakil Ahmed</h5>

                <p>18 Dec 2021</p>
              </div>

              <div>
                <AiFillHeart
                  className="fs-1 "
                  style={{ color: "red", cursor: "pointer" }}
                />
                <p className="fs-4 d-inline-block">1</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
          voluptate!
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          praesentium tempore a quas culpa modi, distinctio animi quaerat, magni
          corporis sed ea officia assumenda voluptas? Enim eaque,
          exercitationem, et laboriosam neque dicta cupiditate ea dolorem
          provident dolore voluptate rerum? Fuga molestias ratione dolor
          laudantium ducimus deleniti quam ullam eius rerum, aliquam eaque?
          Molestias, voluptatem optio? Reprehenderit sit sunt similique
          distinctio eos ullam quibusdam amet itaque culpa libero, officiis
          optio totam perspiciatis, saepe id excepturi quasi iusto nemo rerum
          ipsam tenetur. Facilis nesciunt natus impedit corrupti nam deleniti
          eveniet esse dicta ad voluptatum architecto quasi minima sequi
          aperiam, illo maxime quam.
        </p>
      </Container>
    </Layouts>
  );
};

export default Blog;
