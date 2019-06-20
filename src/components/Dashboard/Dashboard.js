import React, { useEffect } from "react";
import { StyledContainer } from "../../styled/Reusable";
import styled from "styled-components";
import axios from "axios";

const DashboardContainer = styled(StyledContainer)`
  flex-grow: 1;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
`;

function Dashboard(props) {
  useEffect(() => {
    
  });
  
  return (
    <DashboardContainer>
      DASHBOARD
      <h1>Hello, { props.token && props.user.first_name}</h1>
    </DashboardContainer>
  );
}

export default Dashboard;
