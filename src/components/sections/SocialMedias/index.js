import { useState, useEffect } from 'react';

import { IoCall } from 'react-icons/io5'

import { SocialMedia } from "../../dumbs/SocialMedia";

import api from '../../../services/api';

import * as S from './styled';

export const SocialMedias = () => {
  const [ phone, setPhone ] = useState('');

  const [ facebook, setFacebook ] = useState('');
  const [ instagram, setInstagram ] = useState('');
  const [ twitter, setTwitter ] = useState('');

  const phoneLink = `tel:+550${phone}`;

  useEffect( async () => {
    const response = await api.get('/settings');
    setPhone(response.data.settings.phone);
  }, []);

  useEffect( async () => {
    const response = await api.get('/social-medias');
    setFacebook(response.data.socialMedias.facebook);
    setInstagram(response.data.socialMedias.instagram);
    setTwitter(response.data.socialMedias.twitter);
  }, [])

  return (
    <S.Container>
      <S.Logo>
        <img src="https://logodownload.org/wp-content/uploads/2020/02/hoteis.com-logo.png" alt="Logo do Site" />
      </S.Logo>
      <S.Social>
        <S.Title>Acesse nossas redes sociais:</S.Title>
        <S.List>
          {
            facebook ? <SocialMedia href={facebook} media="Facebook">Curta nossa pagina</SocialMedia> : <></>
          }
          {
            instagram ? <SocialMedia href={instagram} media="Instagram">Siga nosso perfil</SocialMedia> : <></>
          }
          {
            twitter ? <SocialMedia href={twitter} media="Twitter">Siga nosso perfil</SocialMedia> : <></>
          }

        </S.List>
      </S.Social>
      <S.Contact>
        <a href={phoneLink}>
          <IoCall />
          {phone}
        </a>
      </S.Contact>
    </S.Container>
  );
}