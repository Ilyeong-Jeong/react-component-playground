import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Snackbar from '@/components/Snackbar';
import { Color } from '@material-ui/lab/Alert';

function App() {
  // Snackbar
  const [textAlert, setTextAlert] = useState<string>('');
  const [severity, setSeverity] = useState<Color | undefined>(undefined);
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const openSnackbar = () => {
    setTextAlert('Snackbar');
    setSeverity('success');
    setOpenAlert(true);
  };

  const closeSnackbar = () => {
    setOpenAlert(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React Component Playground</p>

        <p>
          <button type="button" onClick={() => openSnackbar()}>
            Snackbar Open
          </button>
        </p>

      </header>
      <Snackbar
        open={openAlert}
        text={textAlert}
        severity={severity}
        closeAlert={closeSnackbar}
      />
    </div>
  )
}

export default App
