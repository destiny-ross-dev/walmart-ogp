import React, { useEffect } from "react";
import { StyledContainer } from "../styled/Reusable";
import styled from "styled-components";

const DashboardContainer = styled(StyledContainer)`
  flex-grow: 1;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
`;

function Dashboard(props) {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    if (!props.token) {
      props.history.push("/");
    }
    console.log(`console logging:`, props);
  };

  return (
    <DashboardContainer>
      {props.token ? (
        <>{props.token && <h1>Hello, {props.user.first_name}</h1>}</>
      ) : (
        <h1>loading..</h1>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;
