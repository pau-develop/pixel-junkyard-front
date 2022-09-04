import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

const Profile = (): JSX.Element => {
  const { getUserById } = useUsers();
  const { id } = useParams();

  useEffect(() => {
    getUserById(id as string);
  }, [getUserById, id]);

  return <article></article>;
};

export default Profile;
