import React, { useState, useEffect } from "react";
import "./Game.css";

import Player from "../Player/Player";
import Enemy from "../Enemy/Enemy";
import PauseMenu from "../Menu/PauseMenu";
import EnemySpawner from "../Enemy/EnemySpawner";
import Tutorial from "./Tutorial";
import Victory from "./Victory";

function Game() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [paused, setPaused] = useState(false);
  const [died, setDied] = useState(false)
  const [clicked, setClicked] = useState(false);
  const [entityList, setEntityList] = useState([]);

  const handleClick = (event) => {
    setClicked(true);
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Register an event listener to listen for the 'Escape' key press using the 'useEffect' hook
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape") {
        console.log(<Enemy shareCoordinatesIn={storeEnemies} />)
        EnemySpawner(storeEnemies)
        setPaused(true);
      }
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  // Function to store Enemies in a list for collision detection
  function storeEnemies(id, ref) {
    const index = entityList.findIndex(obj => Object.keys(obj)[0] === id.toString());
    const newEntity = { [id]: ref };
  
    if (index !== -1) {
      const updatedList = [...entityList];
      updatedList[index] = newEntity;
      setEntityList(updatedList);
    } else {
      setEntityList([...entityList, newEntity]);
    }
    console.log(entityList)
  }
  function storeMC(position) {
    for (let li of entityList) {
      for (let e of Object.values(li)) {
        // console.log(e)
        if (
        position.x < e.x + e.width &&
        position.x + position.width > e.x &&
        position.y < e.y + e.height &&
        position.y + position.height > e.y
        ) {
          // The divs are touching
          deleteEnemy(parseInt(Object.keys(li)[0]));
          setDied(true)
        } else {
          // The divs are not touching
          // console.log("-------------", position.x, e.x);
        }
      }
    }
    function deleteEnemy(id) {
      setEntityList(entityList.filter(obj => Object.keys(obj)[0] !== id.toString()));
    }

    if (Object.values(entityList).length !== 0) {
  
      //optimazation?!?! ig
      // console.log(Object.values(entityList))
      // 
    }
  }

  function handleContinue() {
    setPaused(false);
  }

  function handleExit() {
    // Handle exit logic here
  }
  return (
    <div className="game" onClick={handleClick}>
      {!clicked && <Tutorial />}
      {!died && <Enemy shareCoordinatesIn={storeEnemies} devPos={800}/>}
      {died && <Victory /> }
      <Player clickedAt={mousePosition} shareCoordinatesIn={storeMC} />
      {paused && <PauseMenu onContinue={handleContinue} onExit={handleExit} />}
    </div>
  );
}

export default Game;
