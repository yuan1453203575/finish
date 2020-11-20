import {HTTP, GET_TEACHERLIST,GET_PUBLICLIST} from '../../http/api'
Page({
  data: {
    bannerList: [
      {id: 1, imageUrl: '../../images/banner-1.png'},
      {id: 2, imageUrl: '../../images/banner-2.png'},
      {id: 3, imageUrl: '../../images/banner-3.png'},
      {id: 4, imageUrl: '../../images/banner-4.png'},
    ],
    teacherList: [],
    publicList:[],
    imgUrl: '../../images/home-teacher.png',
    publicImgUrl:'../../images/public.png',
  },
  onLoad() {
    wx.request({
      url: HTTP + GET_TEACHERLIST,
      method: 'GET',
      success: (data) => {
        this.setData({teacherList: data.data.data});
      }
    }),
    wx.request({
      url: HTTP + GET_PUBLICLIST,
      method: 'GET',
      success: (data) => {
        this.setData({publicList: data.data.data.slice(0,2)});
        
      }
    })
    

  } ,

//点击更多跳转教师列表页
  goteacherList(){
    wx.navigateTo({
      url: '../teacherList/teacherList',
    })
  },
  //跳转教师详情信息页
goteacherDetail(ev){
  wx.navigateTo({
    url: '../teacherDetail/teacherDetail?id='+ev.currentTarget.dataset.id
  })
},
//点击更多跳转公开课列表页
gopublicList(){
  wx.navigateTo({
    url: '../../pages/publicList/publicList',
  })
},
//跳转公开课详情信息页
gopublicDetail(ev){
  wx.navigateTo({
    url: '../publicDetail/publicDetail?id='+ev.currentTarget.dataset.id
  })
},


})


