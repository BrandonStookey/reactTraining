const React = require('react');
const ReactDOM = require('react-dom');

const App = () => {
  return(
    <div className= 'app-container'> 
      <div className= 'home-info'>
        <h1 className = 'title'> Stookey's Video </h1>
        <input className= 'search' type= 'text' placeholder= 'search' />
        <button className = 'browse-all'> or Browse All </button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
