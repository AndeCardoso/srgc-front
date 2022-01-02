import { useInfos } from '../../../hooks/infos-hooks';

import { Booking } from '../../dumbs/SocialMedia';
import { SideListGallery } from '../../dumbs/SideListGallery';

import * as S from './styled';

export const Galleries = () => {
    const { infosState } = useInfos();

    return (
        <S.Section>
            <S.Wrapper>
                <S.Title>{infosState.sectionTitle}</S.Title>
                <S.ContainerWrapper>
                    <S.Container>
                        <SideListGallery />
                    </S.Container>
                    <S.Booking>
                        {
                            infosState.settings.booking ? <Booking href={infosState.settings.booking} media="Booking">Faça sua reserva</Booking> : <></>
                        }
                    </S.Booking>
                </S.ContainerWrapper>
            </S.Wrapper>
        </S.Section>
    );
}