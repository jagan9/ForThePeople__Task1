import React from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SingleBlog from './components/SingleBlog'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Data from './data';

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/blog/:id">
            <SingleBlog Data={Data} />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
