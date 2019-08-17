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
      debug: true,
    }
  },
  scene: [ gamePlay, gameStart]
};
const game = new Phaser.Game(config);
