import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/Layout';
import { ResetCss } from './ResetCss';

ReactDOM.render(
  <React.StrictMode>
    <ResetCss />
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);