import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';

export default class Profile extends Component {
  render() {
    return (
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-light mb-6">User Profile</h1>
        <UserProfile />
      </div>
    );
  }
}