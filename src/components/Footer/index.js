import { FaFacebookF, FaReact } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

import { useInfos } from '../../hooks/infos-hooks'

import * as S from './styled';

export const Footer = () => {
  const { infosState } = useInfos();

  return (
    <S.Footer>
      <S.Top>
          <a href="#home">Voltar ao topo</a>
      </S.Top>
      <S.SocialMedias>
        {
          infosState.socialMedias.facebook
          ?
          <S.Icon>
            <a href={infosState.socialMedias.facebook} target="_blank" rel="noreferrer"><FaFacebookF size={25} /></a>
          </S.Icon> 
          :
          <></>
        }
        {
          infosState.socialMedias.instagram 
          ?
          <S.Icon>
            <a href={infosState.socialMedias.instagram} target="_blank" rel="noreferrer"><BsInstagram size={25} /></a>
          </S.Icon> 
          :
          <></>
        }
      </S.SocialMedias>
      <S.CopyRight>
        <S.Infos>
          <p>Copyright &copy; 2021 {infosState.settings.enterpriseName} </p><p>| {infosState.settings.address} |</p>
          <p>Telefone: {infosState.settings.phone} | Whatsapp: {infosState.settings.whatsapp}</p>
        </S.Infos>
        <S.Developer>
          <p>Desenvolvido por <strong><a href="http://andersoncardoso.dev.br" target="_blank" rel="noreferrer">Anderson Cardoso</a></strong> em React <FaReact size={12} /></p>
        </S.Developer>
      </S.CopyRight>
    </S.Footer>
  );
}