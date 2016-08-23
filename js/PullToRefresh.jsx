const React = require('react')
const ReactPullToRefresh = require('react-pull-to-refresh')
// https://www.npmjs.com/package/react-pull-to-refresh

// hammerOptions={{
//   hammer:{
//     defaults:{
      // preset: [
      //   // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
      //   [RotateRecognizer, {enable: false}],
      //   [PinchRecognizer, {enable: false}, ['rotate']],
      //   [SwipeRecognizer, {direction: DIRECTION_ VERTICAL}],
      //   [PanRecognizer, {direction: DIRECTION_VERTICAL}, ['swipe']],
      //   [TapRecognizer],
      //   [TapRecognizer, {event: 'doubletap', taps: 1}, ['tap']],
      //   [PressRecognizer]
      // ]
//     }
//   }}

const PullToRefresh = React.createClass({  
  handleRefresh(resolve, reject) {
    console.log('resolve: ', resolve)
    console.log('reject: ', reject)
  // do some async code here 
    if (success) {
      resolve();
    } else {
      reject();
    }
  },
  render () {
    console.log('ReactPullToRefresh: ', ReactPullToRefresh.prototype.constructor.propTypes);
    return(
          <ReactPullToRefresh
            onRefresh={this.handleRefresh}
            style={{
              textAlign: 'center',
              marginTop: '200px'
            }}
            hammerOptions={{preset:[
              [Hammer.SwipeRecognizer, {direction: Hammer.DIRECTION_UP}]
              [Hammer.PanRecognizer, {direction: Hammer.DIRECTION_UP}, ['swipe']],
              ]
            }}>       
            <button> Previous </button>
          </ReactPullToRefresh>
    )
  }
})

module.exports = PullToRefresh
