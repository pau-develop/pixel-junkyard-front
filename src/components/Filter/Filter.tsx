import { closeModalActionNew } from "../../store/actionCreators/actionCreators";
import actionTypes from "../../store/actionTypes/actionTypes";
import Button from "../Button/Button";
import FilterStyled from "./FilterStyled";

interface FilterProps {
  action: (filter: string) => void;
  closeAction: () => void;
}

const Filter = ({ action, closeAction }: FilterProps): JSX.Element => {
  const handleClick = (filter: string) => {
    action(filter);
    closeAction();
  };
  return (
    <FilterStyled className="filter">
      <ul className="filter__list">
        <li>
          <button onClick={() => handleClick("resolution=60x90")}>60x90</button>
        </li>
        <li>
          <button onClick={() => handleClick("resolution=90x120")}>
            90x120
          </button>
        </li>
      </ul>
    </FilterStyled>
  );
};

export default Filter;
