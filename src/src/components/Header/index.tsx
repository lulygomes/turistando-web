import React from 'react';

import logo from '../../assets/logo.png'

import { Container, Button } from './styles';

interface HeaderDto {
  handleOpenModal: Function;
}

const Header: React.FC<HeaderDto> = ({handleOpenModal}) => {

  return (
    <Container>
      <img src={logo} alt="" />
      <Button onClick={() => handleOpenModal()}>
        <p>Cadastrar um ponto turístico</p>
      </Button>
    </Container>
  )
}

export default Header;