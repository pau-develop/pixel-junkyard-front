import { useEffect, useRef, useState } from "react";
import { getCanvasScaledValue } from "../../utils/ReactCanvasFunctions";

import ReactCanvasStyled from "./ReactCanvasStyled";

const ReactCanvas = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const cellCountX = 60;
  const cellCountY = 90;
  let cellLength: number;

  //get ref and set styles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;
    ctx.lineCap = "square";
    ctx.lineJoin = "miter";
    ctx.strokeStyle = "black";
    ctxRef.current = ctx;
  }, []);

  const fillPixel = (eventX: number, eventY: number) => {
    const cssScaleX = getCanvasScaledValue(
      canvasRef.current!.width,
      canvasRef.current!.offsetWidth
    );
    const cssScaleY = getCanvasScaledValue(
      canvasRef.current!.height,
      canvasRef.current!.offsetHeight
    );
    const canvasRect = canvasRef.current!.getBoundingClientRect();
    let newX = Math.floor((eventX - canvasRect.left) * cssScaleX);
    let newY = Math.floor((eventY - canvasRect.top) * cssScaleY);
    cellLength = canvasRef.current!.width / cellCountX;
    ctxRef.current!.fillStyle = "black";
    ctxRef.current!.fillRect(newX, newY, cellLength, cellLength);
    ctxRef.current!.stroke();
  };

  // Function for starting the drawing
  const startDrawing = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    fillPixel(event.clientX, event.clientY);
    setIsDrawing(true);
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing) {
      return;
    }
    fillPixel(event.clientX, event.clientY);
  };

  const startDrawingPhone = (event: React.TouchEvent<HTMLCanvasElement>) => {
    fillPixel(event.targetTouches[0].pageX, event.targetTouches[0].pageY);
    setIsDrawing(true);
  };

  const drawPhone = (event: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) {
      return;
    }

    fillPixel(event.targetTouches[0].pageX, event.targetTouches[0].pageY);
  };

  const endDrawing = () => {
    ctxRef.current!.closePath();
    setIsDrawing(false);
  };

  return (
    <ReactCanvasStyled className="react-canvas">
      <div className="react-canvas__container">
        {window.innerWidth >= 600 ? (
          <canvas
            data-testid="canvas-desktop"
            className="react-canvas__canvas"
            onMouseDown={startDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
            ref={canvasRef}
            width={`${cellCountX}px`}
            height={`${cellCountY}px`}
          />
        ) : (
          <canvas
            data-testid="canvas-mobile"
            className="react-canvas__canvas"
            onTouchStart={startDrawingPhone}
            onTouchMove={drawPhone}
            onTouchEnd={endDrawing}
            ref={canvasRef}
            width={`${cellCountX}px`}
            height={`${cellCountY}px`}
          />
        )}
      </div>
    </ReactCanvasStyled>
  );
};

export default ReactCanvas;
