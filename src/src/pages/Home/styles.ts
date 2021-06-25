import styled from 'styled-components';

import theme from '../../styles/theme'

export const Container = styled.div`
  padding: 0 5%;
  /* position: relative; */
`;

export const Search = styled.div`
  display: flex;
  margin: 16px auto;
  justify-content: space-evenly;
  width: 60%;

`;

export const InputBox = styled.div`
  width: 50%;
`;

export const SearchButton = styled.div`
  padding: 16px 24px;
  background: ${theme.color.primary};
  transition: all 0.5s;
  border-radius: 5px;
  cursor: pointer;
  
  p {
    color: #fff;
    transition: all 0.5s;
  }
  
  &:hover {
    background: ${theme.color.secondary};

  }
`;


export const Content = styled.main`
 padding: 24px;
`;

export const PlaceBox = styled.div`
  max-width: 500px;
  margin: 16px auto;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  padding: 8px;

  p.name {
    font-size: 20px;
    margin: 8px 0;
    font-weight: 500;
  }
`;

export const PlaceButton = styled.div`
  margin: 16px 8px;
  background: ${theme.color.primary};
  padding: 8px;
  color: #fff;
  cursor: pointer;
  width: 140px;
  text-align: center;
  border-radius: 8px;
`;