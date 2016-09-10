module.exports = {
  roomA: {
    north: 'wall',
    east: 'roomB',
    south: 'roomC',
    west: 'wall'
  },
  roomB: {
    north: 'wall',
    east: 'wall',
    south: 'roomD',
    west: 'roomA'
  },
  roomC: {
    north: 'roomA',
    east: 'roomD',
    south: 'roomE',
    west: 'wall'
  },
  roomD: {
    north: 'roomB',
    east: 'wall',
    south: 'roomF',
    west: 'roomC'
  },
  roomE: {
    north: 'roomC',
    east: 'roomF',
    south: 'wall',
    west: 'wall'
  },
  roomF: {
    north: 'roomD',
    east: 'wall',
    south: 'wall',
    west: 'roomE'
  }
};
