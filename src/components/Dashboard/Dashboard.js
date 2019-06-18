import React from "react";
import { StyledContainer } from "../../styled/Reusable";
import styled from "styled-components";

const DashboardContainer = styled(StyledContainer)`
  flex-grow: 1;
  background: white;
  color: black;
`;

function Dashboard() {
  return <DashboardContainer>DASHBOARD</DashboardContainer>;
}

export default Dashboard;
