<template>
  <div>
    <div class="backTo">
      <header class="m-navbar">
        <a href="#" class="navbar-item" @click="$router.go(-1)">
          <img class="img" src="../../assets/back.png" alt>
        </a>
        <div class="navbar-center">
          <span class="navbar-title">{{uid}}———>{{e2}}</span>
        </div>
        <a href="#" class="navbar-itemm">
          <router-link :to="{name:'customerservice'}">
            <img class="imgg" src="../../assets/kefu.png" alt>
          </router-link>
        </a>
      </header>
    </div>
    <div>
      <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
        <v-tab v-for="n in address" :key="n" ripple>{{ n.text }}</v-tab>
        <p class="pp">月份：{{datetime}}</p>
        <v-tab-item v-for="n in address" :key="n">
          <v-card flat>
            <v-card-text>
              <v-timeline v-for="item in n.content" :key="item">
                <v-timeline-item  color="purple lighten-2" fill-dot right>
                  <v-card @click="goumai">
                    <v-card-title class="purple lighten-2" >
                      <h2 class="display-1 white--text font-weight-light">{{item.title}}</h2>
                    </v-card-title>
                    <v-container>
                      <v-layout>
                        <v-flex
                          xs10
                        >{{item.money}}.                        
                        </v-flex>
                        <v-flex xs2>
                          <v-icon size="64">mdi-calendar-text</v-icon>
                        </v-flex>
                      </v-layout>
                    </v-container>
                                            <v-flex>经济舱3.5折.</v-flex>

                  </v-card>
                </v-timeline-item>

                <v-timeline-item color="amber lighten-1" fill-dot left small>
                  <v-card>
                    <v-card-title class="amber lighten-1 justify-end">
                      <h2 class="display-1 mr-3 white--text font-weight-light">{{item.title1}}</h2>
                    </v-card-title>
                    <v-container>
                      <v-layout>
                        <v-flex
                          xs8
                        >{{item.money1}}.</v-flex>
                      </v-layout>
                    </v-container>
                        <v-flex>经济舱3.5折.</v-flex>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item color="cyan lighten-1" fill-dot right>
                  <v-card>
                    <v-card-title class="cyan lighten-1">
                      <h2 class="display-1 white--text font-weight-light">{{item.title2}}</h2>
                    </v-card-title>
                    <v-container>
                      <v-layout>
                        <v-flex xs4>{{item.money2}}.</v-flex>
                      </v-layout>
                    </v-container>
                        <v-flex>经济舱3.5折.</v-flex>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item color="red lighten-1" fill-dot left small>
                  <v-card>
                    <v-card-title class="red lighten-1 justify-end">
                      <h2 class="display-1 mr-3 white--text font-weight-light">{{item.title3}}</h2>
                    </v-card-title>
                    <v-container>
                      <v-layout>
                        <v-flex xs2>
                          <v-icon size="64">mdi-server-network</v-icon>
                        </v-flex>
                        <v-flex
                          xs10
                        >{{item.money3}}.</v-flex>
                      </v-layout>
                    </v-container>
                        <v-flex>经济舱3.5折.</v-flex>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item color="green lighten-1" fill-dot right>
                  <v-card>
                    <v-card-title class="green lighten-1">
                      <h2 class="display-1 white--text font-weight-light">{{item.title4}}</h2>
                    </v-card-title>
                    <v-container>
                      <v-layout>
                        <v-flex>{{item.money4}}.</v-flex>
                      </v-layout>
                    </v-container>
                        <v-flex>经济舱3.5折.</v-flex>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <div class="text-xs-center mt-3">
        <v-btn @click="next">next tab</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      uid: this.$route.params.id,
      e2: this.$route.params.idd,
      datetime: this.$route.params.iddate,
      address: [
        {text:'机票',
        content:[
          {title:'07:06----08::39',title1:'09:56----11:00',title2:'11:20----12:40',title3:'13:00-14:20',title4:'15:00----16:20',
          money:'￥440',money1:'￥441',money2:'￥442',money3:'￥443',money4:'￥444',
          },
        ]
        },
        {text:'火车票',
        content:[
          {title:'07:02----08::39',title1:'09:56----11:00',title2:'11:20----12:40',title3:'13:00-14:20',title4:'15:00----16:20',
           money:'￥444',money1:'￥441',money2:'￥442',money3:'￥443',money4:'￥444',
         
          }
          ]
},
        {text:'高铁票',
        content:[{title:'1-4'},{title:'2-4'},{title:'3-4'},{title:'4-4'},{title:'5-4'}]
},

      ],
      
       
    };
  },
  computed: {
    theme() {
      return this.$store.getters.THEME_COLOR;
    }
  },
  mounted: function() {
    console.log(this.uid);
    console.log(this.e2);
    console.log(this.datetime);
  },
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    },
    goumai(){
      alert("123")
    }
  }
};
</script>


<style scoped>
.backTo {
  display: flex;
  flex-direction: row;
  background: #87cefa;
  height: 40px;
}
img {
  width: 20px;
}
.img {
  float: left;
}
.imgg {
  float: right;
  margin-right: 10px;
}
header {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.m-navbar a {
  margin-top: 10px;
  margin-left: 6px;
  width: 100%;
}
.navbar-center {
  margin-top: 11px;
  margin-left: 50px;
}
.navbar-itemm {
  margin-left: 60px !important;
}
.navbar-center {
  width: 1000px;
}
.pp{
  margin-top: 4%;
  margin-left: 30%;
  width: 15%;
}
.display-1 {
    font-size: 13px!important;
    line-height: 25px!important
}
.mr-3{
  margin-right: 0px!important
}
.container {
  height: 20px;
 font-size: medium;
  margin-top: -10px;
  margin-bottom: 5px;
  color: #FF6347
}
.v-card__text{
  background: floralwhite
}
</style>


