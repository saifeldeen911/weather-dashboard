import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import History from "./pages/History";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
              <ul className="flex space-x-6 py-4">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-gray-900">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/history"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    History
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
