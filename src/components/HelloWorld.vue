<template>
   <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">
       
      </div>
      	<router-view/>
    </div>
    <mt-tabbar v-model="selected" fixed >
      <mt-tab-item id="hot">
        <img slot="icon" src="..\assets\hot.png">
        热卖
      </mt-tab-item>
      <mt-tab-item id="dingdan">
        <img slot="icon" src="..\assets\dingdan.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="find">
        <img slot="icon" src="..\assets\find.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="customerservice">
        <img slot="icon" src="..\assets\cs1.png">
        客服
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="..\assets\my.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
 
      selected: 'hot'
        }
  },
  watch: {
      selected: function (val, oldVal) {
        console.log(val);
        this.$router.push({name:val})
        // click后打印出当前mt-tab-item的id
      }
    },
    '$route'(to,from){
        this.selected=to.name
    },
    beforeDestroy(){
      this.selected=this.$route.name;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  a{
  color: black
}


</style>
