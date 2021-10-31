import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import * as S from './styled';

export const Slide = () => {
  const images = [910, 900, 700, 600, 500].map((size) => ({
    src: `https://placedog.net/${size}/${size}`
  }));
  return (
    <S.Container>
      <Carousel
        images={images}
        autoPlayInterval={3000}
        canAutoPlay={false}
        isAutoPlaying={true}
        hasDotButtons={'bottom'}
        hasLeftButtonAtMax={false}
        isLoop={true}
        hasTransition={true}
        transitionSpeed={4}
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