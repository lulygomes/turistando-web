import styled from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, .5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;


export const Content = styled.div`
  width: 40vw;
  background: #fff;

  border-radius: 4px;
  margin: 0 auto;
  padding: 16px;

  position: relative;

  h2 {
    margin: 8px 0;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  `;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const Location = styled.div`
  position: relative;
  margin: 8px;
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 4px;
  flex: 1;
  width: 250px;
  min-width: 250px;
  
  label {
    position: absolute;
    top: -10px;
    left: 5px;
    background: #fff;
  }

  input {
    margin-left: 8px;
    border: none;
    padding: 0;
    background: transparent;
    width: 70%;
  }
  select {
    padding: 3px;
  }

`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  background: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 4px;

  textarea {
    border: none;
    background: transparent;
    width: 100%;
    resize: none;
    margin: 4px;
  }
`;

export const ButtonBox = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.div`
  padding: 8px;
  width: 20%;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  `;

export const ConfirmButton = styled(Button)`
  background: ${theme.color.primary};
  color: #fff;
  transition: all 0.5s;
  
  &:hover{
    background: ${theme.color.secondary};
  }
`;

export const CancelButton = styled(Button)`
  border: 1px solid red;
  color: red;
`;