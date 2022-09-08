export const getCanvasScaledValue = (value: number, offset: number) => {
  return value / offset;
};

export const fillOnMissingCells = (
  ctxRef: CanvasRenderingContext2D,
  differenceX: number,
  differenceY: number,
  lastX: number,
  lastY: number,
  totalIterations: number,
  cellLength: number
) => {
  for (let i = 1; i <= totalIterations + 1; i++) {
    ctxRef.fillRect(
      lastX + differenceX,
      lastY + differenceY,
      cellLength,
      cellLength
    );

    if (differenceY !== 0 && differenceY > 0) differenceY -= 1;
    if (differenceY !== 0 && differenceY < 0) differenceY += 1;

    if (differenceX !== 0 && differenceX > 0) differenceX -= 1;
    if (differenceX !== 0 && differenceX < 0) differenceX += 1;

    ctxRef.stroke();
  }
  return [differenceX, differenceY];
};

export const checkDifference = (
  lastPos: number,
  newPos: number,
  difference: number
) => {
  if (lastPos > newPos) return (difference *= -1);
  else return difference;
};
