import { useState, useEffect } from 'react';
import Carousel from 'react-gallery-carousel';

import { GalleryButton } from '../../dumbs/Button';

import * as S from './styled';

export const Galleries = () => {
    const [sectionTitle, setSectionTitle] = useState('');

    const [gallery1, setGallery1] = useState('');
    const [gallery2, setGallery2] = useState('');
    const [gallery3, setGallery3] = useState('');
    const [gallery4, setGallery4] = useState('');
    const [gallery5, setGallery5] = useState('');

    const [images, setImages] = useState([]);

    const renderSwitch = (value) => {
        console.log(value)
        setImages([]);
        switch (value) {
            case '1': return setImages([910, 900, 701, 601, 501].map((size) => ({
                src: `https://placedog.net/${size}/${size}`
                })));
            case '2': return setImages([912, 902, 702, 602, 502].map((size) => ({
                src: `https://placedog.net/${size}/${size}`
                })));
            case '3': return setImages([913, 903, 703, 603, 503].map((size) => ({
                src: `https://placedog.net/${size}/${size}`
                })));
            case '4': return setImages([914, 904, 704, 604, 504].map((size) => ({
                src: `https://placedog.net/${size}/${size}`
                })));
            case '5': return setImages([915, 905, 705, 605, 505].map((size) => ({
                src: `https://placedog.net/${size}/${size}`
                })));
        }
    }

    useEffect(() => {
        renderSwitch('1');
        setGallery1('1');
        setGallery2('2');
        setGallery3('3');
        setGallery4('4');
        setGallery5('5');
    }, [])

    return (
        <S.Section id='gallery'>
            <S.Container>
                <S.Title>{sectionTitle}</S.Title>
                <S.Wrapper>
                    <S.SideList>
                        { gallery1 !== '' ?
                            <GalleryButton onClick={() => renderSwitch('1')}>Galeria 1</GalleryButton>
                            :<></>
                        }
                        { gallery2 !== '' ?
                            <GalleryButton onClick={() => renderSwitch('2')}>Galeria 2</GalleryButton>
                            :<></>
                        }
                        { gallery3 !== '' ?
                            <GalleryButton onClick={() => renderSwitch('3')}>Galeria 3</GalleryButton>
                            :<></>
                        }
                        { gallery4 !== '' ?
                            <GalleryButton onClick={() => renderSwitch('4')}>Galeria 4</GalleryButton>
                            :<></>
                        }
                        { gallery5 !== '' ?
                            <GalleryButton onClick={() => renderSwitch('5')}>Galeria 5</GalleryButton>
                            :<></>
                        }
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
                            transitionSpeed={2}
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