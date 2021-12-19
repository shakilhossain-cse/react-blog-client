import React from "react";
import Layouts from "../../components/Layouts/Layouts";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../../components/Categories/Categories";
import RecentBlog from "../../components/RecentBlog/RecentBlog";
import RecentUser from "../../components/RecentUser/RecentUser";
import PopularBlog from "../../components/PopularBlog/PopolarBlog";

const Home = () => {
  return (
    <Layouts>
      <div className="bg-light">
        <Container className="py-5">
          <Row>
            <Col md={3} xs={12}>
              <Categories />
            </Col>
            <Col md={6} xs={12}>
              <RecentBlog/>
            </Col>
            <Col md={3} xs={12}>
              <RecentUser />
              <PopularBlog/>
            </Col>
          </Row>
        </Container>
      </div>
    </Layouts>
  );
};

export default Home;
