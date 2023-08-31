import React from 'react';
import ReactDOM from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import App from './App';
import './index.css';
import { startMSW } from './mocks/browser';
import Theme, { theme } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
startMSW();

/**
 * Root do projeto, aqui é o ponto de entrada de toda a aplicação
 * está distribuindo os temas configurados à todo o projeto
 *
 */
root.render(
  <React.StrictMode>
    <Theme>
      <SkeletonTheme baseColor={theme.colors.neutra5} highlightColor={theme.colors.white}>
        <App />
      </SkeletonTheme>
    </Theme>
  </React.StrictMode>,
);
