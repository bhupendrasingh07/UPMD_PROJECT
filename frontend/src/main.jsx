import React from 'react'
import ReactDOM from 'react-dom/client'
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import router  from "./routes.jsx";
// import { createRoot } from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <BrowserRouter>    
         <App></App>   
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
