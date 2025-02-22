import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";

export const TaskContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login User with email
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // create User with Google
  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // reset Password
  const resetUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  /* Sign Out */
  const SignOutUser = () => {
    setUser(null);
    return signOut(auth);
  };
  // Update Profile
  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // Current user authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    createUserWithGoogle,
    resetUserPassword,
    SignOutUser,
    updateUserProfile,
  };
  return (
    <TaskContext.Provider value={authInfo}>{children}</TaskContext.Provider>
  );
};

export default AuthContext;
