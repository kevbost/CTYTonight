import React from 'react'
import { captureStatus, getLoadingStatus } from 'redux-thunk-status'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { submitRequest } from './actions'
import axios from 'axios'

class Viewer extends React.Component {
  constructor( props ){
    super( props )
    autoBind( this )
  }

  componentWillMount() {
    this.props.send_request('avl', 'thisweek', true);
  }

  componentDidMount(){
    axios.get('/api/hello').then(()=>{
      console.log('something')
    })
  }

  render() {
    const { responseData, isLoading } = this.props

    const EventItem = ( props ) => {
      const { event: { title, description, venue } } = props
      return (
        <div className="event">
          <div className="venue">{venue.name}</div>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <hr />
        </div>
      )
    }

    const DaySection = ( props ) => {
      const { day, events } = props
      return (
        <div>
          <h1>{day}</h1>
          {events.map( event => {
            return (
              <EventItem key={event._id} event={event}/>
            )
          })}
        </div>
      )
    }

    return (
      <div>
        {Object.keys(responseData).length ?
          Object.keys(responseData).map( item => {
            return (
              <div key={item}>
                <DaySection day={item} events={responseData[item]} />
              </div>
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
