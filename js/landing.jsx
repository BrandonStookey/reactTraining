const React = require('react')
//Link let's you link between different pages from react router, 
  //react router is inside of ClientApp 
const { Link } = require('react-router')

const Landing = () => {
  return (
    <div className='home-info'>
      <h1 className='title'> Stookey's Video </h1>
      <input className='search' type='text' placeholder='Search...' />
      <Link to='/search' className='browse-all'> or Browse All </Link>
    </div>
  )
}

module.exports = Landing
