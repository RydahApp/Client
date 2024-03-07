import AppScreen from "./AppStack";
import AuthStack from "../auth";
import { useAuth } from "@/context/authContext";

const Main = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppScreen /> : <AuthStack />;
};

export default Main;
