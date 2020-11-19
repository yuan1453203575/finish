// pages/newsDetail/newsDetail.js
import {GET_NEWSLISTDETAIL, HTTP} from '../../http/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    title: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: HTTP + GET_NEWSLISTDETAIL,
      method:'GET',
      data:{
        id: parseInt(options.id)
      },
      success:(data) =>{
        this.setData({text: data.data.data.text,title: data.data.data.title})
      }
    })
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

  }
})