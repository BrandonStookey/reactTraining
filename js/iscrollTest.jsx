const React = require('react')
const ReactPullToRefresh = require('react-pull-to-refresh')
const ReactIScroll = require('react-iscroll').default
const iScroll = require('iscroll/build/iscroll-probe')

const ExampleApp = React.createClass({  
  options:{
    mouseWheel: true,
    scrollbars: true,
    freeScroll: true,
    invertWheelDirection: true,
    momentum: false,
  },
  render () {
    console.log('ReactIScroll: ', ReactIScroll);
    return(
          <ReactIScroll iScroll={iScroll}
                        options={this.options}
                        style={{ marginTop: '200px' }}>       
            <button> Previous </button>
          </ReactIScroll>
    )
  }
})

module.exports = ExampleApp
