import * as S from './styled';

export const Button = ({ type, children, onclick }) => {
  return (
    <S.Container>
      <button type={type} onClick={onclick}>{children}</button>
    </S.Container>
  );
}