import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './App';
import './styles.css';

const root = document.getElementById('root')!;
render(() => (
  <Router>
    <App />
  </Router>
), root);
