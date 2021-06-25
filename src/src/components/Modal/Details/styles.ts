import styled from 'styled-components';

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

  h1, h3, h4, p {
    margin: 8px;
  }

`;

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
