import { ReactNode } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Counter from "./components/common/Counter/Counter";
import ProtectedRoute from "./components/common/ProtectedRoute";

import { useAppContext } from "./contexts/AppContext";
import Home from "./components/pages/Home";
import Alert from "components/common/Alert/Alert";
import SignUp from "components/pages/SignUp";
import SignIn from "components/pages/SignIn";
import useToken from "hooks/api/useToken";

export default function App() {
  const { alert, counter } = useAppContext();
  const token = useToken();

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
            <Route
              path="/sign-in"
              element={<SignIn />}
            />
            <Route
              path="/sign-up"
              element={<SignUp />}
            />
            <Route
              element={
                <ProtectedRoute
                  token={token}
                  noTokenPath={"/"}
                />
              }
            >
              <Route
                path="/user"
                element={<></>}
              />
              <Route
                path="*"
                element={<Navigate to="/sign-in" />}
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
