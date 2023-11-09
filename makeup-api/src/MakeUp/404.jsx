import React from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404</h1>
      <button onClick={goToHome}>go back home</button>
    </div>
  );
}

export default Notfound;
