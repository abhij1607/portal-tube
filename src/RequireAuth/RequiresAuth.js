import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export function RequiresAuth({ children }) {
  let location = useLocation();
  const { userState } = useAuth();

  return userState.userToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
