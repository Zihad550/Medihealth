import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => setError(error.message));
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => setError(error.message));
  };

  const logOut = () => {
    signOut(auth).catch((error) => {
      setError(error.message);
    });
  };

  const brandSignin = (provider) => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  console.log(user);

  return {
    register,
    user,
    handleEmail,
    handlePassword,
    brandSignin,
    login,
    error,
    logOut,
  };
};

export default useFirebase;
