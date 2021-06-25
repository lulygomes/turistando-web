import React, {InputHTMLAttributes} from 'react';

import { Container } from './styles';

interface InputData extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  containerStyles?: object;
}

const Input: React.FC<InputData> = ({label, id, containerStyles, ...rest}) => {

  return (
    <Container style={containerStyles}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...rest} />
    </Container>
  )
}

export default Input;
