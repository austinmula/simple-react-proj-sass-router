import { useSelector } from "react-redux";

const useAuth = () => {
  const { isLoggedIn } = useSelector((state) => state.authReducer.isLoggedIn);
  return {
    isLoggedIn,
  };
};

export default useAuth;
