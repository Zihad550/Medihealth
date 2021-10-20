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
  const [isLoading, setIsLoading] = useState(true);

  // register handling function
  const register = () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  // login handling function
  const login = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  // logout function
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // brand sign in function
  const brandSignin = (provider) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  // email handling function
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // password handling function
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
      setIsLoading(false);
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
    isLoading,
  };
};

export default useFirebase;
