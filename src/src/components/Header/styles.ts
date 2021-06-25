import styled from "styled-components";

import theme from '../../styles/theme';

export const Container = styled.header`
 display: flex;
 align-items: center;
 border-radius: 4px;
 justify-content: space-between;
 min-width: 350px;

  img {
    width: 300px;
  }
`;

export const Button = styled.div`
  padding: 16px;
  border: 1px solid ${theme.color.primary};
  transition: all 0.5s;
  border-radius: 5px;
  cursor: pointer;
  
  p {
    color: ${theme.color.primary};
    transition: all 0.5s;
  }
  
  &:hover {
    border: 1px solid ${theme.color.secondary};
    p {
      color: ${theme.color.secondary}
    }

  }
`;