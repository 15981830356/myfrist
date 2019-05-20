<template>
  <div class="ff">
    <div class="headerr">
      <img @click="$router.go(-1)" src="../../assets/back.png" alt>
      <p>添加好友</p>
    </div>
    <div>
      <v-toolbar tabs>
        <v-spacer></v-spacer>

        <template v-slot:extension>
          <v-tabs v-model="tabs" fixed-tabs color="transparent">
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#mobile-tabs-5-1" class="primary--text">找人</v-tab>

            <v-tab href="#mobile-tabs-5-2" class="primary--text">找群</v-tab>

            <v-tab href="#mobile-tabs-5-3" class="primary--text">我的二维码</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs" class="white elevation-1">
        <v-tab-item v-for="i in 3" :key="i" :value="'mobile-tabs-5-' + i">
          <v-card>
            <v-card-title class="indigo white--text headline">个人通讯录</v-card-title>
            <v-layout justify-space-between pa-3>
              <v-flex xs5>
                <v-treeview
                  :active.sync="active"
                  :items="items"
                  :load-children="fetchUsers"
                  :open.sync="open"
                  activatable
                  active-class="primary--text"
                  class="grey lighten-5"
                  open-on-click
                  transition
                >
                  <template v-slot:prepend="{ item, active }">
                    <v-icon v-if="!item.children" :color="active ? 'primary' : ''">mdi-account</v-icon>
                  </template>
                </v-treeview>
              </v-flex>
              <v-flex d-flex text-xs-center>
                <v-scroll-y-transition mode="out-in">
                  <div
                    v-if="!selected"
                    class="title grey--text text--lighten-1 font-weight-light"
                    style="align-self: center;"
                  >Select a User</div>
                  <v-card v-else :key="selected.id" class="pt-4 mx-auto" flat max-width="400">
                    <v-card-text>
                      <v-avatar v-if="avatar" size="88">
                        <v-img :src="`https://avataaars.io/${avatar}`" class="mb-4"></v-img>
                      </v-avatar>
                      <h3 class="headline mb-2">{{ selected.name }}</h3>
                      <div class="blue--text mb-2">{{ selected.email }}</div>
                      <div class="blue--text subheading font-weight-bold">{{ selected.username }}</div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-layout tag="v-card-text" text-xs-left wrap>
                      <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Company:</v-flex>
                      <v-flex>{{ selected.company.name }}</v-flex>
                      <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Website:</v-flex>
                      <v-flex>
                        <a :href="`//${selected.website}`" target="_blank">{{ selected.website }}</a>
                      </v-flex>
                      <v-flex tag="strong" xs5 text-xs-right mr-3 mb-2>Phone:</v-flex>
                      <v-flex>{{ selected.phone }}</v-flex>
                    </v-layout>
                  </v-card>
                </v-scroll-y-transition>
              </v-flex>
            </v-layout>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>
<script>
const avatars = [
  "?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban",
  "?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun",
  "?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong",
  "?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair",
  "?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly"
];

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
export default {
  data() {
    return {
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      active: [],
      avatar: null,
      open: [],
      users: []
    };
  },
  computed: {
    items() {
      return [
        {
          name: "Users",
          children: this.users
        }
      ];
    },
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];

      return this.users.find(user => user.id === id);
    }
  },
  watch: {
    selected: "randomAvatar"
  },

  methods: {
    async fetchUsers(item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(1500);

      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => item.children.push(...json))
        .catch(err => console.warn(err));
    },
    randomAvatar() {
      this.avatar = avatars[Math.floor(Math.random() * avatars.length)];
    }
  }
};
</script>

<style>
.headerr {
  background: #87cefa;
  height: 42px;
}
.headerr img {
  margin-left: -92% !important;
  margin-top: 2% !important;
  width: 22px !important;
  height: 22px !important;
}
.headerr p {
  margin-top: -5%;
}
.v-toolbar__content {
  height: 5px !important;
}
.v-toolbar__extension {
  background: white;
}
.white {
  margin-top: 10px;
}
.v-treeview-node__root {
  margin-left: -40px;
}
</style>


