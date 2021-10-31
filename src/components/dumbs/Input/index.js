import * as S from './styled';

export const Input = ({ type, placeholder, label }) => {
  return (
    <S.Container>
      <label>{label}:</label>
      <input type={type} placeholder={placeholder} />
    </S.Container>
  );
}