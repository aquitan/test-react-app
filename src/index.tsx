import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './hooks/useAuthContext';
import { Provider } from 'react-redux'
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './hooks/useThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <Provider store={store}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </Provider>
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);