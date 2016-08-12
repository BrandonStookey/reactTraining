const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')

const { Router, Route, IndexRoute, hashHistory } = require('react-router')

//IndexRoute allows you to have a landing page
//Router is your route and it needs a hashHistory
  //hashHistory allows the router to go back and forth between different views
  //once you deploy though it no longer uses hashHistory, it uses browser history
//Route is the routes that you want to route to, it is usually self closing like so <Route path='SOMEPATH' />
  //Route can also not be self closing, in this case, it is then using props.children, an example of this can
    //When it is not self closing, it is consider the top level route
      //the idea of nested routes is you can share codes 
      //be found in the Layout.jsx file
      //props.children gives access to children component...

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Layout} >
        <IndexRoute component={Landing} />
        <Route path='/search' component={Search} />
      </Route>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
