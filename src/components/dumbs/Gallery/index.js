import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import * as S from './styled';

export const Gallery = ({ images }) => {
  return (
    <S.CarouselContainer>
      <Carousel
        images={images}
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
  )
}