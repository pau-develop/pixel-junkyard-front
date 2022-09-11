import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IDrawing } from "../interfaces/interfaces";
import {
  deleteDrawingActionNew,
  getAllDrawingsActionNew,
  getDrawingByIdActionNew,
  openModalActionNew,
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

  const createDrawing = async (userData: Partial<IDrawing>) => {
    const data = await fetch(`${url}drawings/create`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    const response = await data.json();
    if (response.error) {
      const ui = {
        isOpen: true,
        message: response.error,
        type: "confirm",
        redirect: "",
        id: "",
      };
      dispatch(openModalActionNew(ui));
      return;
    }
    const ui = {
      isOpen: true,
      message: "Drawing Uploaded!",
      type: "",
      redirect: "/home",
      id: "",
    };
    dispatch(openModalActionNew(ui));
  };

  const deleteDrawing = async (drawing: IDrawing) => {
    const data = await fetch(`${url}drawings/delete/${drawing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    const response = await data.json();
    if (response.error) {
      const ui = {
        isOpen: true,
        message: "Something went wrong",
        type: "confirm",
        redirect: "",
        id: "",
      };
      dispatch(openModalActionNew(ui));
      return;
    }
    const ui = {
      isOpen: true,
      message: "Drawing Deleted!",
      type: "",
      redirect: "/home",
      id: "",
    };
    dispatch(openModalActionNew(ui));
    dispatch(deleteDrawingActionNew(drawing));
  };

  return { getAllDrawings, getDrawingById, createDrawing, deleteDrawing };
};

export default useDrawings;
