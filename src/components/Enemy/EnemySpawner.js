import Enemy from './Enemy'

function EnemySpawner({shareCoordinatesIn}) {
  console.log('a', <Enemy />)
  return (
    <Enemy shareCoordinatesIn={shareCoordinatesIn} />
  )
}

export default EnemySpawner;