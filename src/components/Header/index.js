import * as S from './styled';
import { Slide } from "../sections/Slide";
import { Contact } from "../sections/Contact";
import { SocialMedias } from "../sections/SocialMedias";

export const Header = () => {
  return (
    <S.Header id="home">
      <Slide />
      <S.BelongContainer>
        <SocialMedias />
        <Contact />
      </S.BelongContainer>
    </S.Header>
  )
}
