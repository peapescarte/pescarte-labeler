import React from 'react';
import ReactDOM from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import App from './App';
import './index.css';
import { startMSW } from './mocks/browser';
import reportWebVitals from './reportWebVitals';
import Theme, { theme } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
startMSW();
root.render(
  <React.StrictMode>
    <Theme>
      <SkeletonTheme baseColor={theme.colors.neutra5} highlightColor={theme.colors.white}>
        <App />
      </SkeletonTheme>
    </Theme>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
