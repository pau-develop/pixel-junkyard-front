import { IUserVisible } from "../interfaces/interfaces";

const mockUsers: IUserVisible[] = [
  {
    id: "12345",
    userName: "user",
    password: "12345",
    email: "fake@fake.com",
    avatar: "???",
    drawings: [
      {
        id: "",
        name: "test1",
        description: "",
        image: "",
        artist: "",
        artistName: "",
        resolution: "",
        creationDate: "",
        likes: [],
        dislikes: [],
      },
      {
        id: "",
        name: "test2",
        description: "",
        image: "",
        artist: "",
        artistName: "",
        resolution: "",
        creationDate: "",
        likes: [],
        dislikes: [],
      },
    ],
  },
  {
    id: "12345",
    userName: "user2",
    password: "12345",
    email: "fake@fake.com",
    avatar: "???",
    drawings: [
      {
        id: "",
        name: "test2",
        description: "",
        image: "",
        artist: "",
        artistName: "",
        resolution: "",
        creationDate: "",
        likes: [],
        dislikes: [],
      },
    ],
  },
];

export default mockUsers;
