// AppStore.js
import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../contants/contants';
import objectAssign from 'object-assign';
import EventEmitter from 'events'.EventEmitter;
import _ from 'lodash'



// Initial data
var CHANGE_EVENT = 'change';

var listProducts = {};

addItem: function(text) {
        var id = new Date.getTime();
        listProducts[id] = {
            id: id,
            text: text
        }
    },
    editItem: function() {

    },
    delItem: function() {

    },
    delCart: function() {

    },
    addCart: function() {

    }
var ShopStore = objectAssign({}, EventEmitter.prototype, {

    getAll: function() {
        return listProducts;
    },
    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },


    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text;
    switch (action.actionType) {
        case appConstants.ACTION_ADD_ITEM:
            text = action.text.trim();
            if (text != '') {
                addItem(action.data);
                Store.emit(CHANGE_EVENT);
            }
            break;
        case appConstants.ACTION_DELETE_ITEM:
            deleteItem(action.id);
            Store.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});
module.exports = ShopStore;
