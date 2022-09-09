import { IUserVisible } from "../interfaces/interfaces";

const mockUsers: IUserVisible[] = [
  {
    _id: "12345",
    userName: "user",
    password: "12345",
    email: "fake@fake.com",
    drawings: [
      {
        _id: "",
        name: "test1",
        description: "",
        image: "",
        artist: "",
        resolution: "",
        creationDate: "",
      },
    ],
  },
  {
    _id: "12345",
    userName: "user2",
    password: "12345",
    email: "fake@fake.com",
    drawings: [
      {
        _id: "",
        name: "test2",
        description: "",
        image: "",
        artist: "",
        resolution: "",
        creationDate: "",
      },
    ],
  },
];

export default mockUsers;
