import React, { useCallback, useState } from 'react';

import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';

import { Container, Contante, Button } from './styles';
import { useHistory } from 'react-router-dom';

const Welcome: React.FC = () => {
  const [name, setName] = useState<string>('');
  const { signIn } = useAuth();
  const history = useHistory();

  const handleLogin = useCallback(async() => {
    console.log(name)
    await signIn(name)
    history.push('/home')
  }, [name, signIn, history]);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />

        <Button onClick={handleLogin}>
          <p>Entrar</p>
        </Button>
      </Contante>
    </Container>
  )
}

export default Welcome