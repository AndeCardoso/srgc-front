import { useState, useEffect } from 'react';
import Carousel from 'react-gallery-carousel';

import { GalleryButton } from '../../dumbs/Button';

import api from '../../../services/api';

import * as S from './styled';

export const Galleries = () => {
    const [sectionTitle, setSectionTitle] = useState('');
    const [galleryTitles, setGalleryTitles] = useState([]);
    const [gallery, setGallery] = useState([]);


    const renderSwitch = async (value) => {
        setGallery([]);
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
      .catch((error) => {
        console.log(error)
        return alert.show('Erro inesperado aconteceu!', {type: 'error'});
      })
    }

    const getGalleriesTitle = async () => {
        await api.get(`/galleries-titles`)
        .then(response => {
            console.log(response.data)
            response.data.data.map((title) => {
                return setGalleryTitles(events => [...events, title])
            })
        })
        .catch((error) => {
            console.log(error)
            //return alert.show('Erro inesperado aconteceu!', {type: 'error'});
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
                            <GalleryButton onClick={() => renderSwitch('1')} className='first'>{galleryTitles[0]}</GalleryButton>
                            :<></>
                        }
                        { galleryTitles[1] !== '' ?
                            <GalleryButton onClick={() => renderSwitch('2')}>{galleryTitles[1]}</GalleryButton>
                            :<></>
                        }
                        { galleryTitles[2] !== '' ?
                            <GalleryButton onClick={() => renderSwitch('3')}>{galleryTitles[2]}</GalleryButton>
                            :<></>
                        }
                        { galleryTitles[3] !== '' ?
                            <GalleryButton onClick={() => renderSwitch('4')}>{galleryTitles[3]}</GalleryButton>
                            :<></>
                        }
                        { galleryTitles[4] !== '' ?
                            <GalleryButton onClick={() => renderSwitch('5')}>{galleryTitles[4]}</GalleryButton>
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