var AppDispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var axios=require("axios");
var _ = require('lodash');
var data = {};


function loadData(data) {
  return axios(data);

}
var imageGallery = _.assign({}, EventEmitter.prototype, {
  _store:{},
  emitChange: function() {
    this.emit('change');
    },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(action) {
  console.log('hee');
  switch(action.actionType) {
   
    case "RECEIVE_DATA":
      loadData(action.data)
        .then(function(a){
          imageGallery._store = a.data;
          imageGallery.emitChange();
        },function(error){
          console.log(error);
        })
      break;

    default:
      return true;
  }

});

module.exports = imageGallery ;