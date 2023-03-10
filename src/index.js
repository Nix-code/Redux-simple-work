import React from 'react';
import ReactDOM from 'react-dom/client';
// here 
// provider provides us redux store to our react application
import { Provider } from 'react-redux';
// import store from './redux/store';
import store from './redux/store';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Provider store = {store}>
  <App />
  </Provider>
   
  </React.StrictMode>
);



