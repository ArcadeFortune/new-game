import React, {useState, useEffect, useRef} from "react";
import "./Game.css";
import Player from "../Player/Player";
import PauseMenu from "../Menu/PauseMenu";
import Enemy from "../Enemy/Enemy";

function Game() {  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [paused, setPaused] = useState(false);
  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };
  const [isCollided, setIsCollided] = useState(false);
  const enemyRef = useRef(null);
  const playerRef = useRef(null);

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

  ///////////////////////////// collision detection /////////////////////////////
  useEffect(() => {
    const checkCollision = () => {
      const enemyRect = enemyRef.current.getBoundingClientRect();
      const playerRect = playerRef.current.getBoundingClientRect();

      if (
        enemyRect.right >= playerRect.left &&
        enemyRect.left <= playerRect.right &&
        enemyRect.bottom >= playerRect.top &&
        enemyRect.top <= playerRect.bottom
      ) {
        setIsCollided(true);
      } else {
        setIsCollided(false);
      }
    };

    const interval = setInterval(checkCollision, 100);

    return () => clearInterval(interval);
  }, []);



  function handleContinue() {
    setPaused(false);
  }

  function handleExit() {
    // Handle exit logic here
  }


    return (
      <div className="game" onClick={handleClick}>
        <Enemy ref={enemyRef}/>
        <Player clientX={mousePosition.x} clientY={mousePosition.y} ref={playerRef}/>
        {paused && <PauseMenu onContinue={handleContinue} onExit={handleExit} />}
        {isCollided && <p>Collision occurred!</p>}
      </div>
    );
}

export default Game;