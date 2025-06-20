import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
//! import the CDN LINK for Bootstrap HERE 
import 'bootstrap/dist/css/bootstrap.css';
//!Package in React-Router-Dom that allows us to use the react-router to navigate through our components 
import { BrowserRouter } from "react-router-dom";
import {StoreProvider} from "./storContext.jsx"


createRoot(document.getElementById('root')).render(
 <StoreProvider>
  <StrictMode>
     <BrowserRouter>
           <App />
     </BrowserRouter>
  </StrictMode>
  </StoreProvider>
);
