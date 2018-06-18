import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { ParallaxProvider } from 'react-scroll-parallax';




// <ParallaxProvider>
// <App />
// </ParallaxProvider>

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
