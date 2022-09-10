import { useState } from "react";
import ReactCanvasToolsStyled from "./ReactCanvasToolsStyled";

interface ReactCanvasToolsProps {
  action: (color: string) => void;
}

const ReactCanvasTools = ({ action }: ReactCanvasToolsProps): JSX.Element => {
  const [color, setColor] = useState<string>("#000000");

  const handleColorChange = (event: string) => {
    setColor(event);
    action(event);
  };

  return (
    <ReactCanvasToolsStyled className="toolbar">
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
