const gamePlay = {
  key: 'gamePlay',
  preload: function() {
// 載入資源
    this.load.image('bg', './images/bg.png');
    this.load.image('floor', 'images/floor.png');
    this.load.spritesheet('user', 'images/spirtsheet.png', {frameWidth: 269, frameHeight: 351});
    this.load.image('timer', 'images/timer@3x.png');
    this.load.image('flower', 'images/obj/flower.png');
    this.load.image('flower', 'images/obj/book.png');
    this.load.image('flower', 'images/obj/gossip.png');
    this.load.image('success', 'images/success.png');

    this.timeInit = 60;
    this.speedLv = 1;
    this.gameStop = false;
    this.isKeyJp = true;
  },
  create: function() {
  // 資源載入完成，加入遊戲物件及相關設定
    const addPhysics = obj => {
      this.physics.add.existing(obj);
      obj.body.immovable = true;
      obj.body.moves = false;
    }
    this.bg = this.add.tileSprite(cw/2, ch/2, cw , ch, 'bg');
    this.floor = this.add.tileSprite(cw/2, 540, cw , 120, 'floor');
    // this.physics.add.existing(this.floor);
    this.timer = this.add.sprite(350, 565, 'timer');
    this.timer.setScale(.2);
    // this.floor.body.immovable = true;
    // this.floor.body.moves = false;
    addPhysics(this.floor);
    this.player = this.physics.add.sprite(150, 150, 'user');
    this.player.setBounce(0.3);     
    // this.player.setScale(0.7);    
    this.player.setSize(100, 100);
    this.player.setCollideWorldBounds(true);//不會超出邊界
    this.physics.add.collider(this.player, this.floor);

    const block = [
      {name: 'book', x: cw + 200, y: 320, w: 160, h: 83},
      {name: 'flower', x: cw + 200, y: ch / 2 - 30 , w: 200, h: 94},
      {name: 'gossip', x: cw + 200, y: 70, w: 130, h: 160},
    ];
  // this.bg1 = this.add.tileSprite(400, 225, cw, ch, 'bg1');
  
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('user', {start: 1, end: 2}),
      frameRate: 1,
      repeat: -1
    });

    this.anims.create({
      key: 'speed',
      frames: this.anims.generateFrameNumbers('user', {start: 5, end: 6}),
      frameRate: 5,
      repeat: -1
    });
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('user', {start: 6, end: 7}),
      frameRate: 1,
      repeat: 1
    });
    this.anims.create({
      key: 'end',
      frames: this.anims.generateFrameNumbers('user', {start: 7, end: 8}),
      frameRate: 5,
      repeat: 1
    });
    this.TimeText = this.add.text(380, 553, `${this.timeInit}`, { fontSize: '30px',fontFamily: 'Anton'});
    this.player.anims.play('run', true);
    let time = setInterval(() => {
      if(this.timeInit < 20 && this.timeInit > 10) {
        this.speedLv = 2;
        
      }
      if(this.timeInit < 10 && this.timeInit >0) {
        this.speedLv = 5;
      }
      this.timeInit--;
      this.TimeText.setText(`${this.timeInit}`);
      if(this.timeInit <= 0 ) {
        this.gameStop = true;
        this.success = this.add.image(cw / 2, ch / 2 , 'success');
        this.success.setInteractive();
        this.success.on('pointerdown', ()=>{
            this.scene.start('gamePlay');
        });
        // this.player.anims.play('end', true);
        clearInterval(time);
      }
    }, 1000);
  },
  update: function() {
 // 遊戲狀態更新
    if(this.gameStop) {
      return;
    }
    this.bg.tilePositionX  += 4 * this.speedLv;
    this.floor.tilePositionX += 4 * this.speedLv;
    const keyboard = this.input.keyboard.createCursorKeys();
    if(keyboard.right.isDown) {
      this.player.anims.play('speed', true);
      this.player.setVelocityX(200);
      this.player.flipX = false;
      this.isKeyJp = true;
    } else if (keyboard.left.isDown){
      this.player.anims.play('speed', true);
      this.player.setVelocityX(-200);
      this.player.flipX = true;
      this.isKeyJp = true;
    } else if(keyboard.up.isDown){
      if(this.isKeyJp) {
        this.isKeyJp = false;
        this.player.setVelocityY(-500);
        this.player.anims.play('jump', true);
      }   
    }else{
      this.player.anims.play('run', true);
      this.player.flipX = false;
      this.player.setVelocityX(0);
      this.isKeyJp = true;
    }


  }
}