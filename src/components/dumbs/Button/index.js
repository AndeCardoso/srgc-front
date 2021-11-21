import { MdOutlineArrowForwardIos } from 'react-icons/md';

import * as S from './styled';

export const Button = ({ type, children, onClick, className}) => {
  return (
    <S.Container>
      <button className="standart" type={type} onClick={onClick}>{children}</button>
    </S.Container>
  );
}

export const GalleryButton = ({ children, onClick, className }) => {
  return (
    <S.Container className={className} >
      <S.Item><button onClick={onClick}>{children} <i><MdOutlineArrowForwardIos size={24} /></i></button></S.Item>
    </S.Container>
  );
}