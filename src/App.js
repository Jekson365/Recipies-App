import styled from 'styled-components'
import { Home } from './pages/Home';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Router } from './pages/Router';

function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Router />
      </HashRouter>
    </>
  );
}

export default App;
