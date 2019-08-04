
let app = new Vue({
  el: '#app',
  data: {
    albums: [
      {img: './images/002564bb2e1f11f477770a.png', title: 'Sick Boy', author: 'The Chainsmokers'},
      {img: './images/getImage(6).png', title: '÷ (Divide)', author: 'Ed Sheeran'},
      {img: './images/002564bb2e1f11f477770a-1.png', title: 'DNA', author: 'Backstreet Boys'},
      {img: './images/002564bb2e1f11f477770a-2.png', title: 'Singles', author: 'Maroon 5'},
      {img: './images/002564bb2e1f11f477770a-3.png', title: 'Greatest Hits', author: 'Queen'},
      {img: './images/getImage(8).png', title: 'Different World', author: 'Alan Walker'},
    ],
    songObj: [
      {'ytb': undefined, id: 'l7_HgYvaY34', title: ' Let\'s See What the Night Can Do', author: 'Jason Mraz', duration: 0 ,durationTxt: '', playing: false},
      {'ytb': undefined, id: 'BFkTu8Y1KLs', title: 'Have It All', author: 'Jason Mraz', duration: 0 ,durationTxt: '', playing: false},
      {'ytb': undefined, id: 'KAhf4xFBgtQ', title: 'More Than Friends', author: 'Jason Mraz', duration: 0 ,durationTxt: '', playing: false},
      {'ytb': undefined, id: 't1XFRh9B2WE', title: 'Unlonely ', author: 'Jason Mraz', duration: 0 ,durationTxt: '', playing: false},
      {'ytb': undefined, id: 'BpVzXWdJBq0', title: 'Better With You', author: 'Jason Mraz', duration: 0 ,durationTxt: '', playing: false},
      {'ytb': undefined, id: '2NznG-UNxpc', title: 'No Plans', author: 'Jason Mraz', duration: 0 ,durationTxt: '', playing: false}
    ],
    playing: 0,
    currentTimeTxt: '00:00',
    currentTimeRangePos: 0,
    startOrStomImg : './images/start.png',
    adShowBanner: false,
    mouseDown: false
  },
  methods: {
    play: function (idx) {
      this.playOrPauseImg(YT.PlayerState.CUED);
      if(this.playing !== idx) {
              this.stopSong();
              this.playing = idx;
      }
      this.songObj[idx].playing = true;
      this.songObj[this.playing].ytb.playVideo();      
    },
    pause: function(){
      this.songObj[this.playing].ytb.pauseVideo();
    },
    nextSong: function() {
      if(this.playing >= this.songObj.length - 1) {
        return;
      } else {        
        this.play(this.playing + 1);
      }      
    },
    beforeSong: function() {
      if(this.playing <= 0) {
        return;
      } else {      
        this.play(this.playing - 1);
      }  
    },
    stopSong: function() {
      this.songObj[this.playing].ytb.stopVideo();
      this.songObj[this.playing].playing = false;
    },
    playOrPause: function (){
      let state = this.songObj[this.playing].ytb.getPlayerState();
      this.playOrPauseImg(state);
      state === YT.PlayerState.PAUSED || state === YT.PlayerState.CUED ||  state === YT.PlayerState.ENDED ? this.play(this.playing) : this.pause();
    },
    playOrPauseImg: function (state){
      this.startOrStomImg = state === YT.PlayerState.PLAYING ?  './images/start.png' : './images/stop.png';
    },
    voiceChange: function(e) {
      this.songObj[this.playing].ytb.setVolume(e.target.value);
    },
    songDurationChange: function(e) {
      const newTime = this.songObj[this.playing].duration * (e.target.value / 100);
      this.songObj[this.playing].ytb.seekTo(newTime);
    },
    timerStart: function() {
      this.timer();
    },
    timer: function() {
      setTimeout(() => {
        const current = this.songObj[this.playing].ytb.getCurrentTime();
        this.currentTimeTxt = timeBeauty(current);
        //得到currentTime轉換百分比傳到螢幕      
      
         this.currentTimeRangePos = Math.floor(current / this.songObj[this.playing].duration * 100);
        
        // if(this.songObj[this.playing].ytb.getPlayerState() === YT.PlayerState.CUED) {
        //   return;
        // }
        this.timer();
      }, 1000);
    },
    adBanner: function() {
      this.adShowBanner = false;
    },
    timeRangeMouseDown: function() {
      this.mouseDown = true;
    },
    timeRangeMouseUp: function() {
      this.mouseDown = false;
    },
  }
});

    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    function onYouTubeIframeAPIReady() {

      app.songObj.forEach((item, index) => {
        item.ytb = new YT.Player(`player${index}`, {
          height: '0',
          width: '0',
          videoId: item.id ,
          events: {
            'onReady': () => {
              var duration = item.ytb.getDuration();
              setEndTime(duration, item);
            },
            'onStateChange': () => {
              const state = item.ytb.getPlayerState();    
              if(state === YT.PlayerState.PLAYING){
                app.timerStart();
              }
              if(state === YT.PlayerState.ENDED) {
                app.adShowBanner = true;
                app.startOrStomImg = './images/start.png';
                // app.currentTimeTxt = app.songObj[app.playing].durationTxt;
                // console.log(app.currentTimeTxt,app.songObj[app.playing].durationTxt);
              }
            }
          }
        });
      });
    }

    function timeBeauty(time) {
      time = Math.floor(time);
      var min = Math.floor(time/60);
      var minTxt = min < 10 ? `0${min}` : min;
      var sec =  Math.floor(time % 60);
      var secTxt = sec < 10 ? `0${sec}` : sec;
      return `${minTxt}:${secTxt}`;
    }
    function setEndTime(d, item){
      item.duration = d;
      item.durationTxt = timeBeauty(d);
    }