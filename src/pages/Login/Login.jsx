import React from "react";
import { Button } from "react-bootstrap";
import Layouts from "../../components/Layouts/Layouts";

const Login = () => {
  return (
    <Layouts>
      <div
        className="d-flex w-100 justify-content-center align-items-center bg-light"
        style={{ height: "89vh" }}
      >
        <div className="w-50 d-flex flex-column align-items-center justify-content-center h-50 bg-white">
          <Button variant="danger" className="mb-3">Login with Google</Button>
          <Button>Login with Facebook</Button>
        </div>
      </div>
    </Layouts>
  );
};

export default Login;
