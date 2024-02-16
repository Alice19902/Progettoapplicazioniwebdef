import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './views/App/App';
import {RMProvider} from "./components/Context/Context"

ReactDOM.render(

  <React.StrictMode>
      <RMProvider>
          <App />
      </RMProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
