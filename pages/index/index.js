//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
        items:[
            {
                name:'华北电力大学',
                score:5,
                telephone:'5405555',
                distance:'333km',
                icon:'https://image.flaticon.com/icons/png/128/998/998664.png'
            },{
                name:'清华大学',
                score:5,
                telephone:'5405555',
                distance:'333km',
                icon:'https://image.flaticon.com/icons/png/128/998/998664.png'
            },{
                name:'北京大学',
                score:5,
                telephone:'5405555',
                distance:'333km',
                icon:'https://image.flaticon.com/icons/png/128/998/998664.png'
            }
        ]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse){
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    getLocation:function(e){
        wx.openLocation({
            latitude: 37.205656,
            longitude: 115.788204,
            scale: 28
        });
    },
    link(){
        wx.navigateTo({
          url: '../detail/detail'
        })
    }
    
})
