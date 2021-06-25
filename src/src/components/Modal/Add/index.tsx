import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Input from '../../Input';

import { 
  Container, 
  Content, 
  Close, 
  Location, 
  InputBox, 
  TextArea, 
  ButtonBox, 
  Button,
  ConfirmButton,
  CancelButton,
} from './styles';

interface AddDto {
  setModalOpen: Function
}
const ufList = [
  {
    uf: 'UF',
    value: '',
  },
  {
    uf: 'AC',
    value: 'Acre',
  },
  {
    uf: 'AL',
    value: 'Alagoas',
  },
  {
    uf: 'AP',
    value: 'Amapá',
  },
  {
    uf: 'AM',
    value: 'Amazonas',
  },
  {
    uf: 'BA',
    value: 'Bahia',
  },
  {
    uf: 'CE',
    value: 'Ceará',
  },
  {
    uf: 'DF',
    value: 'Distrito Federal',
  },
  {
    uf: 'ES',
    value: 'Espírito Santo',
  },
  {
    uf: 'GO',
    value: 'Goiás',
  },
  {
    uf: 'MA',
    value: 'Maranhão',
  },
  {
    uf: 'MT',
    value: 'Mato Grosso',
  },
  {
    uf: 'MS',
    value: 'Mato Grosso do Sul',
  },
  {
    uf: 'MG',
    value: 'Minas Gerais',
  },
  {
    uf: 'PA',
    value: 'Pára',
  },
  {
    uf: 'PB',
    value: 'Paraíba',
  },
  {
    uf: 'PR',
    value: 'Paraná',
  },
  {
    uf: 'PE',
    value: 'Pernambuco',
  },
  {
    uf: 'PI',
    value: 'Piauí',
  },
  {
    uf: 'RJ',
    value: 'Rio de Janeiro',
  },
  {
    uf: 'RN',
    value: 'Rio Grande do Norte',
  },
  {
    uf: 'RS',
    value: 'Rio Grande do Sul',
  },
  {
    uf: 'RO',
    value: 'Rondônia',
  },
  {
    uf: 'RR',
    value: 'Roraima',
  },
  {
    uf: 'SC',
    value: 'Santa Catarian',
  },
  {
    uf: 'SP',
    value: 'São Paulo',
  },
  {
    uf: 'SE',
    value: 'Sergipe',
  },
  {
    uf: 'TO',
    value: 'Tocantins',
  },
]

const Add: React.FC<AddDto> = ({ setModalOpen }) => {


  return (
    <Container>
      <Content>
        <h2>Cadastre um local</h2>

        <InputBox>
          <Input
            id="name"
            label="Nome do local"
            containerStyles={{
              flex: 1,
              margin: '8px'
            }}
          />

          <Location>
            <label htmlFor="city">Localização</label>
            <input id='city' type="text" placeholder="Cidade" />
            <select
              aria-label="UF"
            >
              {ufList.map(({ uf, value }) => (
                <option value={value}>{uf}</option>
              ))}
            </select>
          </Location>
          <Input
            id="reference"
            label="Referencia"
            containerStyles={{
              flex: 2,
              margin: '8px'
            }}
          />

        </InputBox>
          <TextArea>
            <label htmlFor="about">Descrição</label>
            <textarea name="about" id="about" rows={8} placeholder="Diga um pouco sobre esse lugar" ></textarea>
          </TextArea>

          <ButtonBox>
            <CancelButton onClick={() => setModalOpen()}>
              Cancelar
            </CancelButton>
            <ConfirmButton>
              Cadastar
            </ConfirmButton>

          </ButtonBox>

        <Close onClick={() => setModalOpen()}>
          <AiOutlineCloseCircle color='red' size={25} />
        </Close>
      </Content>
    </Container>
  )
};

export default Add;