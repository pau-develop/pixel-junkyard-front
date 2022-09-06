import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  getAllDrawingsActionNew,
  getDrawingByIdActionNew,
} from "../store/actionCreators/actionCreators";

const useDrawings = () => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL;

  const getAllDrawings = useCallback(async () => {
    const drawingsData = await fetch(`${url}drawings/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    const response = await drawingsData.json();
    const { drawings } = response;

    dispatch(getAllDrawingsActionNew(drawings));
  }, [dispatch, url]);

  const getDrawingById = useCallback(
    async (id: string) => {
      const usersData = await fetch(`${url}drawings/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      const response = await usersData.json();
      const { drawing } = response;

      dispatch(getDrawingByIdActionNew([drawing]));
    },
    [dispatch, url]
  );

  return { getAllDrawings, getDrawingById };
};

export default useDrawings;
