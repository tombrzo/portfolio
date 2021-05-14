import React from 'react';
import '../Styles/Page.css'
import {Route, Switch,} from 'react-router-dom';
import HomePage from '../Components/HomePage.js';
import AboutPage from '../Components/AboutPage.js';
import WorkPage from '../Components/WorkPage.js';
import ContactPage from '../Components/ContactPage.js';
import ErrorPage from '../Components/ErrorPage.js';

const Page = () => {
  return (
    <Switch>
    <Route path='/' exact component={HomePage}/>
    <Route path='/about' component={AboutPage}/>
    <Route path='/work' component={WorkPage}/>
    <Route path='/contact' component={ContactPage}/>
    <Route                component={ErrorPage}/>
    </Switch>

    
   );
}
 
export default Page;