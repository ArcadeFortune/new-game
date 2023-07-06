import React from "react";
import "./Victory.css";

const Victory = () => {
  return (
    <>
    <div className="victory-message">
      <span>
      You won! &#x1F3C6;
      </span>
      {/* <br   />   */}
    <button onClick={() => {
      window.location.reload();
    }}>
        Continue
      </button>
    </div>
    
      </>
  );
};

export default Victory;