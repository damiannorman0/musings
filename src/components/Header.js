import React from 'react';
import styled from "styled-components/macro";
import Filter from "./Filter";

import {Link} from 'react-router-dom';

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
  box-shadow: -1px 5px 20px 5px rgba(0, 0, 0, 0.3);
  padding: 5px;

  h1 {
    color: white;
    margin: 10px;
    padding: 0;
    font-size: xxx-large;
  }
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

const StlyedLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const Header = (props) => {
  const {
    page, page_count, placeholder, filter,
  } = props;

  return (
    <StyledHeader>
      <StlyedLink to={`/`}>
        <StyledTitle>
          <h1>Available Jobs from The Muse</h1>
          {filter && <Filter placeholder={placeholder} filter={filter}/>}
        </StyledTitle>
      </StlyedLink>
      <StyledNav>
        {page && page_count && <StyledLink>{`page ${page}/${page_count}`}</StyledLink>}
      </StyledNav>
    </StyledHeader>
  );
};


export default Header;