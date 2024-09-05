import React, { Component } from 'react';
import SearchHistory from '../components/SearchHistory';

export default class History extends Component {
  state = {
    history: [],
  };

  componentDidMount() {
    this.loadSearchHistory();
  }

  loadSearchHistory = () => {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    this.setState({ history });
  };

  handleCitySelect = (city) => {
    console.log('Selected city:', city);
  };

  render() {
    return (
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-light mb-6">Search History</h1>
        <SearchHistory history={this.state.history} onCitySelect={this.handleCitySelect} />
      </div>
    );
  }
}