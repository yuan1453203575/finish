import {HTTP, GET_TEACHERLIST, GET_COURSELIST} from '../../http/api'
Page({
  goCourseListAction() {
    wx.navigateTo({
      url: '../courseList/courseList',
    })
  },
  data: {
    bannerList: [
      {id: 1, imageUrl: '../../images/banner-1.png'},
      {id: 2, imageUrl: '../../images/banner-2.png'},
      {id: 3, imageUrl: '../../images/banner-3.png'},
      {id: 4, imageUrl: '../../images/banner-4.png'},
    ],
    teacherList: [],
    courseHomeList: [],
    imgUrl: '../../images/home-teacher.png',
  },
  onShow() {
    wx.request({
      url: HTTP + GET_TEACHERLIST,
      method: 'GET',
      success: (data) => {
        this.setData({teacherList: data.data.data});
      }
    }),
    wx.request({
      url: HTTP + GET_COURSELIST,
      method: 'GET',
      success: (data) => {
        this.setData({courseHomeList: data.data.data.slice(0,4)});
      }
    })
  } 
})