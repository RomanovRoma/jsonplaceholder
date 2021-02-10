import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage, UsersPage } from '../pages'
import './app.css'

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/users" component={UsersPage} exact />
    </Switch>
  )
}

export default App