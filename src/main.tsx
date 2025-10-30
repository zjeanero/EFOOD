import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import { Provider } from 'react-redux'
import { store } from './Store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <GlobalCss />
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
