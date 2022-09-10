import { useState } from "react";
import Button from "../Button/Button";
import ReactCanvasToolsStyled from "./ReactCanvasToolsStyled";

interface ReactCanvasToolsProps {
  actionColor: (color: string) => void;
  actionScale: (scale: number) => void;
}

const ReactCanvasTools = ({
  actionColor,
  actionScale,
}: ReactCanvasToolsProps): JSX.Element => {
  const [color, setColor] = useState<string>("#000000");
  const [scale, setScale] = useState<number>(1);

  const handleColorChange = (event: string) => {
    setColor(event);
    actionColor(event);
  };

  const handleIncrement = () => {
    if (scale <= 8) {
      let tempScale = scale;
      tempScale *= 2;
      setScale(tempScale);
      actionScale(tempScale);
    }
  };

  const handleDecrement = () => {
    if (scale >= 2) {
      let tempScale = scale;
      tempScale /= 2;
      setScale(tempScale);
      actionScale(tempScale);
    }
  };

  return (
    <ReactCanvasToolsStyled className="toolbar">
      <div className="toolbar__scale-value">
        <Button text="-" action={handleDecrement} />
      </div>
      <div className="toolbar__scale-value">
        <span>{`x${scale}`}</span>
      </div>
      <div className="toolbar__scale-value">
        <Button text="+" action={handleIncrement} />
      </div>

      <div className="toolbar__color">
        <input
          data-testid="color-input"
          type="color"
          value={color}
          onChange={(event) => handleColorChange(event.target.value)}
        ></input>
      </div>
    </ReactCanvasToolsStyled>
  );
};

export default ReactCanvasTools;
