var app = getApp()
var util = require('../../utils/util.js')
Page({
    data:{
      list:null
    },
    onReady:function(){
        util.getUser(this);
    },
    goPage:function(event){
        // console.log(event.currentTarget.dataset.name)
        // console.log(event.target.dataset.name)
        wx.navigateTo({
            url: '../message/message?name='+event.currentTarget.dataset.name+"&id="+event.currentTarget.dataset.id
        })
        // console.log(test);
        
    }
})
