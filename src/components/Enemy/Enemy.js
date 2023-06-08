import React, { useEffect, useState, useRef } from 'react';
import './Enemy.css';

function Enemy({shareCoordinatesIn}) {
  const ref = useRef(null);
  const [uuid, setUuid] = useState(window.crypto.randomUUID());
  const [position, setPosition] = useState({ x: 0, y: 110 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({x: position.x, y: position.y + 10});
      console.log(position.y)
      shareCoordinatesIn(position)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="blue-square"
      style={{ top: `${position.y}px` }}
      ref={ref}
    ><h1 className='enemy'>Enemy</h1>
    </div>
  );
};

export default Enemy;
