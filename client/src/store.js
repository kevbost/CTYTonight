// REDUX THROWAWAY
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducer'

export const history = createHistory()

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      routerMiddleware( history ),
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => { return f }
  )
)

export default store
