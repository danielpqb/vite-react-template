import InputBox from "components/common/Form/InputBox";
import SubmitButton from "components/common/Form/SubmitButton";
import { regexErrors } from "constants/regex-errors";
import { useAppContext } from "contexts/AppContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "services/user-services";
import styled from "styled-components";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const { setAlert } = useAppContext();

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }
    setIsSubmitDisabled(true);

    try {
      await postSignUp(form);

      setAlert({
        show: true,
        message: "User created sucessfully!",
        flag: "green",
      });

      setIsSubmitDisabled(false);

      navigate("/");
    }
    catch (error) {
      setAlert({
        show: true,
        message: "User creation failed!",
        flag: "red",
      });

      setIsSubmitDisabled(false);
      return;
    }
  }

  return (
    <Container>
      <SignUpForm
        action=""
        onSubmit={handleSubmit}
      >
        <InputBox
          name="name"
          placeholder="username"
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
          value={form.name}
          hasIcon={true}
          regex={regexErrors.userName.pattern}
        />
        <InputBox
          name="email"
          placeholder="e-mail"
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          value={form.email}
          hasIcon={true}
          regex={regexErrors.userEmail.pattern}
        />
        <InputBox
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
          value={form.password}
          hasCheckBox={true}
          hasIcon={true}
          regex={regexErrors.userPassword.pattern}
        />

        <SubmitButton disabled={isSubmitDisabled}>Sign Up</SubmitButton>
      </SignUpForm>

      <RedirectTo>
        <Link to={"/"}>Switch back to log in</Link>
      </RedirectTo>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;
    flex-direction: column;
    padding: 20px;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 30px 0px;
  }
  @media (min-width: 800px) {
    & {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const SignUpForm = styled.form`
  & {
    flex-direction: column;
    width: 100%;
    height: 50%;
    text-align: center;
    margin-top: 200px;
  }
  @media (min-width: 800px) {
    & {
      width: calc(40% - 20px);
      text-align: center;
      margin-top: 0px;
      margin-left: calc(60% + 22px);
    }
  }
`;

const RedirectTo = styled.div`
  & {
    margin: 20px;
  }
  a {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-decoration-line: underline;
  }
  @media (min-width: 800px) {
    & {
      margin-left: calc(60% + 22px);
    }
  }
`;
