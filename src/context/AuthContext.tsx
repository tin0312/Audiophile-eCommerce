// Using authentiation state observer to get user data

import { getAuth, onAuthStateChanged, User, signOut } from "firebase/auth";
import { app } from "../lib/firebase/firebaseConfig";
import { useContext, createContext, useState, useEffect } from "react";
import React from "react";

//Declare authentication context type

export type AuthContextType = {
  user: User | null;
  logOut: () => void;
};
const auth = getAuth(app);

// Create authentication context
export const authContext = createContext<AuthContextType | null>(null);

export const useAuthContext = (): AuthContextType | null =>
  useContext(authContext);

// Create authentication context provider and pass its nessary logout and users data
// for its children
export default function AuthenticationContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // set up authentication observer to keep track of user data
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      new Error("Error signing out!");
    }
  };

  return (
    <authContext.Provider value={{ user, logOut }}>
      {children}
    </authContext.Provider>
  );
}
