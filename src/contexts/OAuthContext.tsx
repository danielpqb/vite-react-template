import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "helpers/oauth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { OAuthStates } from "types/oauth-types";

const OAuthContext = createContext({} as OAuthStates);

export const useOAuthContext = () => {
  return useContext(OAuthContext);
};

export default function OAuthContextProvider({ children }: { children: ReactNode }) {
  const [oAuthData, setOAuthData] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((res) => {
      setOAuthData(() => {
        return res.user;
      });
    });
  };

  useEffect(() => {
    return () => {};
  }, []);

  const states = { googleSignIn, oAuthData };
  return <OAuthContext.Provider value={states as OAuthStates}>{children}</OAuthContext.Provider>;
}
