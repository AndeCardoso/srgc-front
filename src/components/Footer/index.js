import { useEffect, useState } from 'react';

import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

import api from '../../services/api';

import * as S from './styled';

export const Footer = () => {
  const [enterpriseName, setEnterpriseName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [ facebook, setFacebook ] = useState('');
  const [ instagram, setInstagram ] = useState('');
  const [ twitter, setTwitter ] = useState('');

  const token = '$2b$10$imE3ylmcaAHEfmX/VjTHiuCZ1V1WIH227Utj.eSwjWDinntWEfMeq';

  useEffect( async () => {
    api.defaults.headers.token =  token;
    const response = await api.get('/settings');
    setEnterpriseName(response.data.settings.enterpriseName);
    setAddress(response.data.settings.address);
    setPhone(response.data.settings.phone);
  }, []);

  useEffect( async () => {
    if (token) {
      api.defaults.headers.token =  token;
      const response = await api.get('/social-medias');
      setFacebook(response.data.socialMedias.facebook);
      setInstagram(response.data.socialMedias.instagram);
      setTwitter(response.data.socialMedias.twitter);
    }
  }, [])

  return (
    <S.Footer>
      <S.Top>
          <a href="#home">Voltar ao topo</a>
      </S.Top>
      <S.SocialMedias>
        {
          facebook 
          ?
          <S.Icon>
            <a href={facebook} target="_blank" ><FaFacebookF size={25} /></a>
          </S.Icon> 
          :
          <></>
        }
        {
          twitter 
          ?
          <S.Icon>
            <a href={twitter} target="_blank"><AiOutlineTwitter size={25} /></a>
          </S.Icon> 
          :
          <></>
        }
        {
          instagram 
          ?
          <S.Icon>
            <a href={instagram} target="_blank"><BsInstagram size={25} /></a>
          </S.Icon> 
          :
          <></>
        }
      </S.SocialMedias>
      <S.CopyRight>
        <p>Copyright &copy; 2021 {enterpriseName} | {address} | Telefone: {phone}</p>
        <p>Desenvolvido por <a href="http://andersoncardoso.dev.br" target="_blank" rel="noreferrer">Anderson Cardoso</a></p>
      </S.CopyRight>
    </S.Footer>
  );
}