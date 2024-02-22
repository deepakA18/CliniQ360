import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx'
import './index.css'

const theme = createTheme({
  palette: {
    background: {
      default: '#F4F6FA', // Set the background color for the body
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
     <ThemeProvider theme={theme}>
      <CssBaseline />
    <App /> 
    </ThemeProvider>
  </React.StrictMode>,
)
