import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
