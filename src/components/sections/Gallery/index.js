import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import { MdOutlineArrowForwardIos } from 'react-icons/md'

import * as S from './styled';

export const Gallery = () => {
    const images = [910, 900, 700, 600, 500].map((size) => ({
    src: `https://placedog.net/${size}/${size}`
    }));

    return (
        <S.Section id='gallery'>
            <S.Container>
                <S.Title>Recommended Hotel For You</S.Title>
                <S.Wrapper>
                    <S.SideList>
                        <S.Item><a href="#gallery">Suit Room <i><MdOutlineArrowForwardIos size={24} /></i></a></S.Item>
                        <S.Item><a href="#gallery">Suit Room <i><MdOutlineArrowForwardIos size={24} /></i></a></S.Item>
                        <S.Item><a href="#gallery">Suit Room <i><MdOutlineArrowForwardIos size={24} /></i></a></S.Item>
                        <S.Item><a href="#gallery">Suit Room <i><MdOutlineArrowForwardIos size={24} /></i></a></S.Item>
                        <S.Item><a href="#gallery">Suit Room <i><MdOutlineArrowForwardIos size={24} /></i></a></S.Item>
                    </S.SideList>
                    <S.CarouselContainer>
                        <Carousel
                        images={images}
                        autoPlayInterval={3000}
                        isAutoPlaying={true}
                        hasDotButtons={'bottom'}
                        hasLeftButtonAtMax={false}
                        isLoop={true}
                        hasTransition={true}
                        transitionSpeed={4}
                        hasThumbnails={true}
                        hasIndexBoard={false}
                        hasSizeButton={false}
                        hasRightButton={false}
                        hasLeftButton={false}
                        />
                    </S.CarouselContainer>
                </S.Wrapper>
            </S.Container>
            
        </S.Section>
    );
}