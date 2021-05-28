import React from 'react';
import '../Styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch,} from 'react-router-dom';
import HomePage from '../Components/HomePage.js';
import AboutPage from '../Components/AboutPage.js';
import WorkPage from '../Components/WorkPage.js';
import ContactPage from '../Components/ContactPage.js';
import ErrorPage from '../Components/ErrorPage.js';

function App() {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/about' exact component={AboutPage}/>
            <Route path='/work'  exact component={WorkPage}/>
            <Route path='/contact'  exact component={ContactPage}/>
            <Route exact component={ErrorPage}/>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
