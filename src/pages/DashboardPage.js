import React, { useEffect } from "react";
import { StyledContainer } from "../styled/Reusable";
import styled from "styled-components";

const DashboardContainer = styled(StyledContainer)`
  flex-grow: 1;
  background: white;
  color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 45px);
  width: 100%;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    // justify-content: unset;
  }

  & h1 {
    width: 100%;
    margin: 10px 0 5px auto;
    text-align: center;
    align-self: flex-start;
  }
`;

const TaskContainer = styled(StyledContainer)`
  flex-grow: 1;
  border: 0.5px solid ${props => props.theme.gray};
  width: 100%;
  max-width: 250px;
  max-height: 150px;
  margin: 10px auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media only screen and (min-width: 600px) {
    align-self: flex-end;
    margin: 5px auto 25px auto;
    min-height: 150px;
  }

  p {
    font-size: 1rem;
  }
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
    <DashboardContainer className="test">
      {props.token ? (
        <>
          {props.user.user_type == "employee" && (
            <h1>Hello, {props.user.first_name}</h1>
          )}
          <TaskContainer>
            <p>View All Upcoming Orders</p>
          </TaskContainer>
          <TaskContainer>
            <p>Current Orders</p>
          </TaskContainer>
          <TaskContainer>
            <p>Review Completed Orders</p>
          </TaskContainer>
          <TaskContainer>other thing here</TaskContainer>
        </>
      ) : (
        <h1>loading..</h1>
      )}
    </DashboardContainer>
  );
}

export default Dashboard;
