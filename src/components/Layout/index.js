import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

import api from '../../services/api';

import * as S from './styled';

export const Layout = () => {
  const [ enterpriseName, setEnterpriseName ] = useState('');
  const [ theme, setTheme ] = useState({
    primary: '',
    secondary: ''
  });

  const token = '$2b$10$imE3ylmcaAHEfmX/VjTHiuCZ1V1WIH227Utj.eSwjWDinntWEfMeq';

  useEffect( async () => {
    api.defaults.headers.token =  token;
    const response = await api.get('/settings');
    setEnterpriseName(response.data.settings.enterpriseName);
  }, []);
  
  useEffect( async () => {
    api.defaults.headers.token =  token;
    const response = await api.get('/theme');
    setTheme({
      primary: response.data.theme.primary,
      secondary: response.data.theme.secondary
    })
  }, []);

  document.title = enterpriseName;
  return (
    <ThemeProvider theme={theme}>
      <S.Layout>
        <Header />
        <Main />
        <Footer />
      </S.Layout>
    </ThemeProvider>
  );
}
