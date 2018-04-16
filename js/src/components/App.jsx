import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from '../routes/routes.js'

import 'bootstrap/scss/bootstrap.scss'

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route path='/:permalink' component={routes.Determine} />
        <Route path='/' component={routes.Homepage} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default App