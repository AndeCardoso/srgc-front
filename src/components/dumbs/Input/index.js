import ReactInputMask from 'react-input-mask';

import * as S from './styled';

export const Input = ({ type, placeholder, label, className, onChange }) => {
  return (
    <S.Container>
      <label>{label}:</label>
      <input type={type} placeholder={placeholder} className={className} onChange={onChange} />
    </S.Container>
  );
}

export const InputPhone = ({ label, type, onChange, value }) => {
  return (
    <S.Container>
      <label>{label}</label>
      <ReactInputMask type={type} mask="(99) 9 9999-9999" value={value} onChange={onChange} />
    </S.Container>
  )
}