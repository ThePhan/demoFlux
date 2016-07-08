// AppStore.js
import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../contants/contants';
import objectAssign from 'react/lib/Object.assign';
import EventEmitter from 'events'.EventEmitter;
import { EventEmitter } from 'events'
import _ from 'lodash'

export default _.extend({}, EventEmitter.prototype, {

  // Initial data
  var CHANGE_EVENT = 'change';
  var listProducts={
    item:[]
  };
  addItem:function(){

  },
  editItem:function(){

  },
  delItem:function(){

  },
  delCart:function(){

  },
  addCart:function(){

  }
  // Emit Change event
  AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
       case appConstants.ADD_ITEM:
           addItem(action.data);
           Store.emit(CHANGE_EVENT);``
           break;
       case appConstants.REMOVE_ITEM:
  });
  emitChange: function(){
    this.emit('change')
  },

  // Add change listener
  addChangeListener: function(callback){
    this.on('change', callback)
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback)
  }

})
