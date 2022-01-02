import * as S from './styled';

import srgcLogo from '../../assets/logo-srgc.svg';

import { MdSignalWifiConnectedNoInternet0 } from 'react-icons/md'

export const ConnectionServerError = () => {
  return (
    <S.Container>
      <S.Logo src={srgcLogo} />
      <h1>ALGO ERRADO ACONTECEU!</h1>
      <div>
        <p>PERDA DE CONEXÃO COM O SERVIDOR</p>
        <S.Loading>
          <span></span>
          <span></span>
          <span></span>
        </S.Loading>
        <MdSignalWifiConnectedNoInternet0 size={50} />
      </div>
    </S.Container>
  )
}
