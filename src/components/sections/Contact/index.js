import { useState } from 'react';
import { useAlert } from 'react-alert'

import { Input, InputPhone } from '../../dumbs/Input';
import { Button } from '../../dumbs/Button';

import { IoCall } from 'react-icons/io5';

import { emailValid, nameValid, phoneValid } from '../../../services/formsValidations';

import { useInfos } from '../../../hooks/infos-hooks';
import api from '../../../services/api';

import * as S from './styled';

export const Contact = () => {
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');

  const { infosState } = useInfos();

  const alert = useAlert();

  const isName = nameValid(name);
  const isPhone = phoneValid(phone);
  const isEmail = emailValid(email);

  const handleSend = async () => {
    if(isName) {
      return alert.show(isName.msg, {type: isName.type});
    }
    if(isPhone) {
      return alert.show(isPhone.msg, {type: 'error'});
    }
    if(isEmail) {
      return alert.show(isEmail.msg, {type: 'error'});
    }

    const data = {
      name,
      phone,
      email
    }
    await api.post('/public/contact', data)
    .then(() => {
      return alert.show(`Seu contato foi enviado!`, {type: 'success'})
    })
    .catch(() => {
      return alert.show('Um erro inesperado aconteceu.', {type: 'error'});
    })
  }

  const phoneLink = `tel:+55${infosState.settings.phone}`;

  return (
    <S.Container>
      <S.Wrapper>
        <S.Section>
          <S.Title>Entre em contato:</S.Title>
          <S.Form>
            <S.TopInputs>
              <Input type="text" onChange={event => setName(event.target.value)} label="Nome" className="left" />
              <InputPhone type="text" onChange={event => setPhone(event.target.value)} label="Telefone" className="right"  />
            </S.TopInputs>
            <Input type="text" onChange={event => setEmail(event.target.value)} label="E-mail" className="email" />
            <Button type="button" onClick={handleSend} >Enviar</Button>
          </S.Form>
        </S.Section>
        <S.Contact>
          <a href={phoneLink}>
            <IoCall />
            {infosState.settings.phone}
          </a>
        </S.Contact>
      </S.Wrapper>
    </S.Container>
  );
}