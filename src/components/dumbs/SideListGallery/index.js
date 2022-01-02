import { useEffect, useState } from "react";
import { useInfos } from "../../../hooks/infos-hooks";

import api, {BASE_API} from "../../../services/api";
import { GalleryButton } from "../Button";
import { Gallery } from "../Gallery";

import * as S from './styled';

export const SideListGallery = () => {
  const [state,] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [gallery, setGallery] = useState([]);
  
  const { infosState } = useInfos();

  const changeActivate = (value) => {
    const nValue = value + '';
    for(const index in state) {
      index === nValue ? state[index] = true : state[index] = false;
    }
  }

  const renderSwitch = async (value) => {
    setGallery([]);
    changeActivate(value -1);
    await api.get(`/gallery/gallery${value}`)
    .then(response => response.data.images.map((path) => {
        return setGallery(events => [...events, {
            src: `${BASE_API}/public/${path}`
        }])
    }))
  }

  useEffect(() => {
    const changeActivate = (value) => {
      const nValue = value + '';
      for(const index in state) {
        index === nValue ? state[index] = true : state[index] = false;
      }
    }
    const renderSwitch = async (value) => {
    setGallery([]);
    changeActivate(value -1);
    await api.get(`/gallery/gallery${value}`)
    .then(response => response.data.images.map((path) => {
        return setGallery(events => [...events, {
            src: `${BASE_API}/public/${path}`
        }])
    }))
  }
    renderSwitch('1');
  }, [state])

  return (
    <S.Container>
      <S.SideList>
        { 
          infosState.galleryTitle[0] !== '' ?
          <GalleryButton state={state[0]} onClick={() => renderSwitch('1')}>{infosState.galleryTitle[0]}</GalleryButton>
          :<></>
        }
        { 
          infosState.galleryTitle[1] !== '' ?
          <GalleryButton state={state[1]} onClick={() => renderSwitch('2')}>{infosState.galleryTitle[1]}</GalleryButton>
          :<></>
        }
        { 
          infosState.galleryTitle[2] !== '' ?
          <GalleryButton state={state[2]} onClick={() => renderSwitch('3')}>{infosState.galleryTitle[2]}</GalleryButton>
          :<></>
        }
        { 
          infosState.galleryTitle[3] !== '' ?
          <GalleryButton state={state[3]} onClick={() => renderSwitch('4')}>{infosState.galleryTitle[3]}</GalleryButton>
          :<></>
        }
        { 
          infosState.galleryTitle[4] !== '' ?
          <GalleryButton state={state[4]} onClick={() => renderSwitch('5')}>{infosState.galleryTitle[4]}</GalleryButton>
          :<></>
        }
      </S.SideList>
      <Gallery images={gallery} />
    </S.Container>
  )
}
