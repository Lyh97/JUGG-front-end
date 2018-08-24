<template>
  <v-container fluid grid-list-md>
    <grid-layout :layout="layout" :col-num="12" :row-height="30" :is-draggable="draggable" :is-resizable="resizable" :vertical-compact="true" :use-css-transforms="true">
      <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
        <v-flex fill-height wrap align-content-space-around>
          <v-card color="purple" dark height="100%" hover>
            <v-card-title primary class="title">Lorem</v-card-title>
            <v-card-text>{{ lorem }}</v-card-text>
          </v-card>
        </v-flex>
      </grid-item>
    </grid-layout>
  </v-container>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'
import draggable from 'vuedraggable'


var testLayout = [
  { 'x': 0, 'y': 0, 'w': 6, 'h': 8, 'i': '0' },
  { 'x': 6, 'y': 0, 'w': 2, 'h': 8, 'i': '1' },
  { 'x': 8, 'y': 0, 'w': 4, 'h': 8, 'i': '2' },
  { 'x': 0, 'y': 8, 'w': 7, 'h': 3, 'i': '3' },
  { 'x': 7, 'y': 8, 'w': 5, 'h': 9, 'i': '4' },
  { 'x': 0, 'y': 11, 'w': 3, 'h': 6, 'i': '5' },
  { 'x': 3, 'y': 11, 'w': 4, 'h': 6, 'i': '6' },
];

export default {
  data() {
    return {
      layout: testLayout,
      draggable: true,
      resizable: true,
      index: 0,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  },
  components: {
    'GridLayout': VueGridLayout.GridLayout,
    'GridItem': VueGridLayout.GridItem,
    draggable
  },
  created: function() {
    this.axios.get('/ousers/' + '5b750af429b2e9574a7ffa12', {params: {
      'access_token': 'WhAOxY3oBUPVLctzcuGhf5mf1N9ssxzOwyKZyv2zHNc98m481zdXnQOxfEbKMZJF'
    }}).then(response => {

    })
  }
}

</script>
