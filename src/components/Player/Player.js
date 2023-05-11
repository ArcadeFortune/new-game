import React, { useState, useEffect, useRef } from 'react';

function Player ({ clientX, clientY }) {  // Create a reference to the player element
  const playerRef = useRef(null);

  // Create a state variable for the player's position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Set up an interval to update the player's position
  useEffect(() => {
    // Get the player's width and height
    const playerWidth = playerRef.current.offsetWidth;
    const playerHeight = playerRef.current.offsetHeight;

    // Set up the interval
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        // Calculate the target position and distance to it
        const { x: prevX, y: prevY } = prevPosition;
        const { x: targetX, y: targetY } = { x: clientX - playerWidth / 2, y: clientY - playerHeight / 2 };
        const distance = Math.hypot(targetX - prevX, targetY - prevY);

        // Move the player towards the target position
        const speed = 50;
        if (distance <= speed) {
          // If the player is close enough to the target, snap to it
          return { x: targetX, y: targetY };
        } else {
          // Otherwise, move the player towards the target
          const angle = Math.atan2(targetY - prevY, targetX - prevX);
          const x = prevX + speed * Math.cos(angle);
          const y = prevY + speed * Math.sin(angle);
          return { x, y };
        }
      });
    }, 10);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [clientX, clientY]);

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