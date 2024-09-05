import React, { Component } from "react";

export default class SearchHistory extends Component {
  render() {
    const { history, onCitySelect } = this.props;

    return (
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-light mb-4">Search History</h2>
        <ul className="space-y-2">
          {history.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => onCitySelect(item)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
