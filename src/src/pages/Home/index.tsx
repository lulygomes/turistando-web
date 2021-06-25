import React, { useState, useCallback, useEffect } from 'react';

import Header from '../../components/Header'
import Input from '../../components/Input';
import Add from '../../components/Modal/Add';
import api from '../../service/api';


import {
  Container,
  Search,
  SearchButton,
  InputBox,
  Content,
  PlaceBox,
  PlaceButton,
} from './styles';


interface ResponseData {
  id: string;
  name: string;
  city: string;
  uf: string;
  reference: string;
  about: string;
  owner: string;
}

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [places, setPlaces] = useState<ResponseData[]>([])

  useEffect(() => {
    const loadData = async () => {
      const { data } = await api.get('/place')

      setPlaces(data[0]);
    }

    loadData();
  }, []);

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
      <Content>
        {places.map(place => (
          <PlaceBox key={place.id}>
            <p className='name'>{place.name}</p>
            <p className='about'>{place.about}</p>
            <PlaceButton>
              ver detalhes...
            </PlaceButton>
          </PlaceBox>
        ))}
      </Content>

      {modalOpen && (
        <Add
          setModalOpen={setModalOpen}
        />
      )}
    </Container>
  )
}

export default Home;