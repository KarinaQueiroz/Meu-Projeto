import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { ParallaxProvider } from 'react-scroll-parallax';
import {BrowserRouter as Router} from 'react-router-dom'




// <ParallaxProvider>
// <App />
// </ParallaxProvider>

ReactDOM.render(
    (
        <Router>
            <App />
        </Router>
    )       
    
,document.getElementById('root'));
registerServiceWorker();
