import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Container, Content, Close } from './styles';

interface PlaceData {
  id: string;
  name: string;
  city: string;
  uf: string;
  reference: string;
  about: string;
  owner: string;
}


interface AddDto {
  setModalOpen: Function;
  place: PlaceData;
}

const Details: React.FC<AddDto> = ({ setModalOpen, place }) => {

  return (
    <Container>
      <Content>
        <h1 >{place.name}</h1>
        <h3>{place.city} - {place.uf}</h3>
        <h4>{place.reference}</h4>
        <p>{place.about}</p>
        <p>Registro feito por {place.owner}</p>


        <Close onClick={() => setModalOpen()}>
          <AiOutlineCloseCircle color='red' size={25} />
        </Close>
      </Content>
    </Container>
  )
}

export default Details;
