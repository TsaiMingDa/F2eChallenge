const gameStart = {
  key: 'gameStart',
  preload: function() {
// 載入資源
    this.load.image('hbg', './images/homeBg.png');
  },
  create: function() {
  // 資源載入完成，加入遊戲物件及相關設定
    this.hbg = this.add.sprite(400, 300, cw , ch, 'hbg');
    this.hbg.setInteractive();
    this.hbg.on('pointerdown', ()=>{
      this.scene.start('gamePlay');
   });
  },
  update: function() {
 // 遊戲狀態更新

  }
}