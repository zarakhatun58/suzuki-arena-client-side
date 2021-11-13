import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);


  useEffect(() => {
    fetch(`https://arcane-river-42711.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data?.admin)
      });
  }, [user?.email]);
  console.log(admin);

  const handleRegister = (email, password, name, history) => {
    createUserWithEmailAndPassword(auth, email, password, history)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser = { email, displayName: name };
        setUser(newUser);
        // send name to firebase creation
        // saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        history.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  const handleEmailLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    console.log("logout");

    return signOut(auth);
    
  };
  const handleUserInfoRegister = (email) => {
    fetch("https://arcane-river-42711.herokuapp.com/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return {
    user,
    admin,
    setUser,
    signInWithGoogle,
    isLoading,
    setIsLoading,
    handleRegister,
    handleEmailLogin,
    logOut,
    handleUserInfoRegister,

  
  };
};

export default useFirebase;
