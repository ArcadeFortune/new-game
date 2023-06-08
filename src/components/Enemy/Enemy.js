import React, { useEffect, useState, useRef } from 'react';
import './Enemy.css';

let counter = 0;

function Enemy({shareCoordinatesIn, devPos}) {
  const ref = useRef(null);
  const [id, setid] = useState(counter++); 
  const [position, setPosition] = useState({ x: devPos ? devPos : 0, y: 110 });
  
  // console.log(id)
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({x: position.x, y: position.y + 10});
      shareCoordinatesIn(id, ref.current.getBoundingClientRect())
    }, 1000);

    return () => clearInterval(interval);
  }, [position, id]);

  return (
    <div
      className="blue-square"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`
    }}
      ref={ref}
    ><h1 className='enemy'>Enemy</h1>
    </div>
  );
};

export default Enemy;
