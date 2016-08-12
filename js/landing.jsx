const React = require('react')
const { Link } = require('react-router')

const Landing = () => {
  return (
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'> Stookey's Video </h1>
        <input className='search' type='text' placeholder='Search...' />
        <Link to='/search' className='browse-all'> or Browse All </Link>
      </div>
    </div>
  )
}

module.exports = Landing
