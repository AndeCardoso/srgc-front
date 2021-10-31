import { IoCall } from 'react-icons/io5'

import { SocialMedia } from "../../dumbs/SocialMedia";
import * as S from './styled';

export const SocialMedias = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src="https://logodownload.org/wp-content/uploads/2020/02/hoteis.com-logo.png" alt="Logo do Site" />
      </S.Logo>
      <S.Social>
        <S.Title>Acesse nossas redes sociais:</S.Title>
        <S.List>
            <SocialMedia href="http://facebook.com" media="Facebook">Curta nossa pagina</SocialMedia>
            <SocialMedia href="http://youtube.com" media="Instagram">Siga nosso perfil</SocialMedia>
            <SocialMedia href="http://instagram.com" media="Twitter">Find us on </SocialMedia>
        </S.List>
      </S.Social>
      <S.Contact>
        <a href="contact.html"><IoCall />Ligue pra gente!</a>
      </S.Contact>
    </S.Container>
  );
}