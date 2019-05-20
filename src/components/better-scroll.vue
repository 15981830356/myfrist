<template>
  <van-tabs v-model="active" swipeable>
    <van-tab v-for="(item,index) in addres" :title="item.title" :key="index">
      <div>
        <v-hover>
          <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img :aspect-ratio="16/9" :src="item.adress">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >top{{item.num}}</div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-4" style="position: relative;">
              <router-link :to="{name:'view',params:{id:item.title}}">
                <v-btn absolute color="orange" class="white--text" fab large right top>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
              </router-link>

              <div  class="font-weight-light grey--text title mb-2">{{item.title}}</div>
              <h3 class="display-1 font-weight-light orange--text mb-2">1</h3>
              <div class="font-weight-light title mb-2">热门景点</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </div>
    </van-tab>
  </van-tabs>
</template>
<script>
export default {
  data() {
    return {
      active: "",
      addres: [
        {
          num: "1",
          adress:
            require("../assets/zz.jpg"),
          title: "天津"
        },
        {
          num: "2",
          adress:
             require("../assets/view1.jpg"),
          title: "北京"
        },
        {
          num: "3",
          adress:
             require("../assets/view2.jpg"),
          title: "武汉"
        },
        {
          num: "4",
          adress:
             require("../assets/view3.jpg"),
          title: "成都"
        },
        {
          num: "5",
          adress:
             require("../assets/view1.jpg"),
          title: "西安"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.yd-mask {
  background-color: white;
}
p {
  margin-bottom: 0px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

