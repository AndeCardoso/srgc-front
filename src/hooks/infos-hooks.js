import { useContext } from "react";
import { InfosContext } from "../providers/infos-provider";

export const useInfos = () => {
    const {
      infosState,
      getSettings,
      getSlide,
      getTheme,
      getSectionTitle,
      getGalleries,
      getGalleriesTitles,
      getImages,
      getSocialMedias
    } = useContext(
      InfosContext
    );

    return {
      infosState, getSettings, getSlide, getTheme, getSectionTitle, getGalleries, getGalleriesTitles, getImages, getSocialMedias
    };
};