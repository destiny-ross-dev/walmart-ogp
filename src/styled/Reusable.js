import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  /* border-radius: 3px; */
  background: ${props => props.theme.darkBlue};
  margin: 1em;
  padding: 0.7em 2em;
  color: ${props => props.theme.white};
  align-self: flex-end;
  font-size: 14px;
`;
export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 0;
  padding: 0 1em;
`;
