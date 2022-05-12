import { createContext, useContext, useReducer } from "react";
import { authReducer, initialUserState } from "../utils/auth-reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(authReducer, initialUserState);
  return (
    <AuthContext.Provider value={{ userState, userDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
