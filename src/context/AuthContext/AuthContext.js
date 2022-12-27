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

  // retrieve data from local storage

  const handleLocalstorgeUserData = () => {
    let userData = localStorage.getItem("userData");

    if (userData) {
      return setAuthUser(JSON.parse(userData));
    } else {
      return setAuthUser([]);
    }
  };
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

  // saving the userdata to the local storage
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(authUser));
  }, [authUser]);

  return (
    <AuthContext.Provider
      value={{ signin, login, logout, authUser, setAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
