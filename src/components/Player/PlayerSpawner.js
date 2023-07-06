import React, { useState } from 'react'
import Player from './Player'

function PlayerSpawner({list}) {
  const [playerCount, setPlayerCount] = useState(0)
  if (playerCount < 1) {
    list('a')
    console.log(<Player />)
    setPlayerCount(playerCount+1)
  }
  // return (
  //   <Player shareCoordinatesIn={shareCoordinatesIn} />
  // )
}

export default PlayerSpawner;