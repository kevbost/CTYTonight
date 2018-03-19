import React from 'react'
import { captureStatus, getLoadingStatus } from 'redux-thunk-status'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { submitRequest } from './actions'

class Viewer extends React.Component {
  constructor( props ){
    super( props )
    autoBind( this )
  }

  componentDidMount() {
    console.log(this.props)
    this.props.send_request('avl', 'thisweek', true);
  }

  render() {
    const { responseData, isLoading } = this.props

    const EventItem = ( event ) => {

      return (
        <div className="event">
          <div className="title">{event.event.title}</div>
          <div className="description">{event.event.description}</div>
          <hr />
        </div>
      )
    }

    return (
      <div>
        {Object.keys(responseData).length ?
          Object.keys(responseData).map( item => {
            return (
              <p>{item}</p>
            )
          }) : <p>{'L O A D I N G'}</p>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    responseData: state.viewer.responseData,
    isLoading: getLoadingStatus( 'submit_request' )( state )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    send_request: ( cty, timespan, presort ) => {
      dispatch( captureStatus( 'submit_request', submitRequest( cty, timespan, presort ) ) )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Viewer )
