import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import * as actions from '../../../modules/api/actions'
import {
  _staticApiResponse,
  _expectedActions
} from './fixtures'

const middlewares = [ thunk ]
const mockStore = configureMockStore( middlewares )



describe( 'async actions', () => {

  test( 'should handle submitDataApiForm', () => {
    const mock = new MockAdapter( axios )
    mock.onGet( 'https://api.gvltonight.com/v1/gvl/thisweek' ).reply( 200, _staticApiResponse )
    const store = mockStore({
      api: {
        isLoading: false,
        responseData: {}
      }
    })
    store.dispatch( actions.submitRequest( 'gvl', 'thisweek' ) )
      .then( () => {
        expect( store.getActions() ).toEqual( _expectedActions )
      })
  })
})