import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/Layout';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { InfosProviders } from './providers/infos-provider';

const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '40px',
  transition: transitions.FADE
}

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
      <InfosProviders>
        <Layout />
      </InfosProviders>
    </AlertProvider>,
  document.getElementById('root')
);