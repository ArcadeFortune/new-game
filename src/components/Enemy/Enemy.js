import React, { useEffect, useState } from 'react';
import './Enemy.css';

const Enemy = React.forwardRef((props, ref) => {
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopPosition((prevPosition) => prevPosition + 10);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="blue-square"
      style={{ top: `${topPosition}px` }}
      ref={ref}
    ><h1 className='enemy'>Enemy</h1>
    </div>
  );
});

export default Enemy;
