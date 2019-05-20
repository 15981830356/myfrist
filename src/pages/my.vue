<template>
  <div>
    <div class="header">
      <router-link :to="{name:'friend'}">
        <img src="../assets/friend.png" alt>
      </router-link>
    </div>
    <div id="container">
      <v-hover class="frist">
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="mx-auto"
          width="344"
        >
          <v-card-title>
            <div>
              <mycenter></mycenter>
            </div>
            <v-spacer></v-spacer>
          </v-card-title>
        </v-card>
      </v-hover>
      <div class="two">
        <router-link :to="{name:'dingdan'}">
          <div class="top">
            <div class="left">我的订单</div>
            <div class="right">查看全部订单</div>
          </div>
        </router-link>

        <hr>
        <v-list>
          <v-list-tile
            v-for="color in view"
            :key="color"
            v-ripple="{ class: `${color.col}--text` }"
          >
            <router-link class="tl" :to="{name:color.tt}">
              <img class="iconhy" :src="color.adress" alt>
              <v-list-tile-title>{{color.text}}</v-list-tile-title>
              <img class="ii" src="../assets/enterr.png" alt>
            </router-link>
          </v-list-tile>
          <hr>
        </v-list>
      </div>
      <div class="end">
        <p>客服电话：15981830356</p>
        <p>工作时间：9.30-18.30</p>
        <p>用户协议及隐私政策 --经营执照 --防骗指南</p>
        <!-- <a :href="'tel:' + 110">联系商家</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import mycenter from "../components/mycenter";
import axioshy from 'axios'
export default {
  components: {
    mycenter: mycenter
  },
  data() {
    return {
      reviews: 413,
      value: 4.5,
      view: []
    };
  },
  mounted() {
    this.gethyjson();//挂载后调用取得数据
  },
  methods: {
    gethyjson() {
      axioshy
        .get("http://localhost:8080/static/my.json")
        .then(res =>{this.view = res.data,console.log(res.data)})//res.data为json数据
        .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped="">
.header {
  background: #87cefa;
  height: 42px;
}
.header img {
  margin-top: 10px;
  margin-left: -86%;
}
#container {
  margin-top: -43px;
}
.v-parallax {
  height: 200px !important;
  background: #87cefa;
}
.v-card__title {
  margin-top: 50px;
}
.two {
  height: 380px;
  width: 95%;
  background: white;
  margin-top: 10px;
  margin-left: 2.5%;
  border-radius: 5%;
}
hr {
  background: #87cefa;
}
.top {
  display: flex;
  font-size: 15px;
  height: 45px;
  padding-top: 15px;
  color: grey;
  font-family: fantasy;
}
.top .right {
  margin-left: 52%;
}
.top .left {
  margin-left: 2%;
}
.frist {
  background: #87cefa;
}
.end {
  margin-top: 5%;
}
.theme--light.v-list {
  margin-top: 10px;
}
.ii {
  width: 20px;
  height: 20px;
}
.iconhy {
  width: 25px;
  height: 25px;
  margin-right: 15px;
}
.tl {
  display: flex;
  width: 100%;
}

.v-list__tile {
  width: 100%;
}
.v-list__tile__title {
  margin-top: 0px;
  color: black;
  font-family: -webkit-body;
}
</style>
