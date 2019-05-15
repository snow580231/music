
function Banner(o) {

	o = o || {};

	o.isAutoPlay = o.isAutoPlay || false;

	this.isAutoPlay = o.isAutoPlay;

	//展示轮播图片的元素
	this.box = this.getElements('#box');

	//每轮一张图片的距离
	this.width = parseInt(getComputedStyle(this.box[0]).width);

	//图片索引
	this.index = 1;

	//获取轮播的ul
	this.bannerUl = this.getElements('#banner')[0];

	//轮播图片数量
	this.counts = this.getElements('#index>li').length;

	//ul移动一步的需要的时间
	this.interval = 30;

	//保存自动轮播的定时器序号
	this.timer = null;

	//保存自动轮播时间
	this.duration = 3000;

}

//获取元素
Banner.prototype.getElements = function (selector) {
	return document.querySelectorAll(selector);
}

//移动图片
Banner.prototype.move = function () {

	var self = this;

	var timer = setInterval(function () {

		//获取ul移动之前的left
		var beforeLeft = parseInt(getComputedStyle(self.bannerUl).left);

		//获取ul移动之后的left
		var afterLeft = -self.index * self.width;

		//获取移动之后和移动之前的距离差
		var left = (afterLeft - beforeLeft) / 6;

		left = left > 0 ? Math.ceil(left) : Math.floor(left);

		self.bannerUl.style.left = beforeLeft + left + 'px';

		if (left == 0) {
			clearInterval(timer);
			timer = null;
		}

	}, this.interval);
	

}

//激活图片索引
Banner.prototype.activeLi = function (index) {
	this.getElements('#index>li.active')[0].className = '';
	this.getElements('#index>li')[index - 1].className = 'active';
}

//自动轮播
Banner.prototype.autoplay = function () {

	var self = this;

	self.timer = setInterval(function () {

		self.getElements('#next')[0].click();

	}, self.duration)

}

//绑定事件
Banner.prototype.on = function (selector, type, fn) {

	var elements = this.getElements(selector);

	for (var i = 0; i < elements.length; i++) {
		elements[i]['on' + type] = function () {
			typeof fn === 'function' && fn.call(this);
		};
	}
}

//初始化
Banner.prototype.init = function () {

	var self = this;

	// console.log(self.width);

	//图片索引切换图片
	this.on('#index>li', 'click', function () {

		if (this.className == 'active') {
			return;
		}

		self.index = +this.getAttribute('name');

		self.activeLi(self.index);

		//移动ul
		self.move();

	})

	// 上一张
	this.on('#prev', 'click', function () {

		self.index--;

		if (self.index < 0) {
			//将ul的left设置
			self.bannerUl.style.left = -self.counts * self.width + 'px';
			self.index = self.counts - 1;
		}

		var index = self.index == 0 ? self.counts : self.index;

		self.activeLi(index);

		//移动ul
		self.move();

	})
	

	//下一张
	this.on('#next', 'click', function () {

		self.index++;

		if (self.index > self.counts) {
			//将ul的left设置0
			self.bannerUl.style.left = 0 + 'px';
			self.index = 1;
		}

		self.activeLi(self.index);

		//移动ul
		self.move();

	})

	this.on('#box', 'mouseover', function () {
		clearInterval(self.timer);
		self.timer = null;
	})

	this.on('#box', 'mouseout', function () {
		if (self.isAutoPlay) {
			self.autoplay();
		}
	})

	// console.log(this.isAutoPlay);

	//开启自动轮播
	if (this.isAutoPlay) {
		this.autoplay();
	}
	


}