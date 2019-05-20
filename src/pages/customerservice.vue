<template>
  <div class="kf">
    <div class="header">
      <v-layout wrap>
        <v-container class="con">
          <v-layout justify-center>
            <v-btn depressed color="#87CEFA" dark @click.stop="drawer = !drawer">电话</v-btn>
          </v-layout>
        </v-container>

        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list class="pa-1">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <p class="kfdh">客服电话</p>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-card>
                  

                  <v-list>
                    <v-list-group
                      v-for="item in items"
                      :key="item.title"
                      :prepend-icon="item.action"
                      no-action
                    >
                      <template v-slot:activator>
                        <v-list-tile>
                          <v-list-tile-content>
                            <img class="icon" :src=item.adress alt="">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </template>

                      <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click>
                        <v-list-tile-content>
                          <v-list-tile-title >{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                          <v-icon>{{ subItem.action }}</v-icon>
                        </v-list-tile-action>
                      </v-list-tile>
                    </v-list-group>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
            <!-- <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
         
          <v-list-tile-content>
            <p>{{ item.title }}</p>
            <div class="alert" v-for="(item,index) in listt" :key="index">
               <yd-button size="large" type="primary" @click.native="show1 = true">{{item.title}}</yd-button>
                    <yd-popup v-model="show1" position="center" width="90%" >
                     <div style="background-color:#fff;" >
                      {{item.text}}
                      <p style="text-align: center;">
                      <yd-button @click.native="show1 = false">Close Center Popup</yd-button>
                      </p>
                     </div>
        </yd-popup>
            </div>                  
          </v-list-tile-content>
            </v-list-tile>-->
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </div>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="csheader">
        <div class="csheadertext">
          <p>Hi, 买啥啊~ 小韩为您服务</p>
        </div>
      </div>
      <div class="content">
        <img src="../assets/cs.png" alt>
        <p class="tone">若果您还未登录请先登录</p>
        <p class="ttwo">登陆后，可根据服务进行问询</p>
        <router-link :to="{name:'cspage1',params:{id:'14'}}">
          <yd-button size="large" type="hollow">客服</yd-button>
        </router-link>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      show1: false,
      drawer: null,

      number: 0,
      drawer: null,
      
      listt: [
        { title: "1", text: "123" },
        { title: "2", text: "1223" },
        { title: "3", text: "1233" },
        { title: "4", text: "1234" }
      ],
      items: [
        {
          adress:require("../assets/jiaotong.png"),                    
          title: "交通",
          items: [{ title: "国内机票" },
          { title: "国际机票" },
          { title: "火车票" },
          { title: "汽车票" },
          { title: "国内用车" },
          { title: "境外用车" }]
        },
        {
          adress:require("../assets/zhusu.png"),                    
          title: "住宿",
          items: [
            { title: "国内酒店" },
            { title: "国际酒店" },
          ]
        },
        {
          adress:require("../assets/lvxing.png"),                    
          title: "旅行休假",
          items: [{ title: "度假" },
          { title: "门票" },
          { title: "签证" },
          { title: "旅游团购" },
          { title: "周边购" },
          { title: "定制游" }]
        },
        {
          adress:require("../assets/qita.png"),                    
          title: "其他",
          items: [{ title: "保险" },
          { title: "行李寄送" },
          { title: "金融理财" },
          { title: "美食" },
          { title: "会议" },
          { title: "全球购" }]
        },
       
      ]
    };
  },
  computed: {},
  mounted() {
    this.startMove();
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    startMove() {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kf {
  display: flex;
  flex-direction: column;
}
.csheader {
  height: 200px;
  background-color: #87cefa;
}
.csheadertext {
  padding-top: 100px;
  font-family: -webkit-body;
  font-size: 20px;
  color: #f0f0f0;
}
.content {
  height: 367.5px;
}
.content img {
  margin-top: 30px;
  height: 70px;
  width: 20%;
}
.content button {
  width: 30%;
  margin-left: 130px;
  color: white;
  position: relative;
  border: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.1s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
.content button::after {
  content: "";
  background: #87cefa;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}
.content :active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}
.tone {
  font-size: 15px;
}
.ttwo {
  margin-top: 10px;
  color: #aaaaaa;
}
.container {
  padding: 0px;
}
.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  right: 160px !important;
}
.v-btn {
  height: 30px;
}
.header img {
  width: 30px;
  height: 32px;
  margin-right: 10px;
  vertical-align: middle;
  margin-left: 10px;
}
.pa-1 {
  background: #87cefa;
}

.yd-btn-block {
  width: 70px;
  font-size: 12px;
  margin-top: 5px;
  height: 25px;
  border-radius: 100px;
  background: #87cefa;
}
.justify-center {
  background: #87cefa;
}
.v-list--dense .v-list__tile:not(.v-list__tile--avatar) {
  height: 150px;
}
.alert {
}
.kfdh{
  margin-top: 9%;
  margin-left: -65%;
  color: white
}
.kff{
  color: white
}
.icon{
width: 20px!important;
height: 20px!important;
margin-top: 6px;
margin-left: 2px!important
}
.theme--light.v-sheet{
  background-color: white
}
</style>
