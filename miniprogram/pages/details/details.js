// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
    list: [
      {
        id: 0,
        name : "写一篇《垃圾日记》",
        introduce: "零垃圾并不是一项宏大的工程，而是由日常生活中一个个小小的习惯和选择组成的。最难的，是迈出第一步。",
        src: '../../image/day01.jpg',
        showModalStatus: false,
        catalog: [
          { section: "1. xxx" },
          { section: "2. xxx" },
          { section: "3. xxx" },
          { section: "4. xxx" },
        ]
      },
      {
        id: 1,
        name: "带上自己的购物袋",
        introduce: "在我们家，当时垃圾桶里最多的就是塑料袋，而这些袋子跟着我回家后，都几乎难逃被丢进垃圾桶的命运。",
        src: '../../image/day02.jpg',
        showModalStatus: false,
        catalog: [
          { section: "1. xxx" },
          { section: "2. xxx" },
          { section: "3. xxx" },
          { section: "4. xxx" },
        ]
      },
      {
        id: 2,
        name: "十分钟快手断舍离",
        introduce: "看看你的周围，是不是充满了各种各样的物品？那些长年积灰的杂物们，除了还没被扔进垃圾桶外，它们跟垃圾其实并无二致。",
        src: '../../image/day03.jpg',
        showModalStatus: false,
        catalog: [
          { section: "1. xxx" },
          { section: "2. xxx" },
          { section: "3. xxx" },
          { section: "4. xxx" },
        ]
      },
      {
        id: 3,
        name: "看一部环保主题纪录片",
        introduce: "纪录片的目的在于记录事实，这里既有直指人心的严峻数字，也有无与伦比的绝美风光。",
        src: '../../image/day04.jpg',
        showModalStatus: false,
        catalog: [
          { section: "1. xxx" },
          { section: "2. xxx" },
          { section: "3. xxx" },
          { section: "4. xxx" },
        ]
      },
      {
        id: 4,
        name: "带上自己的杯子",
        introduce: "2013年，中国的瓶装水消费量占全球的15%，超越美国成为全球最大的瓶装水消费国。",
        src: '../../image/day05.jpg',
        showModalStatus: false,
        catalog: [
          { section: "1. xxx" },
          { section: "2. xxx" },
          { section: "3. xxx" },
          { section: "4. xxx" },
        ]
      },
      {
        id: 5,
        name: "减少食物浪费",
        introduce: "当你示意服务员将没吃完的食物收走时，这个地球上，还有7.95亿人无法填饱肚子，每天有超过2万人死于饥饿。",
        src: '../../image/day06.jpg',
        showModalStatus: false,
        catalog: [
          { section: "1. xxx" },
          { section: "2. xxx" },
          { section: "3. xxx" },
          { section: "4. xxx" },
        ]
      },
      {
        id: 6,
        name: "放飞自我的生理期",
        introduce: "每个月的生理期是我最不想面对的日子。特别是在踏上零垃圾旅程之后，除了生理上的不适，再加上看到用掉的姨妈巾和......",
        src: '../../image/day07.jpg',
        showModalStatus: false,
        catalog: [
          { section: "1. xxx" },
          { section: "2. xxx" },
          { section: "3. xxx" },
          { section: "4. xxx" },
        ]
      },
    ]
  
  },

  /**
   * 自己添加的 powerDrawer
   */
  powerDrawer: function (e) {
    console.log("clicked");

    var currentStatu = e.currentTarget.dataset.statu;
    var index = e.currentTarget.id;

    // 关闭
    if (currentStatu == 'close') {
      this.data.list[index].showModalStatus = false;
      this.setData({
        showModalStatus: false,
        list: this.data.list,
      });
    }

    // 显示
    if (currentStatu == 'open') {
      this.data.list[index].showModalStatus = true;
      this.setData({
        showModalStatus: true,
        list: this.data.list,
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  
})
