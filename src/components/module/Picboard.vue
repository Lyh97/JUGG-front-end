<template id="picboard">
  <v-card height="100%" color="grey darken-2" hover>
    <v-layout align-center justify-center row>
      <v-card-title
        class="subheading pt-2 pb-1 font-weight-bold"
        primary-title
        style="color: #fff;"
      >
        {{title}}
      </v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon small right @click="opensheet()"><v-icon>more_horiz</v-icon></v-btn>
      <v-btn icon small right @click="large()"><v-icon>zoom_out_map</v-icon></v-btn>
    </v-layout>
    <v-divider></v-divider>
    <v-card-text style="background-color: #fff">
      <ve-line
        :data="chartData"
        :toolbox="toolbox"
        :ref="item.i"
        :width="item.newwidth" :height="item.newheight"
        >
      </ve-line>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Picboard',
    props: ['item'],
    data() {
      this.toolbox = {
        feature: {
          magicType: {type: ['line', 'bar']},
          saveAsImage: {}
        }
      }
      return {
        chartData: [],
        title: ''
      }
    },
    methods: {
      getchartData() {
        this.axios.get('http://localhost:8080/static/picconfig.json')
        .then((response)=>{
          this.chartData = response.data.chartData
          this.title = response.data.title
        })
      },
      opensheet() {
        this.$store.commit('sheetshow')
      },
      large() {
        this.$store.commit('openlarge')
        this.$router.push('/dashboard/chartlarge')
      }
    },
    created: function() {
      this.getchartData()
    }
  }

</script>