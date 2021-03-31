import React, {useEffect, useMemo} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';



import {jobAction} from "./actions/jobsAction";
import styled from "styled-components/macro";

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

const Detail = (prop) => {
  const {
    page,
    page_count,
  } = useSelector((state) => {
    return state.jobsReducer;
  }) || [];

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobAction(id));
  }, [dispatch, id]);

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
      {id}
    </StyledMain>
    </div>

  )
};

export default Detail;