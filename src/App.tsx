import { ReactNode, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Alert from "./components/common/Alert/Alert";
import Counter from "./components/common/Counter/Counter";
import ProtectedRoute from "./components/common/ProtectedRoute";

import { requestUserData } from "./global-functions";
import { useAppContext } from "./contexts/AppContext";
import Home from "./components/pages/Home";

export default function App() {
  const { userData, setUserData, alert, counter } = useAppContext();

  useMemo(() => {
    const headerColor = "color: #ffbe88; font-weight: bold;";
    const paramColor = "\x1B[38;2;126;204;152m"; //rgb(126, 204, 152)"
    const dependencyColor = "\x1B[38;2;255;154;136m"; //rgb(255, 154, 136)"
    const stringColor = "\x1B[38;2;54;206;193m"; //rgb(54, 206, 193)"
    const resetColor = "\x1B[m";

    const separateParams = (obj: object) => {
      if (obj) {
        Object.entries(obj).forEach((keyValuePair) => {
          if (typeof keyValuePair[1] === "string") {
            console.log(
              `  ${paramColor}${keyValuePair[0]}: ${stringColor}'${keyValuePair[1]}'`
            );
            return;
          }
          console.log(`  ${paramColor}${keyValuePair[0]}:`, keyValuePair[1]);
        });
      }
      console.log("\n ");
    };

    console.clear();
    console.log(
      `%c\nuserData ${dependencyColor}(dependency)${resetColor}`,
      headerColor
    );
    separateParams(userData);
  }, [userData]);

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");
    if (localToken) {
      requestUserData(localToken, setUserData);
    }
  }, [setUserData]);

  return (
    <>
      {alert?.show && <Alert />}
      {counter?.show && <Counter />}

      <Background>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />} />
            <Route
              element={
                <ProtectedRoute token={localStorage.getItem("userToken")} />
              }
            >
              <Route
                path="*"
                element={<Navigate to="/" />} />
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

    padding: 5px;

    background-color: var(--background-a-color);

    @media (max-height: 400px) {
      padding: 0px;
    }
  }
`;
