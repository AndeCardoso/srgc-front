import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { useInfos } from '../../../hooks/infos-hooks';

import { BASE_API } from '../../../services/api';

import * as S from './styled';

export const Slide = () => {
  const { infosState } = useInfos();

  const images = infosState.slide.map((path) => ({
    src: `${BASE_API}/public/${path}`
  }));

  return (
    <S.Container>
      <Carousel
        images={images}
        autoPlayInterval={4000}
        canAutoPlay={true}
        isAutoPlaying={true}
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