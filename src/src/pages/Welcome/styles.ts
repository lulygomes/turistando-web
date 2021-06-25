import styled from "styled-components";
import theme from '../../styles/theme';
import backgroundImage from '../../assets/bg.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background: url(${backgroundImage}) no-repeat center;
`;

export const Contante = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  width: 40vw;
  margin: auto;
  border-radius: 5px;

  background: rgba(255,255,255, 0.9);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;

  padding: 16px;

  h1, p {
    text-align: center;
    margin: 8px;
  }

  `;

export const Button = styled.div`
  background: ${theme.color.primary};
  width: 20%;
  margin: 0 auto;
  border-radius: 5px;
  transition: all 0.5s;
  cursor: pointer;
  padding: 8px;
  text-align: center;
  
  p {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }
  
  &:hover {
    background: ${theme.color.secondary};
  }
`;