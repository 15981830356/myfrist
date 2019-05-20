<template>
  <div>
    <search></search>
    <div class="back" @click="$router.go(-1)">
      <img src="../../assets/back.png" alt>
    </div>
    <div class="charts">
      <ve-histogram :data="chartData"></ve-histogram>
    </div>
    <div class="viewticket">
      <v-toolbar tabs>
        <template v-slot:extension>
          <v-tabs v-model="tabs" fixed-tabs color="transparent">
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#mobile-tabs-5-1" class="primary--text">超值自由行</v-tab>

            <v-tab href="#mobile-tabs-5-2" class="primary--text">低价出售</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs" class="white elevation-1">
        <v-tab-item v-for="i in 3" :key="i" :value="'mobile-tabs-5-' + i">
          <v-card v-for="i in 6" :key="i">
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-card>
                  <v-img
                    class="white--text"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">Top 10 Australian beaches</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">天津</span>
                      <br>
                      <span>五日游</span>
                      <br>
                      <span>￥1750起/人</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">抢购</v-btn>
                    <v-btn flat color="orange"></v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import search from "../../components/search";
export default {
  components: {
    search: search
  },
  data() {
    return {
      ad: this.$route.params.id,
      chartData: {
        columns: ["日期", "郑州", "本地", "流动率"],
        rows: [
          { 日期: "1/1", 郑州: 1393, 本地: 1093, 流动率: 0.32 },
          { 日期: "1/2", 郑州: 3530, 本地: 3230, 流动率: 0.26 },
          { 日期: "1/3", 郑州: 2923, 本地: 2623, 流动率: 0.76 },
          { 日期: "1/4", 郑州: 1723, 本地: 1423, 流动率: 0.49 },
          { 日期: "1/5", 郑州: 3792, 本地: 3492, 流动率: 0.323 },
          { 日期: "1/6", 郑州: 4593, 本地: 4293, 流动率: 0.78 }
        ]
      },
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  mounted: function() {
    console.log(this.ad);
  },

  methods: {}
};
</script>


<style scoped>
.back {
  z-index: 999;
  margin-top: -38px;
  position: relative;
  width: 30px;
  margin-left: 5px;
}
.back img {
  margin-top: -2px;
  width: 22px;
  margin-left: -5px;
  height: 20px;
}
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.charts {
  margin-top: 5%;
}
.viewticket {
  margin-top: -40px;
}
.v-card__actions{
  margin-top: -25px
}
</style>


