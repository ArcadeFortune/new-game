import React, {useState, useEffect} from "react";
import "./Game.css";
import Player from "../Player/Player";
import Enemy from "../Enemy/Enemy";
import PauseMenu from "../Menu/PauseMenu";

function Game() {  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [paused, setPaused] = useState(false);
  const [entityList, setEntityList] = useState({});

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Register an event listener to listen for the 'Escape' key press using the 'useEffect' hook
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        setPaused(true);
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  // Function to store Enemies in a list for collision detection
  function  storeEnemies(position, uuid) {
    console.log('position', position)
  }

  function storeMC(position) {
    console.log('position', position)
  }
  

  function handleContinue() {
    setPaused(false);
  }

  function handleExit() {
    // Handle exit logic here
  }
    return (
      <div className="game" onClick={handleClick}>
        <Enemy shareCoordinatesIn={storeEnemies}/>
        <Player clickedAt={mousePosition} shareCoordinatesIn={storeMC} />
        {paused && <PauseMenu onContinue={handleContinue} onExit={handleExit} />}
      </div>
    );
}

export default Game;