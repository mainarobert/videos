import React, { Component } from 'react';
import Search from './components/Search';
import Youtube from './api/Youtube';

class App extends Component {
  //callled when user submits search form
  onTermSubmit = (term) => {
    // Youtube is an instance of axios since its pre-configured in Youtube.js
    // '/search' is the path we want to make get request to
    Youtube.get('/search', {
      params: {
        //q is a property based off youtube api doc
        q: term
      }
    })
  }

  render() {
    return (
      <div>
        <Search onFormSubmit= {this.onTermSubmit} />    {/* pass onTermSubmit callback as props */}
      </div>
    )
  }
}

export default App

