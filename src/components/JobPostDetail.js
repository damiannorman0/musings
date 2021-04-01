import React from 'react';
import styled from "styled-components/macro";

const StyledCard = styled.div`
  background-color: beige;
  border-radius: 10px;
  width: 80%;
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
  white-space: normal;
  margin-top: 20px;
  text-align: left;
`;

const StlyedLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const JobPostDetail = (props) => {
  const {
    name = '',
    contents = '',
    locations = [],
    refs: {
      landing_page,
    } = {},
  } = props;

  const locationElements = locations.map((location = {}, index) => {
    const {name = ''} = location;
    return (
      <StyledValue key={`location-${index}`}>{name}</StyledValue>
    )
  });

  return (
    <StyledCard>
      <StyledAttr>
        <StlyedLink href={`${landing_page}`} title={`${landing_page}`}>
          <StyledValue>{name}</StyledValue>
        </StlyedLink>
      </StyledAttr>
      <StyledAttr>
        <span>Locations:</span>
        <>
          <StyledValue>{locationElements}</StyledValue>
        </>
      </StyledAttr>
      <StyledAttr>
        <StyledContent dangerouslySetInnerHTML={{__html: `${contents}`}} />
      </StyledAttr>
    </StyledCard>
  );
}

export default JobPostDetail;