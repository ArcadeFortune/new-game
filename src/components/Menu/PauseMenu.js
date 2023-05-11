import React from 'react';

function PauseMenu({ onContinue, onExit }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: 16,
          borderRadius: 4,
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h2>Pause Menu</h2>
        <button onClick={onContinue}>Continue</button>
        <button onClick={onExit}>Exit</button>
      </div>
    </div>
  );
}

export default PauseMenu;