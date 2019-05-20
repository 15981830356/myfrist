<template>
  <div id="comment">
    <!--登录-->
    <div class="loginbox" v-show="loginStatus" @click="loginboxClick()" style="display:none;">
      <div class="box" @click="stopProp()">
        <h3>用户登录</h3>
        <form name="login" id="login">
          <input type="text" placeholder="请输入用户名" class="username">
          <input type="password" placeholder="请输入登录密码" class="psw">
          <input type="button" value="立即登录" @click="login()">
          <input type="button" value="立即注册" @click="showregister()" class="blueBtn">
        </form>
      </div>
    </div>
    <!--登录-->

    <!--注册-->
    <div
      class="loginbox registerbox"
      v-show="registerStatus"
      @click="registerboxClick()"
      style="display:none;"
    >
      <div class="box" @click="stopProp()">
        <h3>用户注册</h3>
        <form name="register" id="register">
          <input type="text" placeholder="请输入用户名" class="username">
          <input type="password" placeholder="请输入登录密码" class="psw">
          <input type="button" value="立即注册" @click="register()">
          <input type="button" value="立即登录" @click="showLogin()" class="blueBtn">
        </form>
      </div>
    </div>
    <!--注册-->

    <!--评论-->
    <div class="commentbox">
      <div class="userbar" v-show="userbarStatus" style="display:none;">
        <img :src="currentUser.userimg" alt title class="userimg">
        <span class="loginout" @click="loginout()">退出账号</span>
        <span class="username" v-text="currentUser.username">
          <i class="icon-style icon-user-md"></i>
        </span>
        <p>
          <span class="userword" contenteditable="false">个性签名：{{currentUser.words}}</span>
        </p>
      </div>
      <div class="commemtlist">
        <!-- <dl v-for="(value, index) in comments " :key="index">
          <dt>
            <img :src=" 'img/'+value.userimg ">
            <span class="username ">{{value.username}}</span>
          </dt>
          <dd class="commentwords "><i class="icon-style icon-file-alt "></i>{{value.words}}</dd>
          <dd class="btbar ">
            <span class="like red "><i class="icon-style icon-thumbs-up "></i>点赞(<strong @click="like(index) ">{{value.like}}</strong>)</span>
            <span class="notlike red "><i class="icon-style icon-thumbs-down "></i>点踩(<strong @click="notlike(index) ">{{value.nolike}}</strong>)</span>
            <span class="data red "><i class="icon-style icon-calendar "></i>时间<strong>{{value.time}}</strong></span>
          </dd>
        </dl>-->
        <div class="wordsbox">
          <!-- <textarea placeholder="请输入留言 "></textarea> -->
          <v-btn round color="#EE9A00" dark @click="showLogin()" v-show="lrBtnStatus">登录</v-btn>
          <v-btn round color="#76EEC6" dark @click="showregister()" v-show="lrBtnStatus">注册</v-btn>
          <span v-show="lrBtnStatus">登陆后可享受更多服务</span>
        </div>
      </div>
    </div>
    <!--评论-->
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      // comments: [
      //   {
      //     username: "张三",
      //     userimg: "user02.jpg",
      //     words: "这历史可以啊，不错不错。呵呵！",
      //     like: 87,
      //     nolike: 53,
      //     time: "2017-02-17 09:15:25"
      //   },
      //   {
      //     username: "李四",
      //     userimg: "user01.jpg",
      //     words: "吃饭去了啊。呵呵！",
      //     like: 23,
      //     nolike: 63,
      //     time: "2017-3-27 10:12:34"
      //   },
      //   {
      //     username: "王五",
      //     userimg: "user03.jpg",
      //     words: "这评论可以。呵呵！",
      //     like: 27,
      //     nolike: 33,
      //     time: "2017-04-02 03:26:54"
      //   }
      // ],
      //原始用户信息
      users: [
        {
          username: "Hany",
          password: "123456",
          userimg: require("../assets/zz.jpg"),
          words: "世界那么大我想去看看。"
        },
        {
          username: "one",
          password: "123456",
          userimg: require("../assets/view1.jpg"),
          words: "雨过天晴的美好。"
        },
        {
          username: "two",
          password: "123456",
          userimg: require("../assets/view2.jpg"),
          words: "下大雨了，怎么办啊。"
        }
      ],
      //当前用户信息
      currentUser: { username: "", words: "", userimg: "" },
      //登录框显示或隐藏状态
      loginStatus: false,
      //注册框显示或隐藏状态
      registerStatus: false,
      //用户信息栏显示或隐藏状态
      userbarStatus: false,
      //登录注册入口显示或隐藏状态
      lrBtnStatus: true
    };
  }, //点击回车时候发送信息
  methods: {
    //点击登录
    showLogin: function() {
      document.getElementById("login").reset();
      this.loginStatus = true;
      this.registerStatus = false;
    },
    //点击注册
    showregister: function() {
      document.getElementById("register").reset();
      this.loginStatus = false;
      this.registerStatus = true;
    },
    //退出登录
    loginout: function() {
      //清空当前用户数据
      this.currentUser.username = "";
      this.currentUser.words = "";
      this.currentUser.userimg = "";
      alert("退出成功！");
      this.userbarStatus = false;
      //登录或注册入口显示
      this.lrBtnStatus = true;
    },
    //登录遮罩层点击事件
    loginboxClick: function() {
      this.loginStatus = false;
    },
    //注册遮罩层点击事件
    registerboxClick: function() {
      this.registerStatus = false;
    },
    //点击登录或注册框阻止事件冒泡
    stopProp: function(e) {
      e = e || event;
      e.stopPropagation();
    },
    //点赞
    like: function(index) {
      this.comments[index].like++;
    },
    //点踩
    notlike: function(index) {
      this.comments[index].nolike++;
    },
    //登录
    login: function() {
      var username = $(".loginbox")
        .find(".username")
        .val(); //获取用户名
      var psw = $(".loginbox")
        .find(".psw")
        .val(); //获取密码
      var flag = false;
      for (var i = 0, len = this.users.length; i < len; i++) {
        //判断用户名密码是否正确
        if (
          this.users[i].username === username &&
          this.users[i].password === psw
        ) {
          flag = true;
          alert("登录成功！");
          //用户登录框消失
          this.loginStatus = false;
          //用户登录信息显示
          this.userbarStatus = true;
          //设置用户栏信息
          this.currentUser.username = this.users[i].username;
          this.currentUser.words = this.users[i].words;
          this.currentUser.userimg = this.users[i].userimg;
          //登录或注册入口消失
          this.lrBtnStatus = false;
          break;
        }
      }
      if (!flag) {
        alert("输入的账号或密码不正确！");
        document.getElementById("login").reset();
      }
    },
    //注册
    register: function() {
      var obj = {}; //创建用户账号密码容器
      var flag = false;
      var username = $(".registerbox")
        .find(".username")
        .val(); //获取用户名
      var psw = $(".registerbox")
        .find(".psw")
        .val(); //获取密码
      //判断用户名是否存在
      for (var i = 0, len = this.users.length; i < len; i++) {
        if (this.users[i].username === username) {
          flag = true;
          alert("该用户名已经被注册！");
          break;
        }
      }
      if (!flag) {
        if (username == "" || psw == "") {
          alert("账号和密码不能为空！");
        } else {
          var randomNum = Math.floor(Math.random() * 5) + 1;
          //随机生成头像
          var randomImg = require("../assets/view2.jpg");
          obj.username = username;
          obj.password = psw;
          obj.words = "系统默认标语。";
          obj.userimg = randomImg;
          //添加用户信息到用户列表
          this.users.push(obj);
          alert("注册成功！");
          //设置用户信息栏显示
          this.userbarStatus = true;

          //设置用户栏信息
          this.currentUser.username = obj.username;
          this.currentUser.words = obj.words;
          this.currentUser.userimg = obj.userimg;
          //登录或注册入口消失
          this.lrBtnStatus = false;
          //重置表单数据
          document.getElementById("register").reset();
          //注册框消失
          this.registerStatus = false;
        }
      }
    },
    //编辑用户心情
    editUserWords: function() {
      var wordsObj = $(".commentbox").find(".userword");
      var edit = wordsObj.attr("contenteditable"); //获取元素的H5可编辑属性

      if (edit == "false") {
        //打开可编辑功能
        wordsObj.attr("contenteditable", "true");
      } else {
        for (var i = 0, len = this.users.length; i < len; i++) {
          //查找对应用户名
          if (this.users[i].username === this.currentUser.username) {
            //改变用户信息里面的words数据
            this.currentUser.words = $(".commentbox")
              .find(".userword")
              .text();
            this.users[i].words = this.currentUser.words;
            //关闭可编辑功能
            wordsObj.attr("contenteditable", "false");
            alert("保存成功！");
          }
        }
      }
    }
    //点击提交评论
    // subCommont: function() {
    //   if (!this.userbarStatus) {
    //     alert("登录之后才可以评论！");
    //     this.loginStatus = true;
    //   } else {
    //     if ($(".wordsbox textarea").val() == "") {
    //       alert("请先填写评论内容！");
    //     } else {
    //       var obj = {}; //评论信息对象的容器
    //       obj.username = this.currentUser.username;
    //       obj.userimg = this.currentUser.userimg;
    //       obj.words = $(".wordsbox textarea").val();
    //       obj.like = 0;
    //       obj.nolike = 0;
    //       obj.time = new Date().format("yyyy-MM-dd hh:mm:ss");

    //       //将评论信息压入评论信息列表
    //       this.comments.push(obj);
    //       alert("评论成功！");
    //       $(".wordsbox textarea").val("");
    //     }
    //   }
    // }
  }
};
</script>

<style type="text/css">
#comment {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: "微软雅黑";
}

body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#comment .loginbox {
  position: fixed;
  z-index: 99999;
  width: 105%;
  height: 110%;
  background: rgba(0, 0, 0, 0.85);
  margin-left: -10%;
  margin-top: -6%;
}

#comment .icon-style {
  margin-right: 5px;
  color: #999;
}

#comment .loginbox .box {
  height: 300px;
  width: 300px;
  padding: 40px 20px 20px 20px;
  margin: 100px auto;
  background: #fff;
}

#comment .loginbox .box h3 {
  font-size: 16px;
  font-family: "微软雅黑";
  text-align: center;
}

#comment .loginbox .box input {
  height: 40px;
  width: 100%;
  border: 1px solid red;
  margin: 10px 0;
  border-radius: 2px;
}

#comment .loginbox .box input[type="button"] {
  background: red;
  color: #fff;
  font-family: "微软雅黑";
}

body #comment .loginbox .box .blueBtn {
  background: #0089ff;
  border: 1px solid #0089ff;
}

#comment .userbar {
  height: 160px;
  text-align: center;
}

#comment .userbar .userimg {
  margin-left: -70%;
  height: 50px;
  width: 50px;
  border-radius: 50px;
}

#comment .userbar .username {
  display: block;
  padding: 60px 0;
  font-size: 18px;
  color: red;
  font-weight: bolder;
  margin-left: 50%;
  margin-top: -50%;
}

#comment .commentbox {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

#comment .commentbox .loginout {
  margin-left: -68%;
  display: block;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}

#comment .commentbox .userword {
  outline: none;
}

#comment .commemtlist {
}

#comment .commemtlist dl {
  padding: 20px 0;
  border-bottom: 1px solid #d2d2d2;
}

#comment .commemtlist dl dt {
  float: left;
  text-align: center;
  margin-right: 15px;
}

#comment .commemtlist dl dt img {
  height: 50px;
  width: 50px;
  border-radius: 25px;
}

#comment .commemtlist dl dd {
  padding-bottom: 10px;
}

#comment .commemtlist .btbar span {
  margin-right: 15px;
  font-size: 10px;
}

#comment .commemtlist .btbar .red strong {
  color: red;
  margin: 0 3px;
  font-weight: normal;
  cursor: pointer;
}

#comment .commemtlist .username {
  display: block;
  font-size: 12px;
  text-align: center;
}

#comment .commemtlist .wordsbox textarea {
  height: 100px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  resize: none;
}

#comment .commemtlist .wordsbox span {
  display: flex;
  font-size: 13px;
  margin-right: 15px;
  color: white;
  cursor: pointer;
}

#comment .commemtlist .wordsbox input {
  float: right;
  width: 80px;
  height: 28px;
  text-align: center;
  color: #fff;
  background: red;
  border: none;
  border-radius: 3px;
}
.theme--light.v-sheet {
}
.mx-auto v-card v-sheet theme--light elevation-12 {
  height: 150px;
  width: 344px;
  top: 20px;
}

</style>

