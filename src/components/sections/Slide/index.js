import { useEffect, useState } from 'react';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import api from '../../../services/api';

import * as S from './styled';

export const Slide = () => {
  const [ paths, setPaths] = useState([]);

  const images = paths.map((path) => ({
    src: `http://localhost:5000/public/${path}`
  }));

  const getPaths = async () => {
    await api.get('/slide')
    .then(response => {
      response.data.data.map((path) => {return setPaths(events => [...events, path])});
    })
    .catch(err =>
      console.log(err)
    )
  }

  useEffect(() => {
    getPaths();
  }, [])

  return (
    <S.Container>
      <Carousel
        images={images}
        autoPlayInterval={4000}
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