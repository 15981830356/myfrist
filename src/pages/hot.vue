<template>
  <div class="appp">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="hot">
        <div class="header">
          <img src="../assets/dingwei.png" alt>
          <input
            slot="right"
            type="text"
            @click.stop="show2 = true"
            v-model="model2"
            readonly
            placeholder="请选择收货地址"
          >

          <yd-popup v-model="show2" position="bottom" height="60%">
            <yd-cell-group>
              <yd-cell-item arrow>
                <span slot="left">所在地区：</span>
                <input
                  slot="right"
                  type="text"
                  @click.stop="show2 = true"
                  v-model="model2"
                  readonly
                  placeholder="请选择收货地址"
                >
              </yd-cell-item>
            </yd-cell-group>

            <yd-cityselect
              v-model="show2"
              ref="cityselectDemo"
              :callback="result2"
              :items="district"
              provance="新疆"
              city="乌鲁木齐市"
              area="天山区"
            ></yd-cityselect>
          </yd-popup>
        </div>

        <search></search>
        <div class="lunbox">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="n in src" :key="n">
              <img class="lunboximg" :src="n.addres" alt>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="toutiao">
          <div class="toutiaoheader">
            <div class="toutiaoheaderleft">
              <img src="../assets/hott.png" alt>
              <mt-badge type="warning">hot</mt-badge>
            </div>
            <div class="toutiaoheaderright">
              <yd-rollnotice autoplay="2000">
                <yd-rollnotice-item>
                  <span style="color:#F00;">推荐：</span>荣耀V9 3月超级钜惠！
                </yd-rollnotice-item>
                <yd-rollnotice-item>
                  <span style="color:#F00;">推荐：</span>3.23京东品牌日格力盛典
                </yd-rollnotice-item>
                <yd-rollnotice-item>
                  <span style="color:#F00;">推荐：</span>京东服饰 早春新品低至7折
                </yd-rollnotice-item>
              </yd-rollnotice>
            </div>
          </div>
          <div class="toutiaocontent">
            <div class="toutiaocontentt">
              <div class="toutiaocontent1">
                <!-- <img slot="img"  :src="item.adress" alt=""> -->
                <yd-flexbox class="textheader">
                  <yd-flexbox-item>起点</yd-flexbox-item>
                  <yd-flexbox-item>终点</yd-flexbox-item>
                </yd-flexbox>

                <yd-flexbox class="textmiddle">
                  <yd-flexbox-item>
                    <div class="addres">
                      <input
                        slot="right"
                        type="text"
                        @click.stop="show2 = true"
                        v-model="model2"
                        readonly
                        placeholder="请选择地址"
                      >
                    </div>
                  </yd-flexbox-item>
                  <yd-flexbox-item>
                    <img src="../assets/plane.png" alt style="width:70px">
                  </yd-flexbox-item>
                  <yd-flexbox-item>
                    <v-app id="inspire">
                      <v-container fluid>
                        <v-layout row wrap align-center>
                          <v-flex xs6>
                            <v-select
                              v-model="e2"
                              :items="states"
                              append-outer-icon="map"
                              menu-props="auto"
                              hide-details
                              label="Select"
                              single-line
                            ></v-select>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-app>
                  </yd-flexbox-item>
                </yd-flexbox>
                <yd-flexbox class="textbottom">
                  <div class="date">
                    <img src="../assets/date.png" alt>
                    <yd-cell-item arrow>
                      <yd-datetime type="day" v-model="datetime2" slot="right"></yd-datetime>
                    </yd-cell-item>
                  </div>
                  <div class="query">
                    <router-link
                      v-model="model2"
                      :to="{name:'chaxun',params:{id:this.model2,idd:this.e2,iddate:this.datetime2}}"
                    >
                      <yd-button type="primary" shape="circle">
                        <yd-icon name="search"></yd-icon>查询
                      </yd-button>
                    </router-link>
                  </div>
                </yd-flexbox>
              </div>
            </div>
          </div>
        </div>
        <div class="yzb">
          <div class="yzbtext">优质出行</div>
          <router-link :to="{name:'find',params:{id:'14'}}">
            <div class="yzbtext1">
              查看更多
              <img src="../assets/moree.png" alt>
            </div>
          </router-link>
          <div class="yzbb">
            <yd-slider autoplay="3000" direction="vertical">
              <yd-slider-item>
                <a href="http://www.ydcss.com">
                  <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
                </a>
              </yd-slider-item>
              <yd-slider-item>
                <a href="http://www.ydcss.com">
                  <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
                </a>
              </yd-slider-item>
              <yd-slider-item>
                <a href="http://www.ydcss.com">
                  <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
                </a>
              </yd-slider-item>
            </yd-slider>
            <div class="yzbbb">
              <img src="../assets/jipao.jpg" alt>
              <img src="../assets/balidao.jpg" alt>
            </div>
          </div>
        </div>
        <div class="recommend">最新商品推荐</div>
        <div class="slidetable">
          <scroll></scroll>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import search from "../components/search";
import District from "ydui-district/dist/jd_province_city_area_id";
import scroll from "../components/better-scroll";
import toplace from "../components/toplace";

export default {
  components: {
    search: search,
    scroll: scroll,
    toplace: toplace
  },
  data() {
    return {
      value: "",
      number: 0,
      count: 0,
      isLoading: false,
      page: 1,
      datetime2: "03-29",
      pageSize: 10,
      src: [
        { addres: require("../assets/zz.jpg") },
        { addres: require("../assets/zz.jpg") },
        { addres: require("../assets/zz.jpg") },
        { addres: require("../assets/zz.jpg") },
        { addres: require("../assets/zz.jpg") }
      ],
      rmdt: [
        {
          adress: require("../assets/zz.jpg"),
          title: "药"
        },
        {
          adress: require("../assets/view2.jpg"),
          title: "药1"
        },
        {
          adress: require("../assets/view3.jpg"),
          title: "药2"
        }
      ],
      show2: false,
      model2: "郑州",
      model3: "郑州",
      district: District,

      e2: "Texas",
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      items: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" }
      ]
    };
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number]
      };
    }
  },
  mounted() {
    this.startMove();
  },
  methods: {
    test(id) {
      this.active = id;
      console.log(this.active);
    },
    startMove() {
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    result2(ret) {
      this.model2 = ret.itemName2;
      console.log(this.model2);
    }
  }
};
</script>
<style>
.appp {
  margin-top: 0px;
}
.header {
  height: 40px;
  background-color: #87cefa;
}
.header input {
  margin-top: 13px;
  border: 0;
  color: white;
  font-size: medium;
}
.header img {
  width: 23px;
  height: 22px;
  margin-right: 10px;
  vertical-align: middle;
  margin-left: 120px;
}
.search {
  height: 52px;
}
.mint-searchbar-cancel {
  color: white;
}
.lunbox {
  width: auto;
  height: 100px;
  border: 1px solid black;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
}
.lunboximg{
width: 100%;
  height: 100%;}
.toutiao {
  
}

.toutiaoheader {
  height: 30px;
  border-radius: 10%;
}
.toutiaoheaderleft {
  float: left;
  width: 50%;
  height: 100%;
}
.toutiaoheaderleft img {
  margin-left: -50px;
  position: relative;
  width: 80px;
  vertical-align: middle;
}

.toutiaoheaderright {
  float: right;
  width: 50%;
  height: 100%;
}

.yd-rollnotice {
  background-color: #f5f5f5;
}
.yd-scrollnav {
  position: inherit;
}
/* 文字上下滚动*/
/* .textBox {
    width: 100%;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .text {
    width: 100%;
    position: absolute;
    bottom:18px;
    color: rosybrown
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  } */
/* */

.nav {
  display: flex;
}
.nav button {
  flex: 1;
  text-align: center;
}
.more {
  margin-top: 5px;
}
.toutiaocontent {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  /* margin-left:9px; */
  /* border-radius:5%; */
  padding: 4px;
  background: cornsilk;
}
.toutiaocontentt {
  margin-top: 14px;
  background: white;
  width: 90%;
  height: 120px;
  margin-left: 5%;
  border-radius: 5%;
}
.toutiaocontent1 {
  display: flex;
  flex-direction: column;
}

.textheader {
  color: #969696;
}
.textmiddle {
  font-size: large;
  font-weight: 500;
}
.textmiddle img {
  width: 11px;
}
.yd-flexbox {
  margin-top: 10px;
}
.date {
  display: flex;
  flex-direction: row;
  margin-left: 25px;
  width: 100%;
}
.date img {
  width: 22px;
  height: 25px;
  margin-top: 10px;
}
.query {
  margin-left: 130px;
  width: 100%;
}
.addres input {
  border: aliceblue;
  width: 100px;
  margin-left: 25px;
  text-align: center;
}
.yd-icon-search:before {
  margin-bottom: 2px;
}
.van-tabs__line {
  background-color: #26a2ff;
}
.van-tabs__content {
}
.slidetable {
}
.yd-cityselect-active {
  height: 530px;
}
.yd-popup-show {
  height: 70%;
}
.yzbb {
  margin-left: 9px;
  width: 95%;
  height: 150px;
  background: white;
  border-radius: 5%;
  display: flex;
  flex-direction: row;
}
.yd-slider-item img {
  width: 230px;
  height: 145px;
  margin-top: 2px;
  border-radius: 2%;
}
.yd-slider-pagination-vertical {
  left: 220px;
  bottom: 50px;
}
.yzbbb {
  display: flex;
  flex-direction: column;
}
.yzbbb img {
  width: 124px;
  height: 48%;
  border-radius: 5%;
}
.yzbtext {
  margin-left: 8px;
  font-size: 15px;
  float: left;
  font-weight: 600;
  margin-bottom: 5px;
}
.yzbtext1 {
  width: 100%;
  margin-left: 150px;
  color: #969696;
}
.yzbtext1 img {
  width: 12px;
  height: 15px;
  padding-top: 5px;
}

.theme--light.v-icon {
  display: none;
}
.theme--light.v-select .v-select__selections {
  margin-left: 30px;
}
.theme--light.application {
  background: white;
  height: 1px;
}
.v-select__slot {
  margin-block-start: -60px;
}
.theme--light.application {
  background: white;
}
.v-input__slot {
  width: 0.1px;
}
.theme--light.v-select .v-select__selections {
  margin-left: -10px;
}
.yd-cell-item {
  width: 80px;
}

.orange.darken-2 {
  background: black !important;
}
</style>