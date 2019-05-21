import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import Contacts from './components/Contacts'

function Routing() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    );
  }
  export default Routing;