import React, { useState, useCallback } from 'react';

import Header from '../../components/Header'
import Input from '../../components/Input';
import Add from '../../components/Modal/Add';


import { Container, Search, SearchButton, InputBox } from './styles';

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = useCallback(() => {
    setModalOpen(true)
  }, []);

  return (
    <Container>
      <Header 
        handleOpenModal={handleOpenModal}
      />
      <Search>
        <InputBox>
          <Input
            id='search'
            label='Busca'
            placeholder="Digite um termo para buscar um ponto turistico"
          />
        </InputBox>
        <SearchButton>
          <p>Buscar</p>
        </SearchButton>
      </Search>

      {modalOpen && (
        <Add
          setModalOpen={setModalOpen}
        />
      )}
    </Container>
  )
}

export default Home;