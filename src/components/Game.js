import React, {useState} from "react";
import "../styles/Game.css";
import Player from "./Player";

function Game() {  
  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    return (
      <div className="game" onClick={handleClick}>
        <Player clientX={mousePosition.x} clientY={mousePosition.y} />
      </div>
    );
}

export default Game;