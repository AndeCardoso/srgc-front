import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/Layout';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '40px',
  transition: transitions.FADE
}

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
      <Layout />
    </AlertProvider>,
  document.getElementById('root')
);