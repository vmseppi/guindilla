import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
)
