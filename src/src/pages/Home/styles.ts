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