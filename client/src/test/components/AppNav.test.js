import React from 'react'
import App from '../../views/app'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../../store'
import renderer from 'react-test-renderer'

const target = document.querySelector( '#root' )

const Wrapper = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    target
  )
}

describe( 'core tests', () => {
  test( 'renders without crashing', () => {
    const tree = renderer
      .create( <Wrapper /> )
      .toJSON()
    expect( tree ).toMatchSnapshot()
  })
})
