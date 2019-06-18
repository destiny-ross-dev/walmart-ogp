import React, { Component } from "react";
import logo from "../../assets/images/Spark-small.png";
import styled from "styled-components";
import "./NavIcon.css";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: 100vw;
  padding: 0.7em 1em;
  background: ${props => props.theme.darkBlue};

  & img {
    margin-left: 5px;
  }
`;

const StyledNavIcon = styled.div`
  margin: 1em;
  width: 20px;

  &:after,
  &:before,
  & div {
    background-color: ${props => props.theme.white};
    border-radius: 3px;
    content: "";
    display: block;
    height: 3px;
    margin: 4px 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover:before {
    transform: translateY(7px) rotate(135deg);
  }

  &:hover:after {
    transform: translateY(-7px) rotate(-135deg);
  }

  &:hover div {
    transform: scale(0);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src={logo} />
      <StyledNavIcon class="nav-icon">
        <div />
      </StyledNavIcon>
    </StyledHeader>
  );
}
export default Header;
