import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
  }

  render(){
    return (
      <form
      onSubmit={(event) => {
          event.preventDefault();
          this.props.fetchWeather(this.state.term);
          this.setState({term: ''});
        }
       }
       className="input-group" >

        <input
          placeholder="Get a five-day forecast in your favorite city"
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})}
          className="form-control"
         />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
