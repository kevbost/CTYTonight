import React from 'react'
import autoBind from 'react-autobind'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

class App extends React.Component {
  constructor( props ){
    super( props )
    this.state = {
      response: ''
    }
    autoBind( this )
  }

  componentDidMount() {
    this.callApi()
      .then( res => {
        return this.setState({
          response: res.data.express
        })
      })
      .catch( err => { return console.log( err ) }) // eslint-disable-line
  }

  callApi() {
    return axios.get( '/api/hello' )
      .then( response => {
        return response
      })
      .catch( err => {
        console.log( err ) // eslint-disable-line
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{'Welcome to React'}</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    )
  }
}

export default App
