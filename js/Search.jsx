const React = require('react')
const ShowCard = require('./ShowCard') 
const { object } = React.PropTypes
const Header = require('./Header')
// const ReactPullToRefresh = require('react-pull-to-refresh')
// https://www.npmjs.com/package/react-pull-to-refresh
const PullToRefresh = require('./PullToRefresh')
const ExampleApp = require('./iscrollTest')


const Search = React.createClass({
  getInitialState () {
    return{
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  },
  render () {
    return (
      <div className='container'>
        <Header 
          handleSearchTermChange={this.handleSearchTermChange} 
          searchTerm={this.state.searchTerm} 
          showSearch />

        <ExampleApp />

        <div className='shows'>
          {this.props.route.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            })
            .map((show) => {
            return (
              <ShowCard show={show} key={show.imdbID} />
            )
          })}
        </div>  
      </div>
    )
  }
})

module.exports = Search
