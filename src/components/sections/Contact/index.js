import { useState } from 'react';

import { Input } from '../../dumbs/Input';
import { Button } from '../../dumbs/Button';

import * as S from './styled';

export const Contact = () => {
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleSend = async () => {
    const data = {
      name,
      phone,
      email
    }

    console.log(data);
  }

  return (
    <S.Container>
      <S.Section>
        <S.Title>Entre em contato:</S.Title>
        <S.Form>
          <S.TopInputs>
            <Input type="text" onChange={event => setName(event.target.value)} label="Nome" />
            <Input type="text" onChange={event => setPhone(event.target.value)} label="Telefone" />
          </S.TopInputs>
          <Input type="text" onChange={event => setEmail(event.target.value)} label="E-mail" />
          <Button type="button" onClick={handleSend}>Enviar</Button>
        </S.Form>
      </S.Section>
    </S.Container>
  );
}