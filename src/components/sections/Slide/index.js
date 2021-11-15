import { useEffect, useState } from 'react';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import api from '../../../services/api';

import * as S from './styled';

export const Slide = () => {
  const imagesDog = [910, 900, 700, 600, 500].map((size) => ({
    src: `https://placedog.net/${size}/${size}`
  }));
  const [ images, setImages] = useState('');

  useEffect(() => {
    const chargeSlide = async () => {
      await api.get('/slide')
      .then( response => {
        console.log(response)
        }
      )
      .catch(err =>
        console.log(err)
        )
    }
    chargeSlide();
  }, [])
  return (
    <S.Container>
      <Carousel
        images={imagesDog}
        autoPlayInterval={3000}
        canAutoPlay={true}
        isAutoPlaying={true}
        hasDotButtons={'bottom'}
        hasLeftButtonAtMax={false}
        isLoop={true}
        hasTransition={true}
        transitionSpeed={1}
        hasThumbnails={false}
        hasIndexBoard={false}
        hasSizeButton={false}
        hasRightButton={false}
        hasLeftButton={false}
        shouldSwipeOnMouse={false}
      />
    </S.Container>
  );
}