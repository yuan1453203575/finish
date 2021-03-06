// pages/news/news.js
import {GET_NEWSLIST, HTTP} from '../../http/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: '../../images/news.png',
    list: [],
    viewIcon: '../../images/new_view.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: HTTP + GET_NEWSLIST,
      method: 'GET',
      success: (data) =>{
        this.setData({list: data.data.data});
      
        
      }
    })
  },
  gonewsDetail(ev){
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id='+ev.currentTarget.dataset.id
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