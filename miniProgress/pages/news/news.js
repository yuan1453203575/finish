// pages/news/news.js
import {GET_NEWSLIST, HTTP} from '../../http/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: 'http://cloud.axureshop.com/gsc/DI13H1/2c/7b/7b/2c7b7b7a848441deaf1b404dcf264202/images/首页/u189.png?token=92f2af1e5e551b98b2f6009fb3d5a0f58705bb0caa52cafc9c207650fe9d6c5b',
    list: [],
    viewIcon: 'http://cloud.axureshop.com/gsc/DI13H1/2c/7b/7b/2c7b7b7a848441deaf1b404dcf264202/images/%E9%A6%96%E9%A1%B5/u253.svg?token=136753d332854e203d7b07a81823628b55d78486ce03218ba64f9a23362ada59'
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