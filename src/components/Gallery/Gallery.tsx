import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";
import { IDrawing } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import DrawingCard from "../DrawingCard/DrawingCard";
import Filter from "../Filter/Filter";
import GalleryStyled from "./GalleryStyled";
import { AnimatePresence, motion } from "framer-motion";

const Gallery = (): JSX.Element => {
  const [animationDirection, setAnimationDirection] = useState({
    enter: "-10000px",
    exit: "+1000px",
  });
  const [filterMenu, setFilterMenu] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const drawings = useSelector<RootState>(
    (state) => state.drawings
  ) as IDrawing[];
  const { getAllDrawings } = useDrawings();
  useEffect(() => {
    (async () => {
      const totalDocs = await getAllDrawings(offset, 4, filter);
      setTotal(totalDocs);
    })();
  }, [getAllDrawings, offset, filter]);

  const handleIncrement = () => {
    const tempOffset = offset + 4;
    if (tempOffset < total) {
      setAnimationDirection({
        enter: "+2000px",
        exit: "-2000px",
      });
      setOffset(tempOffset);
    }
  };
  const handleDecrement = () => {
    if (offset !== 0) {
      setAnimationDirection({
        enter: "-2000px",
        exit: "+2000px",
      });
      const tempOffset = offset - 4;
      setOffset(tempOffset);
    }
  };

  const getItemNumber = () => {
    return offset + 4 > total ? total : offset + 4;
  };

  const handleFilterMenu = () => {
    setFilterMenu(!filterMenu);
  };

  const handleFilter = (filter: string) => {
    setOffset(0);
    setFilter(filter);
  };

  return (
    <GalleryStyled className="gallery">
      {drawings[0] !== undefined && typeof drawings[0].artist === "string" ? (
        <>
          <div className="gallery__filter">
            <div className="gallery__filter-title">
              <h3>Filter by:</h3>
            </div>
            <div className="gallery__filter-categories">
              <Button text="resolution" action={handleFilterMenu} />
              {filterMenu && (
                <Filter action={handleFilter} closeAction={handleFilterMenu} />
              )}
            </div>
          </div>
          <div className="gallery__list">
            <ul>
              {drawings.map((drawing) => (
                <AnimatePresence exitBeforeEnter>
                  <motion.li
                    key={drawing.id}
                    initial={{ x: animationDirection.enter }}
                    animate={{ x: 0 }}
                    transition={{ bounce: 0, duration: 0.2 }}
                    exit={{ x: animationDirection.exit }}
                  >
                    <DrawingCard draw={drawing} />
                  </motion.li>
                </AnimatePresence>
              ))}
            </ul>
          </div>
          <div className="gallery__footer">
            <Button text="<<" action={handleDecrement} />

            <span>{`${Math.ceil(getItemNumber() / 4)}/${Math.ceil(
              total / 4
            )}`}</span>
            <Button text=">>" action={handleIncrement} />
          </div>
        </>
      ) : (
        <span>No items found</span>
      )}
    </GalleryStyled>
  );
};

export default Gallery;
