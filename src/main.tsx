import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme,ThemePanel } from "@radix-ui/themes";
import './index.css';
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
         <App />
        
      </Theme>
    </Provider>
    	
   
  </BrowserRouter>,
)
