// pages/teacherList/teacherList.js
import {GET_TEACHERLIST, HTTP} from '../../http/api'
Page({


  /**
   * 页面的初始数据
   */
  data: {
    listData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: HTTP + GET_TEACHERLIST,
      method:'GET',
      data:{
        id: parseInt(options.id)
      },
      success:(data) =>{
          // console.log(data.data.data);
          this.setData({listData:data.data.data})
          // console.log(this.data.listData);
         
      }
    })
  },
  goteacherDetail(ev){
    wx.navigateTo({
      url: '../teacherDetail/teacherDetail?id='+ev.currentTarget.dataset.id
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