import React from 'react';
import styled from "styled-components/macro";
import {clean} from "../utils";

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
  box-shadow: -1px 5px 20px 5px rgba(0,0,0,0.3);
  font-size: larger;
  text-align: center;
  position: relative;
  cursor: pointer;
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

const StyledContent = styled.span`
  overflow: hidden;
  width: 100%;
  height: 100px;
  white-space: normal;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  padding: 10px;
  padding-left: 20px;
  padding-right: 25px;
  border-radius: 10px;
  border: none;
  background-color: olive;
  font-size: xx-large;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const StyledApplied = styled.div`
  padding: 10px;
  padding-left: 20px;
  padding-right: 25px;
  border-radius: 10px;
  border: none;
  background-color: green;
  font-size: xx-large;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
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

  const onClick = () =>{
  };

  return (
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
      <StyledAttr>
        <StyledContent>{cleansed}</StyledContent>
      </StyledAttr>
    </StyledCard>
  );

};

export default JobPost;