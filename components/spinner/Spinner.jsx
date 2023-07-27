import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "0 auto",
  position: "fixed",
  top: "60%",
  left: "45%",
  zIndex: "99"
};

const Spinner = () => {
  return (
    <FadeLoader
        color={"#ffc107"}
        loading={true}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Spinner