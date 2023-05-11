import React, { useState, useEffect } from 'react';

function Player ({ clientX, clientY }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const distance = Math.sqrt(
          Math.pow(clientX - prevPosition.x, 2) +
            Math.pow(clientY - prevPosition.y, 2)
        );
        const speed = 5;
        if (distance <= speed) {
          return { x: clientX, y: clientY };
        } else {
          const angle = Math.atan2(clientY - prevPosition.y, clientX - prevPosition.x);
          const x = prevPosition.x + speed * Math.cos(angle);
          const y = prevPosition.y + speed * Math.sin(angle);
          return { x, y };
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [clientX, clientY]);



  return (
    <div className="player" style={{
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