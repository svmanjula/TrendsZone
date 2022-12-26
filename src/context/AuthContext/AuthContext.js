import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/Firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState("");

  const signin = (email, password, name, confirmPassword) =>
    createUserWithEmailAndPassword(
      auth,
      email,
      password,
      name,
      password === confirmPassword && password
    );

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return listen;
  }, []);

  return (
    <AuthContext.Provider value={{ signin, login, logout, authUser }}>
      {children}
    </AuthContext.Provider>
  );
};
