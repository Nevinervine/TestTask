import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import './style/header.css';
import './style/footer.css';

import './js/header.js';

import NameForm from './react/login';
import Cart from './react/card';
import Validation from './react/validation';
import SimpleSlider from './react/slider';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <NameForm password={'123'} login={'login'} />
  </React.StrictMode>,
  document.getElementById('loginbuttons')
);


ReactDOM.render(
  <React.StrictMode>
    <Cart />
  </React.StrictMode>,
  document.getElementById('card')
);

ReactDOM.render(
  <React.StrictMode>
    <Validation />
  </React.StrictMode>,
  document.getElementById('validation')
);


ReactDOM.render(
  <React.StrictMode>
    <SimpleSlider />
  </React.StrictMode>,
  document.getElementById('slider__main')
);



reportWebVitals();
