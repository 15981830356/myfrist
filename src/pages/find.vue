<template>

<div>
         <mt-header fixed title="发现"></mt-header>

  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
 <div class="content">
<search></search>
  <div style="height: 500px; overflow-y: auto; position: relative;">
        <yd-scrollnav>
        <yd-scrollnav-panel :label="item.label" v-for="(item, key) in list" :key="key">

            <!-- 内容 -->
            <p>{{item.label}}</p>
            <yd-list :theme="1">
                <yd-list-item v-for="i in 6" :key="i">
                    <img slot="img" src="../assets/balidao.jpg">
                    <span slot="title">{{item.label}} - {{item.label}}</span>
                </yd-list-item>
            </yd-list>
            <!-- 内容 -->

        </yd-scrollnav-panel>
    </yd-scrollnav>
    </div>
</div>
</van-pull-refresh>
</div>



        
</template>

<script>
import search from '../components/search';
export default {
    components: {
             search:search

    },
    name: "life",
    data() {
        return {
            selected:"1",
            count: 0,
            isLoading: false,
             list: [
                    {label: '今日特惠'},
                    {label: '烟灶推荐'},
                    {label: '净水饮水推荐'},
                    {label: '洗碗机推荐'},
                    {label: '电热推荐'},
                    {label: '燃热推荐'},
                    {label: '消毒柜推荐'},
                    {label: '嵌入式推荐'},
                    {label: '商用电器'},
                    {label: '活动说明'}
                ]
              };
    },
    watch: {
         
    },
    mounted() {
    },
   methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  margin-top: 40px
}

</style>
