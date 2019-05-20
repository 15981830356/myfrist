<template>
<div>
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
</div>
 
</template>
<script>
export default {
  data(){return{
            e2: 'Texas',
            states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      items: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ],

  }
                

  }
  ,methods:{
    
  }
  
}
</script>

<style>

.theme--light.v-icon{
    display: none
}
.theme--light.v-select .v-select__selections{
    margin-left: 30px
}
.theme--light.application{
  background: white;
  height: 1px;
}
.v-select__slot{
  margin-block-start: -60px
}
.theme--light.application{
  background: white
}
.v-input__slot{
  width: 0.1px
}
.theme--light.v-select .v-select__selections{
  margin-left: -10px
}
</style>

