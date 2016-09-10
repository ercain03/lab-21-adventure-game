'use strict';

describe('testing the GameController', function(){
  beforeEach(()=>{
    angular.mock.module('gameApp');
    angular.mock.inject(($controller)=>{
      this.gameCtrl = $controller('GameController');
    });
  });

  beforeEach(()=>{
    this.gameCtrl.history = [];
    this.gameCtrl.player = {
      name: 'Cuba Gooding',
      location: 'roomB',
      chest: []
    };
  });

  it('the player should be able to move direction and collect items', ()=>{
    this.gameCtrl.moveDirection('south');
    expect(this.gameCtrl.player.location).toBe('roomD');
    expect(this.gameCtrl.player.chest[0]).toContain('Silk');
  });

  it('should smack a wall', ()=>{
    this.gameCtrl.moveDirection('north');
    expect(this.gameCtrl.player.location).toBe('roomB');
    expect(this.gameCtrl.player.chest.length).toBe(0);
    expect(this.gameCtrl.history[0]).not.toContain('Chest');
  });
});
