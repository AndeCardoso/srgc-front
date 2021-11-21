import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/Layout';
import { ResetCss } from './ResetCss';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '40px',
  transition: transitions.FADE
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <ResetCss />
      <Layout />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);