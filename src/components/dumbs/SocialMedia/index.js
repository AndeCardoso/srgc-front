import { useEffect, useState } from 'react';

import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'

import * as S from './styled';

export const SocialMedia = ({ href, children, media }) => {
  const [icon, setIcon] = useState('');

  const socialMedias = {
    Facebook: <FaFacebookF size={40} />,
    Twitter: <AiOutlineTwitter size={40} />,
    Instagram: <BsInstagram size={40} />,
    Youtube: <ImYoutube2 size={40} />,
  }

  useEffect(() => {
    setIcon(socialMedias[media]);
  }, [])
  

  return (
    <S.Container>
      <S.Link href={href} target="_blank">
        {children}
        <S.Icon>
          {icon}
        </S.Icon>
      </S.Link>
    </S.Container>
  );
}