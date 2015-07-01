// var Dispatcher = require('flux').Dispatcher;
//
// class AppDispatcher extends Dispatcher {
//   handleViewAction(action) {
//     this.dispatch({
//       source: 'VIEW_ACTION',
//       action: action
//     });
//   }
//
//   dispatch(obj) {
//     super.dispatch(obj);
//
//     console.log('DISPATCH CALLED: ' + JSON.stringify(obj));
//   }
// }
//
// console.log('TA MERE');
//
// var dispatcher = new AppDispatcher();
//
// module.exports = dispatcher;


var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
