import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";

const Categories = () => {
  return (
    <div className="bg-white">
      <h5 className="px-3 py-2 mb-0">CATEGORIES</h5>
      <div
        className="d-flex justify-content-between bg-white p-3 border-bottom "
        style={{ cursor: "pointer" }}
      >
        <div>{<AiOutlineFolderOpen />} Python</div>
        <div>[0]</div>
      </div>
      <div
        className="d-flex justify-content-between bg-white p-3 border-bottom"
        style={{ cursor: "pointer" }}
      >
        <div>{<AiOutlineFolderOpen />} Javascript</div>
        <div>[0]</div>
      </div>
      <div
        className="d-flex justify-content-between bg-white p-3 border-bottom"
        style={{ cursor: "pointer" }}
      >
        <div>{<AiOutlineFolderOpen />} Php</div>
        <div>[0]</div>
      </div>
    </div>
  );
};

export default Categories;
