import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import { Container, Contante, Button } from './styles';

const Welcome: React.FC = () => {

  return (
    <Container>
      <Contante>
        <div>
          <h1>Turistando</h1>
          <p>A melhor rede de pontos turisticos</p>
        </div>

        <Input
          id='userName'
          label="Nome"
          placeholder="Digite seu nome"
        />

        <Button>
          <Link to='/home'>Entrar</Link>
        </Button>
      </Contante>
    </Container>
  )
}

export default Welcome