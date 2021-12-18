import { MdOutlineArrowForwardIos } from 'react-icons/md';

import * as S from './styled';

export const Button = ({ type, children, onClick, className}) => {
  return (
    <S.Container>
      <button className="standard" type={type} onClick={onClick}>{children}</button>
    </S.Container>
  );
}

export const GalleryButton = ({ children, onClick, className, state }) => {

  return (
    <S.Container className={className} >
      <S.Item>
        <button onClick={onClick} className={state ? 'clicked' : ''}>
          <div>
            <span>{children}</span>
            <i><MdOutlineArrowForwardIos size={24} /></i>
          </div>
        </button>
      </S.Item>
    </S.Container>
  );
}