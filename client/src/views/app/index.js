import React from 'react'
import { Route } from 'react-router-dom'
import Viewer from '../../modules/viewer'
import AppNav from '../../components/AppNav'

const App = () => {
  return (
    <div>
      <AppNav />

      <main className="container">
        <Route exact path="/" component={Viewer} />
      </main>
    </div>
  )
}

export default App