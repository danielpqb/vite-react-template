import AnimationContextProvider from "components/common/Animate/AnimationContext";
import UserContextProvider from "contexts/UserContext";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./contexts/AppContext";
import { GlobalStyle } from "./global-styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />

    <AppContextProvider>
      <UserContextProvider>
        <AnimationContextProvider>
          <App />
        </AnimationContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
