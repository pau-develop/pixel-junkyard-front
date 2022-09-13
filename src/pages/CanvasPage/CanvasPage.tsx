import { useState } from "react";
import Button from "../../components/Button/Button";
import ReactCanvas from "../../components/ReactCanvas/ReactCanvas";
import CanvasPageStyled from "./CanvasPageStyled";

const CanvasPage = (): JSX.Element => {
  const [resolution, setResolution] = useState<number[]>();

  const handleClick = (resolution: number[]) => {
    setResolution(resolution);
  };

  return (
    <CanvasPageStyled className="page">
      <div className="page__title-container">
        <h1 className="page__title-heading">Canvas</h1>
      </div>
      {resolution !== undefined ? (
        <ReactCanvas resolutionX={resolution[0]} resolutionY={resolution[1]} />
      ) : (
        <>
          <h3 className="page__inquiry">Choose a resolution</h3>
          <div className="page__buttons">
            <Button text="60x90" action={() => handleClick([60, 90])} />
            <Button text="30x45" action={() => handleClick([30, 45])} />
          </div>
        </>
      )}
    </CanvasPageStyled>
  );
};

export default CanvasPage;
