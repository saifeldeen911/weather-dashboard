import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    return (
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-light mb-4">User Profile</h2>
        <div className="space-y-2 text-gray-600">
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Location: New York, USA</p>
          <p>Preferred Units: Celsius</p>
        </div>
      </div>
    );
  }
}
