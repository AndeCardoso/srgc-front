import * as S from './styled';

import { Gallery } from "../sections/Gallery";
import { Weather } from '../sections/Weather';

export const Main = () => {
  return (
    <S.Main>
      <Gallery />
      <Weather />
    </S.Main>
  );
}