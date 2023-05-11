export function movePlayerTowardsTarget(prevPosition, targetPosition, speed) {
  const { x: prevX, y: prevY } = prevPosition;
  const { x: targetX, y: targetY } = targetPosition;
  
  // Calculate the distance and angle between the current position and target position
  const distance = Math.hypot(targetX - prevX, targetY - prevY);
  const angle = Math.atan2(targetY - prevY, targetX - prevX);
  
  // If the distance to the target is less than the speed, snap to the target
  if (distance <= speed) {
    return { x: targetX, y: targetY };
  } else {

    // Otherwise, move towards the target with the given speed
    const x = prevX + speed * Math.cos(angle);
    const y = prevY + speed * Math.sin(angle);
    return { x, y };
  }
}