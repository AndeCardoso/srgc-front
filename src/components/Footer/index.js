import { useEffect, useState } from 'react';

import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'

import * as S from './styled';

export const Footer = () => {
  const [icon, setIcon] = useState('');
  const [link, setLink] = useState('');

  const socialMedias = {
    Facebook: <FaFacebookF size={25} />,
    Twitter: <AiOutlineTwitter size={25} />,
    Instagram: <BsInstagram size={25} />,
    Youtube: <ImYoutube2 size={25} />,
  }

  useEffect(() => {
    setIcon(socialMedias.Facebook);
  }, [])
  return (
    <S.Footer>
      <S.Top>
          <a href="#home" class="scroll-top">Back To Top</a>
      </S.Top>
      <S.SocialMedias>
        <S.Icon>
          <a href={link}>{icon}</a>
        </S.Icon>
        <S.Icon>
          <a href={link}>{icon}</a>
        </S.Icon>
        <S.Icon>
          <a href={link}>{icon}</a>
        </S.Icon>
      </S.SocialMedias>
      <S.CopyRight>
        <p>Copyright &copy; 2021 Hotel Kolman | Made by <a href="http://andersoncardoso.dev.br" target="_blank" rel="noreferrer">Anderson Cardoso</a></p>
      </S.CopyRight>
    </S.Footer>
  );
}