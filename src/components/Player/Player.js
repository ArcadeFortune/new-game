import React, { useState, useEffect, useRef } from 'react';
import { movePlayerTowardsTarget } from './playerMovement';

function Player ({ clickedAt, shareCoordinatesIn }) {  // Create a reference to the player element
  const playerRef = useRef(null);

  // Create a state variable for the player's position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Set up an interval to update the player's position
  useEffect(() => {
    
    // Get the player's width and height
    const playerWidth = playerRef.current.offsetWidth;
    const playerHeight = playerRef.current.offsetHeight;

    // Heart of code: move the player towards the target position
    const interval = setInterval(() => {
      shareCoordinatesIn(playerRef.current.getBoundingClientRect())
      setPosition((prevPosition) => {
        const targetPosition = { x: clickedAt.x - playerWidth / 2, y: clickedAt.y - playerHeight / 2 };
        return movePlayerTowardsTarget(prevPosition, targetPosition, 5);
      });
    }, 10);
    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [clickedAt]);

  return (
    <div className="player" 
    ref={playerRef} style={{
      position: 'absolute',
      top: position.y,
      left: position.x,
      width: 50,
      height: 50,
      backgroundColor: 'red',
    }}>
      <h1>Player</h1>
    </div>
  )
}

export default Player;