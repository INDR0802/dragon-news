import React, { createContext, useState } from "react";
import { auth } from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  let RegisterUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(result))
      .catch((error) => console.log(error));
  };

  let SignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const AuthInfo = {
    RegisterUser,
    SignIn,
    user,
  };
  return (
    <>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
