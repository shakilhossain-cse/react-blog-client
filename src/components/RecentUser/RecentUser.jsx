import React from "react";

const RecentUser = () => {
  return (
    <div className="bg-white p-2">
      <h5>RECENT JOIN USER</h5>
      <div className="d-flex align-items-center text-uppercase">
        <img
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
          alt=""
          className="w-25 h-25 rounded-circle"
        />
        <p>Shakil Ahmed</p>
      </div>
    </div>
  );
};

export default RecentUser;
