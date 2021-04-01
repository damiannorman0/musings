import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {jobsAction} from "./actions/jobsAction";

import './App.css';

import styled from 'styled-components/macro';
import JobPost from "./components/JobPost";
import Header from "./components/Header";

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;


function Landing() {
  const {
    jobs = [],
    page,
    page_count,
  } = useSelector((state) => {
    return state.jobsReducer;
  }) || [];

  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(jobsAction());
  }, [dispatch]);

  const filterByName = (filterParam = '') => {
    setFilter(filterParam);
  };

  const jobElements = jobs.filter((item) => {
    if (!filter) {
      return true;
    }
    const {name} = item;
    return name.toLowerCase().includes(filter);
  }).map((item, index) => {
    return (
      <JobPost key={`post_${index}`} {...item} />
    );
  });

  return (
    <div className="App">
      <Header  page={page} page_count={page_count} placeholder={'filter by name'} filter={filterByName} />
      <StyledMain>
        {jobElements}
      </StyledMain>
    </div>
  );
}

export default Landing;
