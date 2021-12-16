import { useState, useEffect } from 'react';

import { IoCall } from 'react-icons/io5'

import { Booking, SocialMedia } from "../../dumbs/SocialMedia";

import api from '../../../services/api';

import * as S from './styled';

export const SocialMedias = () => {
  const [ phone, setPhone ] = useState('');
  const [ enterpriseName, setEnterpriseName ] = useState('');

  const [ sectionTitle, setSectionTitle ] = useState('');

  const [ facebook, setFacebook ] = useState('');
  const [ instagram, setInstagram ] = useState('');

  const [ booking, setBooking ] = useState('');

  const phoneLink = `tel:+550${phone}`;

  useEffect( async () => {
    await api.get('/settings')
    .then(response => {
      setPhone(response.data.settings.phone);
      setEnterpriseName(response.data.settings.enterpriseName);
    })
  }, []);

  useEffect( async () => {
    await api.get('/social-medias')
    .then(response => {
      setSectionTitle(response.data.socialMedias.sectionTitle);
      setFacebook(response.data.socialMedias.facebook);
      setInstagram(response.data.socialMedias.instagram);
      setBooking(response.data.socialMedias.twitter);
    })
  }, [])

  return (
    <S.Container>
      <S.Section>
        <S.Logo>
          <h1>{enterpriseName}</h1>
        </S.Logo>
        <S.Social>
            {
              booking ? <Booking href={booking} media="Booking">Faça sua reserva</Booking> : <></>
            }
          <S.SectionTitle>{sectionTitle}</S.SectionTitle>
          <S.List>
            {
              facebook ? <SocialMedia href={facebook} media="Facebook">Curta nossa pagina</SocialMedia> : <></>
            }
            {
              instagram ? <SocialMedia href={instagram} media="Instagram">Siga nosso perfil</SocialMedia> : <></>
            }

          </S.List>
        </S.Social>
        <S.Contact>
          <a href={phoneLink}>
            <IoCall />
            {phone}
          </a>
        </S.Contact>
      </S.Section>
    </S.Container>
  );
}