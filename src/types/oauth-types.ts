export type OAuthStates = {
  googleSignIn: () => void;
  oAuthData: { name: string; email: string; photoURL: string };
};
