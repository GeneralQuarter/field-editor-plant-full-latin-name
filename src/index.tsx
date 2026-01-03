import { GlobalStyles } from '@contentful/f36-components';
import { SDKProvider } from '@contentful/react-apps-toolkit';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { loadCatalog } from './i18n';

await loadCatalog('en-US');

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <SDKProvider>
    <I18nProvider i18n={i18n}>
      <GlobalStyles />
      <App />
    </I18nProvider>
  </SDKProvider>,
);
