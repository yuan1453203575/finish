import {HTTP, GET_TEACHERLIST} from '../../http/api'
Page({
  data: {
    bannerList: [
      {id: 1, imageUrl: '../../images/banner-1.png'},
      {id: 2, imageUrl: '../../images/banner-2.png'},
      {id: 3, imageUrl: '../../images/banner-3.png'},
      {id: 4, imageUrl: '../../images/banner-4.png'},
    ],
    teacherList: [],
    imgUrl: '../../images/home-teacher.png',
  },
  onLoad() {
    wx.request({
      url: HTTP + GET_TEACHERLIST,
      method: 'GET',
      success: (data) => {
        this.setData({teacherList: data.data.data});
      }
    })
  } 
})