const requestUrl = require('../../config').uploadQuestionUrl
const duration = 2000

Page({
  makeRequest: function () {
    var self = this

    self.setData({
      loading: true
    })

    wx.request({
      url: requestUrl,
      data: {
        noncestr: Date.now()
      },
      success: function (result) {
        wx.showToast({
          title: 'Result: ' + result.data % 100 ,
          icon: 'success',
          mask: true,
          duration: duration
        })
        self.setData({
          loading: false
        })
        console.log('request success', result)
      },

      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  },
  data: {
    pickerHidden: true,
    chosen: ''
  },
  pickerConfirm: function (e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },
  pickerCancel: function (e) {
    this.setData({
      pickerHidden: true
    })
  },
  pickerShow: function (e) {
    this.setData({
      pickerHidden: false
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})
