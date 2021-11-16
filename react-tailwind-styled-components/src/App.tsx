import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import styled from 'styled-components';
import tw from 'twin.macro';

const Button = styled.button`
  ${tw`w-24 h-8 bg-black text-white text-base`}
`;

const DaisyButton = styled.button`
  ${tw`btn btn-primary`}
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <Button>Tailwind</Button>
          <DaisyButton>daisyUI Button</DaisyButton>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default App
