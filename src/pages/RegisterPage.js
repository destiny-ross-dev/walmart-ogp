import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import logoSrc from "../assets/images/Spark.png";
import { StyledButton, StyledContainer } from "../styled/Reusable";
import { slideUp } from "../styled/Animations";
import axios from "axios";

const RegisterContainer = styled(StyledContainer)`
  justify-content: space-between;
  background: ${props => props.theme.darkBlue};

  width: 100vw;
  height: 100vh;
  padding: 0 2em;
  @media only screen and (min-width: 600px) {
    justify-content: center;
  }

  & h2 {
    font-size: 2em;
    align-self: flex-start;
    margin: 0 1em;
    font-weight: 800;
  }

  & img {
    width: 120px;
    height: 128px;
    margin: auto;

    @media only screen and (min-width: 600px) {
      display: none;
    }
  }

  & input {
    width: 94%;
    height: 2.4em;
    margin: 10px 0;
    border: unset;
    border-bottom: 1px solid grey;
    padding: 5px 0.35em;
    font-size: 1.6em;
    /* font-family: "Bogle Black"; */
  }

  & a {
    margin: 10px 1.5em 0 1.5em;
    font-size: 1.6em;
    font-family: "Bogle";
    align-self: flex-start;
    /* padding: 1em 1.5em 0 1.5em; */
  }
  & button {
    margin-top: 0;
  }
`;

const InputContainer = styled(StyledContainer)`
  padding: 4vh 0;
  background: ${props => props.theme.white};
  width: 100vw;
  height: 70vh;
  justify-content: flex-start;
  animation: ${slideUp} 0.3s ease-in-out;
  color: black;

  @media only screen and (min-width: 600px) {
    width: 600px;
    height: 60vh;
    /* align-self: flex-end; */
  }

  & span {
    margin-top: auto;
  }
`;

function RegisterPage(props) {
  const [loading, setLoading] = useState(true);
  const [loginObj, setLoginInformation] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    document.title = "Employee Login";
  }, []);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const login = async e => {
    let loginRequest = await axios.post("/auth/login", { loginObj });
    console.log(loginRequest);
    props.setUser(loginRequest.data);
    props.history.push("/dashboard");
  };

  const handleInput = e => {
    setLoginInformation({ ...loginObj, [e.target.name]: e.target.value });
  };

  return (
    <RegisterContainer>
      <img src={logoSrc} />
      {!loading && (
        <InputContainer>
          <h2>Sign up</h2>
          <input
            placeholder="User ID"
            onChange={handleInput}
            name="username"
            type="text"
            value={loginObj.username}
          />
          <input
            placeholder="Email"
            type="email"
            onChange={handleInput}
            name="email"
            value={loginObj.email}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={handleInput}
            name="password"
            value={loginObj.password}
          />
          <input
            placeholder="Confirm password"
            type="password"
            onChange={handleInput}
            name="password"
            value={loginObj.password}
          />
          <StyledButton onClick={() => login()}>Register</StyledButton>
          <span>
            <Link to="/">Already registered? Click to log in.</Link>
          </span>
        </InputContainer>
      )}
    </RegisterContainer>
  );
}

export default RegisterPage;
