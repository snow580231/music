(function() {

window.onload = function(){
	var vue=new Vue({
	el:'#app',
	data:{
		id:"",
		name:"聆听好声音",
		singer:"就在这里",
		pic:"img/hj.jpg",
		lyric:"融入音乐的海洋",
		ly:'',
		// index歌词
		ly0:'融入音乐的海洋',
		ly1:'',
		ly2:'',
		wordsArray:[],
		url:"",
		time:"0",
		now:"",
		// 1播放2暂停
		isplay:'',
		loop:true,
		show:false,
		icon:true,
		rotate:false,
		// 曲目信息
		music:[
			{
				"id":"34c7777fffdd4fdf04e02af1f6857ca4",
				"name":"光年之外",
				"singer":"邓紫棋",
				"pic":"https://api.bzqll.com/music/kugou/pic?id=34c7777fffdd4fdf04e02af1f6857ca4&imgSize=400&key=579621905",
				"lyric":"https://api.bzqll.com/music/kugou/lrc?id=34c7777fffdd4fdf04e02af1f6857ca4&key=579621905",
				"url":"https://api.bzqll.com/music/kugou/url?id=34c7777fffdd4fdf04e02af1f6857ca4&key=579621905",
				"time":"235"
			},
			{
				"id":"15daa5c51716a31b4f5027c27046230a",
				"name":"小半",
				"singer":"陈粒",
				"pic":"https://api.bzqll.com/music/kugou/pic?id=15daa5c51716a31b4f5027c27046230a&imgSize=400&key=579621905",
				"lyric":"https://api.bzqll.com/music/kugou/lrc?id=15daa5c51716a31b4f5027c27046230a&key=579621905",
				"url":"https://api.bzqll.com/music/kugou/url?id=15daa5c51716a31b4f5027c27046230a&key=579621905",
				"time":"297"
			},
			{
				"id":"dd173e73931435863a285c5ab4671df2",
				"name":"九张机",
				"singer":"叶炫清",
				"pic":"https://api.bzqll.com/music/kugou/pic?id=dd173e73931435863a285c5ab4671df2&imgSize=400&key=579621905",
				"lyric":"https://api.bzqll.com/music/kugou/lrc?id=dd173e73931435863a285c5ab4671df2&key=579621905",
				"url":"https://api.bzqll.com/music/kugou/url?id=dd173e73931435863a285c5ab4671df2&key=579621905",
				"time":"220"
			},
			{
				"id":"9cf1200bfd45cbab592b1d0acf7a74c6",
				"name":"Way Back Home",
				"singer":"SHAUN",
				"pic":"https://api.bzqll.com/music/kugou/pic?id=9cf1200bfd45cbab592b1d0acf7a74c6&imgSize=400&key=579621905",
				"lyric":"https://api.bzqll.com/music/kugou/lrc?id=9cf1200bfd45cbab592b1d0acf7a74c6&key=579621905",
				"url":"https://api.bzqll.com/music/kugou/url?id=9cf1200bfd45cbab592b1d0acf7a74c6&key=579621905",
				"time":"214"
			},
			{
				"id":"1c2dee3425cdab8c14291e9088d2ea02",
				"name":"一半",
				"singer":"薛之谦",
				"pic":"https://api.bzqll.com/music/kugou/pic?id=1c2dee3425cdab8c14291e9088d2ea02&imgSize=400&key=579621905",
				"lyric":"https://api.bzqll.com/music/kugou/lrc?id=1c2dee3425cdab8c14291e9088d2ea02&key=579621905",
				"url":"https://api.bzqll.com/music/kugou/url?id=1c2dee3425cdab8c14291e9088d2ea02&key=579621905",
				"time":"286"
			},
			{
				"id":"033fec8f75d4e1bb349e3fa533911eab",
				"name":"星",
				"singer":"杨宗纬",
				"pic":"https://api.bzqll.com/music/kugou/pic?id=033fec8f75d4e1bb349e3fa533911eab&imgSize=400&key=579621905",
				"lyric":"https://api.bzqll.com/music/kugou/lrc?id=033fec8f75d4e1bb349e3fa533911eab&key=579621905",
				"url":"https://api.bzqll.com/music/kugou/url?id=033fec8f75d4e1bb349e3fa533911eab&key=579621905",
				"time":"254"
			}
		],
		
	},
	methods:{
		showList(){
			this.show=!this.show
		},
		playthis(index,music){
			this.url=music.url
			this.name=music.name
			this.singer=music.singer
			this.pic=music.pic
			this.lyric=music.lyric

			this.ly=music.lyric
			this.time=music.time
			this.isplay=1
			this.now=index
			// console.log(this.now)
			this.rotate=true

			this.ly0=''
			this.ly1=''
			this.ly2=''
			this.wordsArray=[]
			this.a()
		},
		play(){
			if (this.isplay==='') {
				return
			}
			this.icon=!this.icon
			if(this.isplay==1){
				audio.pause()
				this.isplay=2
				this.rotate=false
			}else if(this.isplay==2){
				audio.play()
				this.isplay=1
				this.rotate=true
			}else {
				return
			}
		},
		last(music){
			if (this.now==='') {
				return
			}
			if(this.now==0){
				this.now=music.length-1
			}else {
				this.now--
			}
			this.url=music[this.now].url
			this.name=music[this.now].name
			this.singer=music[this.now].singer
			this.pic=music[this.now].pic
			this.ly=music[this.now].lyric
			this.time=music[this.now].time

			this.ly0=''
			this.ly1=''
			this.ly2=''
			this.wordsArray=[]
			this.a()
		},
		next(music){
			if (this.now==='') {
				return
			}
			if(this.now==music.length-1){
				this.now=0
			}else {
				this.now++
			}
			this.url=music[this.now].url
			this.name=music[this.now].name
			this.singer=music[this.now].singer
			this.pic=music[this.now].pic
			this.ly=music[this.now].lyric
			this.time=music[this.now].time

			this.ly0=''
			this.ly1=''
			this.ly2=''
			this.wordsArray=[]
			this.a()
		},
		voice(){
			var voiceBar=document.getElementById('voice-bar')
			var voicedBar=document.getElementById('voiced-bar')
			let voiceBarWidth=voiceBar.clientWidth
			let newVolume=(event.offsetX/voiceBarWidth)
			audio.volume=newVolume
			// 更新音量
			let voicedBarWidth=(audio.volume/1)*voiceBarWidth
			voicedBar.style.width = voicedBarWidth+'px'
		},
		playing(){
			var progressBar=document.getElementById('progress-bar')
			var playedBar=document.getElementById('played-bar')
			var currentTime = document.getElementById('current-time')
			let progressBarWidth=progressBar.clientWidth
			let newCurrentTime=(event.offsetX/progressBarWidth)*audio.duration
			audio.currentTime = newCurrentTime
			let playedBarWidth=(audio.currentTime/audio.duration)*progressBarWidth
			playedBar.style.width=playedBarWidth+'px'
		},
		change(){
			var mode=document.getElementById('mode')
			if(this.loop){
				this.loop=false
				mode.innerHTML='列表'
			}else {
				this.loop=true
				mode.innerHTML='单曲'
			}
		},
		a(){
			axios.get(this.ly).then(response=>{
			    this.lyric=response.data
			    // var wordsArray=[];
				var aaa=this.lyric;
				var arrays=aaa.split("\n");
			// console.log(arrays)
			for(var i=0;i<arrays.length-1;i++){
                var temp=arrays[i];
                //根据分号分割过滤数据
                var tempNum=temp.split(":")[0].replace("[","");
                //是合法歌词的时候
                if(!isNaN(tempNum)){
                    //重新根据]来分割 ，分离数据
                    var timeArray=temp.split("]")[0].replace("[","").split(":");//33:44
                    //计算分钟数
                    var min=parseInt(timeArray[0]);
                    //计算总秒数
                    var second=parseInt(timeArray[1])+min*60;
                    //获取对应的歌词内容
                    var content=temp.split("]")[1];

                    //封装成歌词对象放入数组
                    var obj={
                        time:second,
                        content:content
                    };
                    this.wordsArray.push(obj);
                    // console.log(wordsArray)
                }
            }
			},err=>{
			    alert(err)
			   })
			}
	},
})
	new Banner({isAutoPlay: true}).init();
	var audio=document.getElementById('audio'),
		voiceBar = document.getElementById('voice-bar'),
		voicedBar = document.getElementById('voiced-bar'),
		progressBar =document.getElementById('progress-bar'),
		playedBar = document.getElementById('played-bar'),
		//当前音乐时间
		currentTime = document.getElementById('current-time');
	//初始化音量
	audio.volume=0.5;
	var voicedBarWidth=(audio.volume/1)*voiceBar.clientWidth;
	voicedBar.style.width=voicedBarWidth+'px';
	//根据时间获取当前应该显示哪一句话
    function getWordsByTime(second){
        for(var i in  vue.wordsArray){
            var obj=vue.wordsArray[i];
            if(second==obj.time){  
            	//播放的秒数等于数组中的秒数
                vue.ly0=obj.content;
                vue.ly1=vue.wordsArray[i-1].content;
                vue.ly2=vue.wordsArray[i-2].content;
            }
        }
    }
	//进度条更新
	setInterval(function updatePlayedBar(){
		var progressBarWidth=progressBar.clientWidth;
		var playedBarWidth=(audio.currentTime/audio.duration)*progressBarWidth;
		playedBar.style.width=playedBarWidth+'px';
		currentTime.innerHTML=parseInt(audio.currentTime)+'s';
		// 判断单曲还是列表
		// 当前音乐时间
		var a=parseInt(audio.currentTime)
		// 音乐总时长
		var b=parseInt(audio.duration)
		if(a==b-1 && vue.loop==false){
			// console.log('a');
			if (vue.now==='') {
				return
			}
			if(vue.now==vue.music.length-1){
				vue.now=0
			}else {
				vue.now++
			}
			vue.url=vue.music[vue.now].url
			vue.name=vue.music[vue.now].name
			vue.singer=vue.music[vue.now].singer
			vue.pic=vue.music[vue.now].pic
			vue.ly=vue.music[vue.now].lyric
			vue.time=vue.music[vue.now].time

			vue.ly0=''
			vue.ly1=''
			vue.ly2=''
			vue.wordsArray=[]
			vue.a()
		}
		// 歌词效果
		if (vue.isplay==1) {
			var str=getWordsByTime(a);
			document.getElementsByClassName('ly0').innerHTML=str;
		}
		
	},1000);
	return setTimeout(resizeWindow, 0);
}
	
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

  NUM_CONFETTI = 350;

  COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];

  PI_2 = 2 * Math.PI;

  canvas = document.getElementById("world");

  context = canvas.getContext("2d");

  window.w = 0;

  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth-17;
    return window.h = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeWindow, false);



  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  Confetti = class Confetti {
    constructor() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    replace() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    }

    draw() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
    }

  };

  confetti = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 1, ref = NUM_CONFETTI; (1 <= ref ? j <= ref : j >= ref); i = 1 <= ref ? ++j : --j) {
      results.push(new Confetti);
    }
    return results;
  })();

  window.step = function() {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };

  step();

}).call(this);
