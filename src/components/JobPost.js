import React from 'react';
import styled from "styled-components/macro";
import {clean} from "../utils";

import {Link} from 'react-router-dom';

const StyledCard = styled.div`
  background-color: beige;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 5px 20px 5px rgba(0, 0, 0, 0.3);
  font-size: larger;
  text-align: center;
  position: relative;
  cursor: pointer !important;
`;

const StyledAttr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  text-align: center;


  &:first-child {
    font-size: xx-large;
  }
`;

const StyledValue = styled.span`
  font-weight: bold;
`;

const StlyedLink = styled(Link)`
  text-decoration: none;
  color: black;
`;


const JobPost = (props) => {
  const {
    id, name = '', contents = '', locations = [], apply, hasApplied,
  } = props;

  let cleansed = clean(contents);

  const locationElements = locations.map((location = {}, index) => {
    const {name = ''} = location;
    return (
      <StyledValue key={`location-${index}`}>{name}</StyledValue>
    )
  });

  const onClick = () => {
  };

  return (
    <StlyedLink to={`/detail/${id}`}>
      <StyledCard>
        <StyledAttr>
          <StyledValue>{name}</StyledValue>
        </StyledAttr>
        <StyledAttr>
          <span>Locations:</span>
          <>
            <StyledValue>{locationElements}</StyledValue>
          </>
        </StyledAttr>
      </StyledCard>
    </StlyedLink>
  );

};

export default JobPost;