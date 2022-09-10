import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";
import { IDrawing, IUserVisible } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import SaveMenuStyled from "./SaveMenuStyled";

const formInput: Partial<IDrawing> = {
  name: "",
  description: "",
  image: "",
  artist: "",
  resolution: "",
  creationDate: "",
};

interface SaveMenuProps {
  action: () => void;
  canvasData: string;
}

const SaveMenu = ({ action, canvasData }: SaveMenuProps): JSX.Element => {
  const { createDrawing } = useDrawings();
  const user = useSelector<RootState>((state) => state.user) as IUserVisible;
  const [input, setInput] = useState<Partial<IDrawing>>(formInput);

  const handleInputObject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newDrawing: Partial<IDrawing> = {
      name: input.name as string,
      description: input.description as string,
      artist: user._id,
      image: canvasData,
      resolution: "60x90",
    };
    createDrawing(newDrawing);
  };

  return (
    <SaveMenuStyled className="save-menu">
      <div className="save-menu__box">
        <h2>SAVE CANVAS</h2>
        <div className="save-menu__image">
          <img src={canvasData} alt="drawing preview" />
        </div>
        <form
          className="save-menu__form"
          onSubmit={(event) => handleInputObject(event)}
        >
          <label htmlFor="painting-name">Painting name</label>
          <input
            required
            id="painting-name"
            autoComplete="off"
            type="text"
            value={input.name}
            onChange={(event) =>
              setInput({ ...formInput, name: event.target.value })
            }
          ></input>
          <label htmlFor="painting-description">Painting description</label>
          <textarea
            id="painting-description"
            autoComplete="off"
            maxLength={150}
            value={input.description}
            onChange={(event) =>
              setInput({ ...input, description: event.target.value })
            }
          ></textarea>
          <div className="save-menu__button-wrap">
            <Button text="Cancel" type="button" action={action} />
            <Button text="Accept" />
          </div>
        </form>
      </div>
    </SaveMenuStyled>
  );
};

export default SaveMenu;
