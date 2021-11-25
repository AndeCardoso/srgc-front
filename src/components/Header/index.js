import * as S from './styled';
import { Slide } from "../sections/Slide";
import { Contact } from "../sections/Contact";
import { SocialMedias } from "../sections/SocialMedias";

export const Header = () => {
  return (
    <S.Container >
        <Slide />
      <S.Header id="home">
        <S.BelongContainer>
          <SocialMedias />
          <Contact />
        </S.BelongContainer>
      </S.Header>
    </S.Container>
  )
}
