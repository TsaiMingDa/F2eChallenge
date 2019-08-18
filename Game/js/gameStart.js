const gameStart = {
  key: 'gameStart',
  preload: function() {
// 載入資源
    this.load.image('hbg', './images/homeBg.png');
    this.load.image('help', 'images/obj/help.png');
    this.load.image('helpInfo', 'images/helpInfo.png');
  },
  create: function() {
  // 資源載入完成，加入遊戲物件及相關設定
    this.hbg = this.add.tileSprite(400, 300, cw , ch, 'hbg');
    this.hbg.setInteractive();
    this.hbg.on('pointerdown', ()=>{
        this.scene.start('gamePlay');
    });
    this.help = this.add.sprite(680, 565, 'help');
    this.help.setScale(0.3);
    this.help.setInteractive();
    this.help.on('pointerdown', ()=>{
      this.helpInfo = this.add.image(cw / 2, ch / 2 , 'helpInfo');
      this.helpInfo.setInteractive();
      this.helpInfo.on('pointerdown', ()=>{
          this.scene.start('gameStart');
      });
    });
  },
  update: function() {
 // 遊戲狀態更新

  }
}