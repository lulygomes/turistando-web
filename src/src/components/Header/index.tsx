import React from 'react';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.png'

import { Container, Button } from './styles';

interface HeaderDto {
  handleOpenModal: Function;
}

const Header: React.FC<HeaderDto> = ({handleOpenModal}) => {
  const { user, } = useAuth();

  return (
    <Container>
      <img src={logo} alt="" />
      <h3>Bem-vindo {user.name}</h3>
      <Button onClick={() => handleOpenModal()}>
        <p>Cadastrar um ponto turístico</p>
      </Button>
    </Container>
  )
}

export default Header;