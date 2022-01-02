import { IoLogoWhatsapp } from 'react-icons/io5';

import { Booking, SocialMedia } from "../../dumbs/SocialMedia";
import { useInfos } from '../../../hooks/infos-hooks';

import * as S from './styled';

export const SocialMedias = () => {

  const { infosState } = useInfos();

  return (
    <S.Container>
      <S.Section>
        <S.Logo>
          <h1>{infosState.settings.enterpriseName}</h1>
        </S.Logo>
        <S.Social>
            {
              infosState.socialMedias.booking ? <Booking href={infosState.socialMedias.booking} media="Booking">Faça sua reserva</Booking> : <></>
            }
          <S.SectionTitle>{infosState.socialMedias.sectionTitle}</S.SectionTitle>
          <S.List>
            {
              infosState.socialMedias.facebook ? <SocialMedia href={infosState.socialMedias.facebook} media="Facebook">Curta nossa pagina</SocialMedia> : <></>
            }
            {
              infosState.socialMedias.instagram ? <SocialMedia href={infosState.socialMedias.instagram} media="Instagram">Siga nosso perfil</SocialMedia> : <></>
            }
          </S.List>
        </S.Social>
        <S.Contact>
          <a href={`https://wa.me/550${infosState.settings.whatsappNumber}?text=Eu%20tenho%20interesse%20em%20reservar%20um%20apartamento`}>
            <IoLogoWhatsapp size={25} />
            {infosState.settings.whatsapp}
          </a>
        </S.Contact>
      </S.Section>
    </S.Container>
  );
}