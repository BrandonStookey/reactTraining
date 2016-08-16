const React = require('react')
const { object } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    params: object.isRequired
  },
  render () {
    const params = this.props.params || {}
    const { title, description, year, poster, trailer } = params
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='branding'>Stookey's Video</h1>
        </header>
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2> 
        </div>
      </div>    
    )
  }
})

module.exports = Details
