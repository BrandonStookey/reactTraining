const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = () => {
  return (
    <div className='container'>
      <div className='shows'>
        {data.shows.map((show) => {
          return (
            <ShowCard show={show} key={show.imdbID} />
          )
        })}
      </div>  
    </div>
  )

}

module.exports = Search
