import { useContext } from "react";
import { TaskContext } from "../context/AuthContext";

const useAuth = () => {
  const auth = useContext(TaskContext);
  return auth;
};

export default useAuth;
