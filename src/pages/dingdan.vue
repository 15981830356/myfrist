<template>
<div>
         <mt-header fixed title="订单">
         </mt-header>

  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="shopcar" id="demo04">
    <div class="header-title">

    </div>
    <div class="car-list">
      <ul>
        <li class="car-item" v-for="(item,index) in good_list" :key="index">
          <div class="input-block">
            <label class="input-label" :class="{active: item.is_selected}" :for="'car-checkbox-'+index" @click="select_one(index)"></label>
          </div>
          <div class="car-item-content">
            <div class="car-img">
              <img :src="item.img" />
            </div>
            <div class="car-cont">
              <h3>{{item.title}}</h3>
              <!-- <div class="cat-desc">
                <span v-for="spec in item.spec_item" :key="spec">{{spec}}</span>
              </div> -->
            </div>
            <div class="num">
              <span @click="reduce(index)">-</span>
              <span>{{item.num}}</span>
              <span @click="add(index)">+</span>
            </div>
            <div class="car-price">
              <span class="car-price">￥{{item.price}}</span>
              <span class="car-num">X{{item.num}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="car-footer">
      <div class="foot-car">
        <label for="foot-check" class="input-label" :class="{active: selected_all}" @click="slect_all"></label>
      </div>
      <div class="total-cont">
        <span>总价：{{totalPrice}}</span>
        <span>共{{totalNum}}件</span>
      </div>
      <div class="btn-box">
        <button>立即下单</button>
      </div>
    </div>
  </div>
</van-pull-refresh>
</div>

 
</template>

<script>
export default {
    data () {
      return {
        count: 0,
      isLoading: false,
        good_list: [
          {
            title: '阿迪达斯官网Harden Vol.3 男子场上篮球鞋EE3956 EE3961',
            img: "1.jpg",
            num: 2,
            price: 6070.00,
            spec_item:[
              
            ],
            is_selected: false
          },{
            title: 'NBA 迈阿密热火队 Nike Courtside 男子 NBA 夹克 AH5285-010',
            img: '1.jpg',
            num: 2,
            price: 4570.00,
            spec_item:[
              
            ],
            is_selected: true
          },{
            title: 'Nike Kyrie 5 Taco 欧文5笑脸UFO曼巴AO2919-101-901 AO2918-400',
            img: '1.jpg',
            num: 2,
            price: 4870.00,
            spec_item:[
              
            ],
            is_selected: false
          },{
            title: '兄弟体育 Nike KD11 杜兰特11 KD12 首发黑白 AO2605 AR4230-001',
            img: '1.jpg',
            num: 2,
            price: 10568.00,
            spec_item:[
              
            ],
            is_selected: true
          },
        ],
        totalPrice: 0,
        totalNum: 0,
        selected_all: false
      }
    },
    mounted: function () {
      this.getTotal();
    },
    watch: {
      'good_list': {
        handler: function (val, oldVal) {
          // console.log(val)
          return val;
        },
        deep: true
      }
    },
    methods: {
      getTotal () {
        this.totalPrice = 0
        this.totalNum = 0
        for (var i = 0; i < this.good_list.length; i++) {
          var _d = this.good_list[i]
          if(_d.is_selected){
            this.totalPrice += _d['price'] * _d['num']
            this.totalNum +=_d['num']
          }
        }
      },
      onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
      select_one (index) {
        if(this.good_list[index].is_selected == true){
          this.good_list[index].is_selected = false
        }else{
          this.good_list[index].is_selected = true
        }
        this.getTotal()
      },
      slect_all () {
        if(this.selected_all){
          for (var i = 0; i < this.good_list.length; i++) {
            this.good_list[i].is_selected = false;
          }
          this.selected_all = false            
        }else{
          for (var i = 0; i < this.good_list.length; i++) {
            this.good_list[i].is_selected = true;
          }
          this.selected_all = true            
        }
        this.getTotal()
      },
      reduce (index) {
        if(this.good_list[index].num <= 1) return;
        this.good_list[index].num --
        this.getTotal()
      },
      add (index) {
        this.good_list[index].num ++
        this.getTotal()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .header-title{
  height:42px;
  line-height:42px;
  background :#f5f5f5;
  border-bottom: 1px solid #ddd;
  }
.header-title h3{
  font-weight:normal;
  text-align :center
}
.car-list{
  background :#f2f2f2;
  margin-top :12px;
  padding :8px
}
.car-item{
  border-bottom:1px solid #ddd;
  position:relative;
  height:100px;
  overflow:hidden}
.car-checkbox{
  display:none;
}
.input-block{
  width:30px;
  float:left;
  height:55px;
  line-height:55px}
.input-label{
  cursor:pointer;
  position:absolute;
  width:18px; 
  height:18px; 
  top:18px; 
  left:0; 
  background:#fff; 
  border:2px solid #ccc;
  border-radius:50%
}
.input-label:after {
  opacity:0 ;
  content:'';
  position:absolute ;
  width:9px;
  height:5px;
  background:transparent; 
  top:6px; 
  left:6px; 
  border:2px solid #333; 
  border-top:none; 
  border-right:none; 
  -webkit-transform:rotate(-45deg); 
  -moz-transform:rotate(-45deg); 
  -o-transform:rotate(-45deg); 
  -ms-transform:rotate(-45deg); 
  transform:rotate(-45deg) 
}
.car-img{
  width:64px;
  height:64px;
  float:left;
  overflow:hidden
}
.car-img img{
  width:100%
}
.input-label.active
{
  background:#F15A24
}
.car-cont{
  margin-left:100px
  }
.car-cont h3{
  font-weight:normal;
  line-height:24px;
  font-size:14px;
}
.car-price{ 
  position:absolute;
  right:12px;
  bottom:0px;
  width:40px;
  height:40px;
  text-align:right
}
.car-price span{
  display:block;
  height:24px;
  line-height:24px;
  width:100%
  }
.car-footer{ 
  height:60px;
  background:#f5f5f5;
  position:relative;
  left:0;
  right:0;
}
.foot-car{
  width:42px;
  height:60px;
  float:left;
  margin-left:12px;
  position:relative
  }
.total-cont{ 
  height:60px;
  line-height:60px;
  font-size:16px;
  float:left
}
.total-cont span{
  display:inline-block; 
  margin-left:12px
}
.btn-box{
  float:right;
  height:60px;
  line-height:60px
}
.btn-box button{
  height:100%;
  width:100px;
  border:none;
  background:#F15A24;
  color: #fff;
  font-size:16px
}
.num{
  position:absolute;
  top:70px;
  right:70px;
  width:120px
  }
.num span{
  display:inline-block;
  width:28px;
  height:28px;
  text-align:center;
  line-height:28px;
  border:1px solid #ddd;
  font-size:14px
}
.cat-desc{
    left: 20px;
}
.car-num{
    color: #F15A24
}
</style>
