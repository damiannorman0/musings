import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';


import {jobAction} from "../actions/jobsAction";
import styled from "styled-components/macro";
import JobPostDetail from "../components/JobPostDetail";
import Header from "../components/Header";

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Detail = (props = {}) => {
  const {
    job,
  } = useSelector((state) => {
    return state.jobsReducer;
  }) || [];

  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobAction(id));
  }, [dispatch, id]);

  return (
    <div className="App">
      <Header/>
      <StyledMain>
        <JobPostDetail {...job} />
      </StyledMain>
    </div>

  )
};

export default Detail;