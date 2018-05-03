//index.js
//获取应用实例
const app = getApp()
//Page()这个方法是必须有的，里面放置js对象，用于页面加载的时候，呈现效果
//data: {},数据对象，设置页面中的数据，前端可以通过读取这个对象里面的数据来显示出来。
Page({
  data: {
    //设置初始值
    array: ['本部', '大兴', '出差', '自定义'],
    objectArray: [
      {
        id: 0,
        name: '本部'
      },
      {
        id: 1,
        name: '大兴'
      },
      {
        id: 2,
        name: '出差'
      },
      {
        id: 3,
        name: '自定义'
      }
    ],
    index:0,

    array1: ['本部', '大兴', '出差', '自定义'],
    objectArray1: [
      {
        id: 0,
        name: '本部'
      },
      {
        id: 1,
        name: '大兴'
      },
      {
        id: 2,
        name: '出差'
      },
      {
        id: 3,
        name: '自定义'
      }
    ],
    index1:0,
    date: '2018-05-01',
    customItem: '全部'
  },
  //表单提交按钮
  //formSubmit: function  小程序中方法都是 方法名:function()，其中function可以传入一个参数，作为触发当前时间的对象
  //这里的e，就是当前触发事件的对象，类似于html onclick=“foo(this)”this对象，小程序封装了许多内置的调用方法，e.detail.value.mobile 就是当前对象name=”mobile”的对象的值e.detail.value.mobile.length就是这个值的长度
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value.id)
    // this.setData({
    //   allValue: e.detail.value
    // })
  },

  //普通选择器的点击事件
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  
  //日期选择器
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  //时间选择器
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
})
  