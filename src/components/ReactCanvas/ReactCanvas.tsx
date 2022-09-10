import { useEffect, useRef, useState } from "react";
import {
  checkDifference,
  fillOnMissingCells,
  getCanvasScaledValue,
} from "../../utils/ReactCanvasFunctions";
import Button from "../Button/Button";
import ReactCanvasTools from "../ReactCanvasTools/ReactCanvasTools";
import SaveMenu from "../SaveMenu/SaveMenu";

import ReactCanvasStyled from "./ReactCanvasStyled";

const saveInitialState = false;

const ReactCanvas = (): JSX.Element => {
  const [save, setSave] = useState<boolean>(saveInitialState);
  const [data, setData] = useState<string>("");
  const [color, setColor] = useState<string>("#000");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const cellCountX = 60;
  const cellCountY = 90;
  let cellLength: number;
  let lastX: number;
  let lastY: number;

  //get ref and set styles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;
    ctx.imageSmoothingEnabled = false;
    ctx.lineCap = "square";
    ctx.lineJoin = "miter";
    ctx.strokeStyle = "black";
    ctxRef.current = ctx;
    ctxRef.current!.fillStyle = "white";
    ctxRef.current!.fillRect(0, 0, cellCountX, cellCountY);
    ctxRef.current!.stroke();
  }, []);

  const changeColor = (color: string) => {
    setColor(color);
  };

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
    ctxRef.current!.fillStyle = color;
    ctxRef.current!.fillRect(newX, newY, cellLength, cellLength);
    ctxRef.current!.stroke();

    let differenceX = Math.abs(lastX - newX);
    let differenceY = Math.abs(lastY - newY);
    let totalIterations = Math.max(differenceX, differenceY);

    differenceX = checkDifference(lastX, newX, differenceX);
    differenceY = checkDifference(lastY, newY, differenceY);

    fillOnMissingCells(
      ctxRef.current!,
      differenceX,
      differenceY,
      lastX,
      lastY,
      totalIterations,
      cellLength
    );

    lastX = newX;
    lastY = newY;
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

  function scaleImage(imageData: ImageData, scale: 10) {
    var scaled = ctxRef.current!.createImageData(
      imageData.width * scale,
      imageData.height * scale
    );
    var subLine = ctxRef.current!.createImageData(scale, 1).data;
    for (var row = 0; row < imageData.height; row++) {
      for (var col = 0; col < imageData.width; col++) {
        var sourcePixel = imageData.data.subarray(
          (row * imageData.width + col) * 4,
          (row * imageData.width + col) * 4 + 4
        );
        for (var x = 0; x < scale; x++) subLine.set(sourcePixel, x * 4);
        for (var y = 0; y < scale; y++) {
          var destRow = row * scale + y;
          var destCol = col * scale;
          scaled.data.set(subLine, (destRow * scaled.width + destCol) * 4);
        }
      }
    }
    canvasRef.current!.width = scaled.width;
    canvasRef.current!.height = scaled.height;
    ctxRef.current!.putImageData(scaled, 0, 0);
  }

  const handleClick = () => {
    scaleImage(ctxRef.current!.getImageData(0, 0, cellCountX, cellCountY), 10);
    setData(canvasRef.current!.toDataURL());
    setSave(!save);
  };

  return (
    <ReactCanvasStyled className="react-canvas">
      <Button text={save ? "CANCEL" : "SAVE"} action={handleClick} />
      <div className="react-canvas__container">
        {save && <SaveMenu action={handleClick} canvasData={data} />}
        {window.innerWidth >= 600 ? (
          <canvas
            data-testid="canvas-desktop"
            className="react-canvas__canvas"
            onMouseDown={startDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
            onMouseOut={endDrawing}
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
      <ReactCanvasTools action={changeColor} />
    </ReactCanvasStyled>
  );
};

export default ReactCanvas;
