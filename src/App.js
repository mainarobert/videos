import React, { Component } from 'react';
import Search from './components/Search';
import Youtube from './api/Youtube';

class App extends Component {
  state = {
    videos: []
  }

  // callled when user submits search form
  // fetching data is asynchronous we use either promises or asyn await
  onTermSubmit = async term => {
    // Youtube is an instance of axios since its pre-configured in Youtube.js
    // '/search' is the path we want to make get request to
    const response = await Youtube.get('/search', {
      params: {
        // q is a property based off youtube api doc
        q: term
      }
    })
    
    this.setState({videos: response.data.items})
    console.log(response.data.items)
  }

  render() {
    return (
      <div>
        <Search onFormSubmit= {this.onTermSubmit} />    {/* pass onTermSubmit callback as props */}
        found {this.state.videos.length} videos
      </div>
    )
  }
}

export default App

