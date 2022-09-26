import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IDrawing } from "../interfaces/interfaces";
import {
  closeModalActionNew,
  deleteDrawingActionNew,
  getAllDrawingsActionNew,
  getDrawingByIdActionNew,
  openModalActionNew,
} from "../store/actionCreators/actionCreators";

const useDrawings = () => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL;
  const getAllDrawings = useCallback(
    async (offset: number, limit: number, filter: string) => {
      let ui = {
        isOpen: true,
        message: "Please wait...",
        type: "delay",
        redirect: "",
        id: "",
      };
      dispatch(openModalActionNew(ui));
      const drawingsData = await fetch(
        `${url}drawings/all?offset=${offset}&limit=${limit}&${filter}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      const response = await drawingsData.json();
      const { drawings } = response;
      ui = {
        isOpen: false,
        message: "Please wait...",
        type: "",
        redirect: "",
        id: "",
      };
      dispatch(closeModalActionNew(ui));
      dispatch(getAllDrawingsActionNew(drawings));
      const { totalDocs } = response;
      return totalDocs;
    },
    [dispatch, url]
  );

  const getDrawingById = useCallback(
    async (id: string) => {
      let ui = {
        isOpen: true,
        message: "Please wait...",
        type: "delay",
        redirect: "",
        id: "",
      };
      dispatch(openModalActionNew(ui));
      const usersData = await fetch(`${url}drawings/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      const response = await usersData.json();

      const { drawing } = response;
      ui = {
        isOpen: false,
        message: "Please wait...",
        type: "",
        redirect: "",
        id: "",
      };
      dispatch(closeModalActionNew(ui));
      dispatch(getDrawingByIdActionNew([drawing]));
      return drawing.artist;
    },
    [dispatch, url]
  );

  const createDrawing = async (userData: Partial<IDrawing>) => {
    let ui = {
      isOpen: true,
      message: "Please wait...",
      type: "delay",
      redirect: "",
      id: "",
    };
    dispatch(openModalActionNew(ui));

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
      ui = {
        isOpen: true,
        message: response.error,
        type: "confirm",
        redirect: "",
        id: "",
      };
      dispatch(openModalActionNew(ui));
      return;
    }
    ui = {
      isOpen: true,
      message: "Drawing Uploaded!",
      type: "autofade",
      redirect: "/gallery",
      id: "",
    };
    dispatch(openModalActionNew(ui));
  };

  const deleteDrawing = async (drawing: IDrawing) => {
    let ui = {
      isOpen: true,
      message: "Please wait...",
      type: "delay",
      redirect: "",
      id: "",
    };
    dispatch(openModalActionNew(ui));
    const data = await fetch(`${url}drawings/delete/${drawing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    const response = await data.json();
    if (response.error) {
      ui = {
        isOpen: true,
        message: "Something went wrong",
        type: "confirm",
        redirect: "",
        id: "",
      };
      dispatch(openModalActionNew(ui));
      return;
    }
    ui = {
      isOpen: true,
      message: "Drawing Deleted!",
      type: "autofade",
      redirect: "",
      id: "",
    };
    dispatch(openModalActionNew(ui));
    dispatch(deleteDrawingActionNew([drawing]));
  };

  return { getAllDrawings, getDrawingById, createDrawing, deleteDrawing };
};

export default useDrawings;
