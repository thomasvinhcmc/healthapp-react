import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import TopMyPage from './views/web1280topmy-page'
import MyRecord from './views/web1280my-record'
import Column from './views/web128-column'
// import Web390DrawrMenue from './views/web39-drawr-menue'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={TopMyPage} exact path="/"  />
        <Route component={TopMyPage} exact path="/my-page" />
        <Route component={MyRecord} exact path="/my-record" />
        <Route component={Column} exact path="/column" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
