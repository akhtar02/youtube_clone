import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideo from "./RecommendedVideo";
import SearchPage from './SearchPage';
import ChannelRow from './ChannelRow';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    //BEM class naming convention
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app_page">
              <Sidebar />
             <SearchPage />
            </div>
          </Route>

          <Route path="/">
    
            <div className="app_page">
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>

        </Switch>
      </Router>






    </div>

  );
}

export default App;
