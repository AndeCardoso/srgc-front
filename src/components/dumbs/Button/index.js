import { MdOutlineArrowForwardIos } from 'react-icons/md';

import * as S from './styled';

export const Button = ({ type, children, onclick }) => {
  return (
    <S.Container>
      <button className="standart" type={type} onClick={onclick}>{children}</button>
    </S.Container>
  );
}

export const GalleryButton = ({ children, onClick }) => {
  return (
    <S.Container>
      <S.Item><button onClick={onClick}>{children} <i><MdOutlineArrowForwardIos size={24} /></i></button></S.Item>
    </S.Container>
  );
}