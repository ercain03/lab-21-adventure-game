'use strict';

const angular = require('angular');
const gameApp = angular.module('gameApp');

gameApp.controller('GameController', ['$log', GameController]);

function GameController($log){
  this.history = [{id: 0, text: 'Get ready! you\'re about to embark on a treasure hunt with Jack Sparrow. Be sure to collect as much treasue as possible.'}];

  this.directions = ['north', 'south', 'east', 'west'];
  this.treasure = ['Gold', 'Silver', 'Diamonds', 'Gold Coin', 'Ruby', 'Pearl', 'Ivory', 'Silk'];

  this.player = {
    name: 'Jack Sparrow',
    location: 'roomA',
    chest: []
  };

  this.room = require('../lib/rooms.js');

  this.addToChest = function(){
    let addItem = this.treasure.pop();
    this.player.chest.push(addItem);
    return 'Arrgh you found ' + addItem;
  };

  this.moveDirection = function(direction){
    $log.debug('gameCrtl.moveDirection');
    if (this.room[this.player.location]){
      let currentLocation = this.room[this.player.location];
      $log.log('currentLocation', currentLocation);
      let nextRoom = currentLocation[direction];
      $log.log('nextRoom', nextRoom);
      if( nextRoom !== 'wall') {
        this.player.location = nextRoom;
        this.logHistory('you have entered '+ this.player.location + '.' + this.addToChest());
        return;
      }
      this.logHistory('Smack! straight into a wall');
    }
  };
  this.logHistory = function(info){
    this.history.push({id: this.history.length, text: `${this.player.name}, ${info}`});
  };
}
