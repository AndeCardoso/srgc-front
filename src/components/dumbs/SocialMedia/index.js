import { useEffect, useState } from 'react';

import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { GiArrowCursor } from 'react-icons/gi';

import BookingIcon from '../../../assets/booking.svg';

import * as S from './styled';

export const SocialMedia = ({ href, children, media }) => {
  const [icon, setIcon] = useState('');

  const socialMedias = {
    Facebook: <FaFacebookF size={40} />,
    Instagram: <BsInstagram size={40} />,
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

export const Booking = ({ href, children }) => {

  return (
    <S.Container className="container-booking">
      <S.Link href={href} target="_blank" className="booking">
        {children}
        <S.Icon>
          <GiArrowCursor size={45} />
        </S.Icon>
      </S.Link>
    </S.Container>
  );
}