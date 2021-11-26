import { useState, useEffect } from 'react';
import Carousel from 'react-gallery-carousel';
import { useAlert } from 'react-alert';

import { GalleryButton } from '../../dumbs/Button';

import api from '../../../services/api';

import * as S from './styled';

export const Galleries = () => {
    const [sectionTitle, setSectionTitle] = useState('');
    const [galleryTitles, setGalleryTitles] = useState([]);
    const [gallery, setGallery] = useState([]);

    const [state1, setState1] = useState('');
    const [state2, setState2] = useState('');
    const [state3, setState3] = useState('');
    const [state4, setState4] = useState('');
    const [state5, setState5] = useState('');

    const alert = useAlert();

    const changeActivate = (value) => {
        switch (value) {
            case '1': 
                setState1(true);
                setState2(false);
                setState3(false);
                setState4(false);
                setState5(false);
                break;
            case '2': 
                setState1(false);
                setState2(true);
                setState3(false);
                setState4(false);
                setState5(false);
                break;
            case '3': 
                setState1(false);
                setState2(false);
                setState3(true);
                setState4(false);
                setState5(false);
                break;
            case '4': 
                setState1(false);
                setState2(false);
                setState3(false);
                setState4(true);
                setState5(false);
                break;
            case '5': 
                setState1(false);
                setState2(false);
                setState3(false);
                setState4(false);
                setState5(true);
                break;
        }
    }

    const renderSwitch = async (value) => {
        setGallery([]);
        changeActivate(value);
        await api.get(`/gallery/gallery${value}`)
        .then(response => response.data.images.map((path) => {
            return setGallery(events => [...events, {
                src: `http://localhost:5000/public/${path}`
            }])
        }))
        
    }

    const getSectionTitle = async () => {
      await api.get('/section')
      .then(response => {
        return setSectionTitle(response.data.section.title);
      })
      .catch(() => {
        return alert.show('Erro inesperado aconteceu!', {type: 'error'});
      })
    }

    const getGalleriesTitle = async () => {
        await api.get(`/galleries-titles`)
        .then(response => {
            response.data.data.map((title) => {
                return setGalleryTitles(events => [...events, title])
            })
        })
        .catch(() => {
            return alert.show('Erro inesperado aconteceu!', {type: 'error'});
        })
    }

    useEffect(() => {
        getSectionTitle();
        getGalleriesTitle();
        renderSwitch('1');
    }, [])

    return (
        <S.Section>
            <S.Wrapper>
                <S.Title>{sectionTitle}</S.Title>
                <S.Container>
                    <S.SideList>
                        { galleryTitles[0] !== '' ?
                            <GalleryButton state={state1} onClick={() => renderSwitch('1')}>{galleryTitles[0]}</GalleryButton>
                            :<></>
                        }
                        { galleryTitles[1] !== '' ?
                            <GalleryButton state={state2} onClick={() => renderSwitch('2')}>{galleryTitles[1]}</GalleryButton>
                            :<></>
                        }
                        { galleryTitles[2] !== '' ?
                            <GalleryButton activate={state3} onClick={() => renderSwitch('3')}>{galleryTitles[2]}</GalleryButton>
                            :<></>
                        }
                        { galleryTitles[3] !== '' ?
                            <GalleryButton activate={state4} onClick={() => renderSwitch('4')}>{galleryTitles[3]}</GalleryButton>
                            :<></>
                        }
                        { galleryTitles[4] !== '' ?
                            <GalleryButton activate={state5} onClick={() => renderSwitch('5')}>{galleryTitles[4]}</GalleryButton>
                            :<></>
                        }
                    </S.SideList>
                    <S.CarouselContainer>
                        <Carousel
                            images={gallery}
                            autoPlayInterval={3000}
                            isAutoPlaying={true}
                            hasDotButtons={'bottom'}
                            isLoop={true}
                            hasTransition={true}
                            transitionSpeed={2}
                            hasThumbnails={true}
                            hasIndexBoard={false}
                            hasRightButton={false}
                            hasLeftButton={false}
                        />
                    </S.CarouselContainer>
                </S.Container>
            </S.Wrapper>
        </S.Section>
    );
}