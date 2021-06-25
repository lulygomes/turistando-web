import React, { useState, useCallback, useEffect } from 'react';

import { useAuth } from '../../hooks/auth'

import Header from '../../components/Header'
import Input from '../../components/Input';
import Add from '../../components/Modal/Add';
import Details from '../../components/Modal/Details';

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
import { useHistory } from 'react-router-dom';


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
  const [modalOpenDetails, setModalOpenDetails] = useState(false)
  const [places, setPlaces] = useState<ResponseData[]>([])
  const [placeSelected, setPlaceSelected] = useState<ResponseData>({} as ResponseData)
  const [search, setSearch] = useState('');
  const { user } = useAuth()
  const history = useHistory()

  useEffect(() => {
    if (!user.id) {
      history.push('/')
    }
  }, [history, user]);

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

  const handleOpenModalDetails = useCallback((place) => {
    setPlaceSelected(place)
    setModalOpenDetails(true)
  }, []);

  const handleSearch = useCallback(async() => {
    try {
      const { data } = await api.get('/place/find', {
        params: {
          find: search
        }
      })
      
      setPlaces(data);
      setSearch('');
    } catch (err) {
      console.log(err)
    }
  }, [search]);

  return (
    <Container>
      <Header
        handleOpenModal={handleOpenModal}
      />
      <Search>
        <InputBox>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id='search'
            label='Busca'
            placeholder="Digite um termo para buscar um ponto turistico"
          />
        </InputBox>
        <SearchButton onClick={() => handleSearch()} >
          <p>Buscar</p>
        </SearchButton>
      </Search>
      <Content>
        {places.map(place => (
          <PlaceBox key={place.id}>
            <p className='name'>{place.name}</p>
            <p className='about'>{place.about}</p>
            <PlaceButton
              onClick={() => handleOpenModalDetails(place)}
            >
              ver detalhes...
            </PlaceButton>
          </PlaceBox>
        ))}
      </Content>

      {placeSelected && modalOpenDetails && (
        <Details 
          setModalOpen={setModalOpenDetails}
          place={placeSelected}
        />
      )}

      {modalOpen && (
        <Add
          setModalOpen={setModalOpen}
          setPlaces={setPlaces}
        />
      )}
    </Container>
  )
}

export default Home;