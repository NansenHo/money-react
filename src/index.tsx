import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'reset.scss';

// 入口文件在页面刷新后，必然执行
console.log('页面刷新啦')

ReactDOM.render(
  // <React.StrictMode> 严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
