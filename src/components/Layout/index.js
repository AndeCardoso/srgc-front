import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

import { ResetCss } from '../../ResetCss';

import { useInfos } from '../../hooks/infos-hooks';

import * as S from './styled';

export const Layout = () => {
  const { infosState, getSettings, getSocialMedias, getTheme, getSectionTitle, getSlide, getGalleries, getGalleriesTitles } = useInfos();
  
  const getAll = async () => {
    getSettings();
    getSocialMedias();
    getGalleries();
    getGalleriesTitles();
    getSectionTitle();
    getTheme();
    getSlide();
  }
  
  useEffect(() => {
    getAll();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={infosState.theme}>
      <ResetCss />
      <S.Layout>
        <Header />
        <Main />
        <Footer />
      </S.Layout>
    </ThemeProvider>
  );
}
