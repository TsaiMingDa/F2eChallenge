const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'app',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y:1500
      },
      // debug: true,
    }
  },
  scene: [ gameStart, gamePlay]
};
const game = new Phaser.Game(config);
