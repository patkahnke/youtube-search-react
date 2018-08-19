import React from 'react';
import { render } from "react-dom";
import './css/style.css';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

render(<Router />, document.querySelector("#root"));

registerServiceWorker();
