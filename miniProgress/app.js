App({
  //登录：标记用户的行为
  onLaunch() {
    //检查登录状态
    this.checkLogin();
  },
  checkLogin() {
    //检查是否登录了
    const token = wx.getStorageSync('token');
    if(token) {
       wx.request({
         url: 'http://localhost:3000/api/auth/check_login',
         method: 'GET',
         data: {
           token,
         },
         success: ({statusCode}) => {
           if(statusCode != 200) {
             this.login();
           }
         },
         fail: (error) => {
           this.login();
         }
       })
    } else {
      this.login();
    }
  },
  login() {
    wx.login({
      success({code}) {
        console.log(code);
        //登录第二步：将code发送给服务器
        wx.request({
          url: 'http://localhost:3000/api/auth/send_code',
          method: 'POST',
          data: {
            code
          },
          //登录第六步：获得登录态
          success(res) {
            const token = res.data.token;
            //登陆第七步
            wx.setStorageSync('token', token);
          },
          fail(error) {
            console.log(error);
          }
        })  
      }
    })
  }
})