import styled from 'styled-components'
import { Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './pages/Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  );
}

export default App;
