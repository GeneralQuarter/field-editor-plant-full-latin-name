import { GlobalStyles } from '@contentful/f36-components';
import { SDKProvider } from '@contentful/react-apps-toolkit';
import { i18n } from '@lingui/core';
import { createRoot } from 'react-dom/client';
import App from './App';

// TEMP FIX: lingui complains its not activated when duplicating plant card
i18n.activate('en-US');

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <SDKProvider>
    <GlobalStyles />
    <App />
  </SDKProvider>,
);
