import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import JsonService from './services/json-service'
import { JsonServiceProvider } from './components/json-service-context'

const jsonService = new JsonService()

ReactDOM.render(
  <ErrorBoundry>
    <JsonServiceProvider value={jsonService}>
      <Router>
        <App />
      </Router>
    </JsonServiceProvider>
  </ErrorBoundry>,
  document.getElementById('root')
)