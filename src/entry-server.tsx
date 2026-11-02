import { renderToString } from 'react-dom/server';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import App from './App';

export interface RenderResult {
  html: string;
  helmet?: HelmetServerState;
}

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <App initialPath={url} />
    </HelmetProvider>
  );

  return {
    html,
    helmet: helmetContext.helmet,
  };
}
