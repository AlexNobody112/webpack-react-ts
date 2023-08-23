import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
