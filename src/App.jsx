import React, { Component } from 'react';
import './styles.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
    console.log("this.state", this.state);
    const BASE_URL = "https://api.twitter.com/1.1/users/search.json?q=";
    const QUERY = this.state.query;
    const FETCH_URL = BASE_URL + QUERY;
    console.log("FETCH_URL", FETCH_URL);
  }

  render() {
    return(
      <div className="App">

        <div className="App-title">Twitter Profiler</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a Twitter ID"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event =>{
                if(event.key === 'Enter'){
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Dev Picture</div>
          <div>Dev Name</div>
        </div>
        <div>
          <div className="Repos">
            Repos by this Dev
          </div>
        </div>

      </div>
    )
  }
}

export default App;
