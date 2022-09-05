import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getAllDrawingsActionNew } from "../store/actionCreators/actionCreators";

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

  return { getAllDrawings };
};

export default useDrawings;
