<template>
<div class="search">
            
           <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
           </mt-search>    
</div>    
</template>
<script>
    import District from 'ydui-district/dist/jd_province_city_area_id';

export default {
    data(){
        return{
            value:"",
            show2: false,
            model2: '新疆 乌鲁木齐市 天山区',
            district: District
        }
    },
    methods:{
        result2(ret) {
                this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
            }
    }
}
</script>

<style>
.search{
    background-color: #87CEFA
}
.mint-searchbar{
    background: #87CEFA
}
.mint-searchbar-inner{
    margin-left: 30px
}
.mint-search{
  height: 100%!important
}
</style>


