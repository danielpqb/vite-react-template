import { ReactNode, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Counter from "./components/common/Counter/Counter";
import ProtectedRoute from "./components/common/ProtectedRoute";

import { useAppContext } from "./contexts/AppContext";
import Home from "./components/pages/Home";
import Alert from "components/common/Alert/Alert";
import useUserData from "hooks/api/services/useUserData";

export default function App() {
  const { alert, counter } = useAppContext();

  const { userData } = useUserData();
  console.log(userData);

  //useConsoleLogVariables();

  // useEffect(() => {
  //   const localToken = localStorage.getItem("userToken");
  //   if (localToken) {
  //     //useRequestRetry(localToken, setUserData);
  //   }
  // }, [setUserData]);

  return (
    <>
      {alert?.show && <Alert />}
      {counter?.show && <Counter />}

      <Background>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route element={<ProtectedRoute token={localStorage.getItem("userToken")} />}>
              <Route
                path="*"
                element={<Navigate to="/" />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Background>
    </>
  );
}

function Background({ children }: { children: ReactNode }) {
  return <Layer1>{children}</Layer1>;
}

const Layer1 = styled.div`
  & {
    width: 100vw;

    background-color: var(--background-color);
  }
`;
