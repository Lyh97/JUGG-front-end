<template>
  <v-container fluid grid-list-md>
    <grid-layout :layout="layout" :col-num="12" :row-height="30" :is-draggable="draggable" :is-resizable="resizable" :vertical-compact="true" :use-css-transforms="true">
      <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" @resized="resizedEvent">
        <v-flex fill-height wrap align-content-space-around>
          <v-card color="fff" height="100%" hover>
            <v-layout align-center justify-center row>
              <v-card-title
                class="title pt-2 pb-1"
                primary-title
                style="color: purple;height: 30px;"
              >Lorem
              </v-card-title>
              <v-spacer></v-spacer>
              <v-btn icon small right @click="sheet = true"><v-icon>more_horiz</v-icon></v-btn>
              <v-btn icon small right @click=""><v-icon>zoom_out_map</v-icon></v-btn>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-text style="height: calc(100% - 35px);" class="pa-0">
              <Count :timeStatus="true" :changeStatus="true"></Count>
            </v-card-text>
          </v-card>
        </v-flex>
      </grid-item>
    </grid-layout>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline pt-2 pb-1"
          primary-title
        >
          <v-icon class="pr-2">fa-trash-o</v-icon>Remove Panel
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text
          class="title font-weight-regular font-italic pt-5 pb-5 pl-4 pr-4"
        >
          Are you sure you want to remove this panel?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pt-3 pb-3">
          <v-btn
            block
            color="error"
            @click="dialog = false"
          >
            Remove
          </v-btn>
          <v-btn
            block
            color="primary"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-bottom-sheet v-model="sheet">
      <v-card color="blue-grey">
        <v-layout align-center justify-center row class="grey darken-2">
          <v-card-title
            class="title white--text""
            primary-title
          >
            <span style="color: #aaa">Edit</span>&nbsp;<{{ 'opportunities flow error' }}>&nbsp;<span style="color: #aaa">Card</span>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn dark color="warning" small>
            <v-icon dark >fa-twitter</v-icon>&nbsp;<span style="color: #333">share</span>
          </v-btn>
          <v-btn dark color="error" small @click="dialog = true">
            <v-icon dark >fa-trash</v-icon>&nbsp;<span style="color: #333">remove</span>
          </v-btn>
        </v-layout>
        <v-divider></v-divider>
        <v-card-text class="white">
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </v-container>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'
import draggable from 'vuedraggable'
import Count from './Count.vue'


// var testLayout = [
//   { 'x': 0, 'y': 0, 'w': 6, 'h': 8, 'i': '0' },
//   { 'x': 6, 'y': 0, 'w': 2, 'h': 8, 'i': '1' },
//   { 'x': 8, 'y': 0, 'w': 4, 'h': 8, 'i': '2' },
//   { 'x': 0, 'y': 8, 'w': 7, 'h': 3, 'i': '3' },
//   { 'x': 7, 'y': 8, 'w': 5, 'h': 9, 'i': '4' },
//   { 'x': 0, 'y': 11, 'w': 3, 'h': 6, 'i': '5' },
//   { 'x': 3, 'y': 11, 'w': 4, 'h': 6, 'i': '6' },
// ];

export default {
  data() {
    return {
      dialog: false,
      // layout: testLayout,
      draggable: true,
      resizable: true,
      index: 0,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      layout: [
        { 'x': 0, 'y': 0, 'w': 6, 'h': 8, 'i': '0', 'newwidth': '', 'newheight': '', 'index': 0},
        { 'x': 6, 'y': 0, 'w': 2, 'h': 8, 'i': '1', 'newwidth': '', 'newheight': '', 'index': 1},
        { 'x': 8, 'y': 0, 'w': 4, 'h': 8, 'i': '2', 'newwidth': '', 'newheight': '', 'index': 2},
        { 'x': 0, 'y': 8, 'w': 7, 'h': 3, 'i': '3', 'newwidth': '', 'newheight': '', 'index': 3},
        { 'x': 7, 'y': 8, 'w': 5, 'h': 9, 'i': '4', 'newwidth': '', 'newheight': '', 'index': 4},
        { 'x': 0, 'y': 11, 'w': 3, 'h': 6, 'i': '5', 'newwidth': '', 'newheight': '', 'index': 5},
        { 'x': 3, 'y': 11, 'w': 4, 'h': 6, 'i': '6', 'newwidth': '', 'newheight': '', 'index': 6},
      ],
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      sheet: false
    }
  },
  components: {
    'GridLayout': VueGridLayout.GridLayout,
    'GridItem': VueGridLayout.GridItem,
    draggable,
    Count
  },
  methods:{
    resizedEvent: function(i, newH, newW, newHPx, newWPx){
      // this.$refs[i][0].echarts.resize()
      newHPx = newHPx - 68
      newWPx = newWPx - 32
      this.layout[i]['newwidth'] = newWPx.toString() + 'px'
      this.layout[i]['newheight'] = newHPx.toString() + 'px'
      // this.newwidth = newWPx.toString() + 'px'
      // this.newheight = newHPx.toString() + 'px'
    }
  },
  created: function() {
    // this.axios.get('/ousers/' + '5b750af429b2e9574a7ffa12', {params: {
    //   'access_token': 'WhAOxY3oBUPVLctzcuGhf5mf1N9ssxzOwyKZyv2zHNc98m481zdXnQOxfEbKMZJF'
    // }}).then(response => {

    // })
  }
}

</script>
