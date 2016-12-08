var AppDispatcher = require("../dispatcher/dispatcher");
var DoneActions = {
 receiveData: function(data) {
 	AppDispatcher.dispatch({
      actionType:"RECEIVE_DATA",
      data: data
    })
  }

};

module.exports = DoneActions;