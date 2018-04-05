import React from 'react'

import { Switch, Route } from 'react-router-dom'

import routes from '../routes/routes.js'

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route to='/' component={routes.Homepage} />
      </Switch>
    )
  }
}

export default App