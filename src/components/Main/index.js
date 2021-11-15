import * as S from './styled';

import { Galleries } from "../sections/Galleries";
import { Weather } from '../sections/Weather';

export const Main = () => {
  return (
    <S.Main>
      <Galleries />
      <Weather />
    </S.Main>
  );
};