import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import styled from 'styled-components';
import tw from 'twin.macro';

import Tab from './components/Tab';
import TabItem from './components/TabItem';

function App() {
  const [tab, setTab] = useState(0);

  const TabCenter = (
    <>
      <TabItem className="mr-8" active={tab === 0} onClick={() => setTab(0)}>1번</TabItem>
      <TabItem className="mr-8" active={tab === 1} onClick={() => setTab(1)}>2번</TabItem>
      <TabItem active={tab === 2} onClick={() => setTab(2)}>3번</TabItem>
    </>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tab className="w-full h-24 bg-transparent mb-10" target={tab} center={TabCenter} />
        <p>Hello Vite + React!</p>
      </header>
    </div>
  )
}

export default App
