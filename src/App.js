import React, {useEffect, useMemo} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {jobsAction} from "./actions/jobsAction";

import './App.css';

import styled from 'styled-components/macro';
import JobPost from "./components/JobPost";


const StyledHeader = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  background-color: olive;
  color: white;
  margin-bottom: 10px;
  padding: 10px;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  text-align: left;
  box-shadow: -1px 5px 20px 5px rgba(0,0,0,0.3);
  padding: 5px;

  h1 {
    color: white;
    margin: 10px;
    padding: 0;
    font-size: xxx-large;
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledLink = styled.div`
  cursor: pointer;
  margin: 10px;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


function App() {
  const {
    jobs,
    page,
    page_count,
  } = useSelector((state) => {
    return state.jobsReducer;
  }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobsAction());
  }, [dispatch]);

  //sort/filter util
  const jobElements = useMemo(() => {
    return jobs.map((item, index) => {
      return (
        <JobPost key={`post_${index}`} {...item} />
      );
    });
  }, [jobs])

  return (
    <div className="App">
      <StyledHeader>
        <StyledTitle>
          <h1>Available Jobs from The Muse</h1>
        </StyledTitle>
        <StyledNav>
          <StyledLink>{`page ${page}/${page_count}`}</StyledLink>
        </StyledNav>
      </StyledHeader>
      <StyledMain>
        {jobElements}
      </StyledMain>
    </div>
  );
}

export default App;
