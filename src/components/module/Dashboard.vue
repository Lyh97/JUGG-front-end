<template>
  <v-container fluid grid-list-md>
    <!-- <router-view></router-view> -->
    <grid-layout :layout="layout" :col-num="12" :row-height="30" :is-draggable="draggable" :is-resizable="resizable" :vertical-compact="true" :use-css-transforms="true">
      <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" @resized="resizedEvent">
        <v-flex fill-height wrap align-content-space-around>
          <!-- <MoreTasksCountTable title="MoreTasksCountTable"></MoreTasksCountTable> -->
          <!-- <picboard :item="item"></picboard> -->
          <!-- <Count></Count> -->
          <component :is="item.type" :item="item"></component>
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
    <v-bottom-sheet v-model="this.$store.state.sheet" persistent>
      <v-card style="margin:0px 10px 20px 10px;">
        <MoreTasksCountTable></MoreTasksCountTable>
      </v-card>
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
          <v-btn dark icon @click="closesheet()"><v-icon>close</v-icon></v-btn>
        </v-layout>
        <v-divider></v-divider>
        <v-card-text class="white">
          <v-card>
            <v-card-text>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12 sm3>
                    <v-checkbox
                      v-model="mode"
                      label="Multi-line (mobile)"
                      value="multi-line"
                    ></v-checkbox>
                  </v-flex>

                  <v-flex xs12 sm3>
                    <v-checkbox
                      v-model="mode"
                      label="Vertical (mobile)"
                      value="vertical"
                    ></v-checkbox>
                  </v-flex>

                  <v-flex xs12 sm4 offset-sm4>
                    <v-text-field
                      v-model="text"
                      label="Text"
                      type="text"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm4>
                    <v-text-field
                      v-model.number="timeout"
                      label="Timeout"
                      type="number"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>

              <v-btn
                block
                color="primary"
                dark
                @click="snackbar = true"
              >
                Show Snackbar
              </v-btn>
            </v-card-text>
            <v-snackbar
              v-model="snackbar"
              :color="color"
              :multi-line="mode === 'multi-line'"
              :timeout="timeout"
              :vertical="mode === 'vertical'"
            >
              {{ text }}
              <v-btn
                dark
                flat
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </v-snackbar>
          </v-card>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
    <!-- <router-view></router-view> -->
    <v-dialog v-model="this.$store.state.large">
      <router-view></router-view>
    </v-dialog>
    <v-dialog v-model="this.$store.state.dashboard_dialog" :width="dialogwidth">
                <v-stepper v-model="e1">
                    <v-stepper-header>
                      <v-stepper-step :complete="e1 > 1" step="1">Choose Type</v-stepper-step>

                      <v-divider></v-divider>

                      <v-stepper-step :complete="e1 > 2" step="2">Choose Task</v-stepper-step>

                      <v-divider></v-divider>

                      <v-stepper-step step="3">Choose Template</v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                      <v-stepper-content step="1">
                        <v-card>
                            <v-card-title
                            primary-title
                            class="title"
                            >Please choose your task type</v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-container fluid>
                                    <v-layout row wrap align-center>
                                      <v-flex xs6>
                                        <v-subheader>Type items</v-subheader>
                                      </v-flex>

                                      <v-flex xs6>
                                        <v-select
                                          v-model="select"
                                          :hint="`${select.state}, ${select.abbr}`"
                                          :items="items"
                                          item-text="state"
                                          item-value="abbr"
                                          label="Select"
                                          persistent-hint
                                          return-object
                                          single-line
                                        ></v-select>
                                      </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                        </v-card>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row pt-2>
                            <v-btn
                              block
                              color="primary"
                              @click="continueone()"
                              class="mr-1"
                            >
                              Continue
                            </v-btn>

                            <v-btn block disabled class="ml-1">Back</v-btn>
                        </v-layout>
                      </v-stepper-content>

                      <v-stepper-content step="2">
                        <v-card>
                            <v-card-title
                                primary-title
                                class="title"
                            >
                                Choose task
                              <v-spacer></v-spacer>
                              <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Search"
                                single-line
                                hide-details
                              ></v-text-field>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-data-table
                                    :headers="headers"
                                    :items="desserts"
                                    :search="search"
                                    v-model="selected"
                                    item-key="name"
                                    select-all
                                    class="elevation-1"
                                  >
                                    <template slot="headerCell" slot-scope="props">
                                      <v-tooltip bottom>
                                        <span slot="activator">
                                          {{ props.header.text }}
                                        </span>
                                        <span>
                                          {{ props.header.text }}
                                        </span>
                                      </v-tooltip>
                                    </template>
                                    <template slot="items" slot-scope="props">
                                      <td>
                                        <v-checkbox
                                          v-model="props.selected"
                                          primary
                                          hide-details
                                        ></v-checkbox>
                                      </td>
                                      <td>{{ props.item.name }}</td>
                                      <td class="text-xs-right">{{ props.item.success }}</td>
                                      <td class="text-xs-right">{{ props.item.failure }}</td>
                                      <td class="text-xs-right">{{ props.item.retrySuccess }}</td>
                                      <td class="text-xs-right">{{ props.item.retryFailure}}</td>
                                      <td class="text-xs-right">{{ props.item.successRate}}</td>
                                    </template>
                                </v-data-table>
                            </v-card-text>
                        </v-card>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row pt-2>
                            <v-btn
                              block
                              color="primary"
                              @click="continuetwo()"
                              class="mr-1"
                            >
                              Continue
                            </v-btn>

                            <v-btn block @click="backone()" class="ml-1">Back</v-btn>
                        </v-layout>
                      </v-stepper-content>

                      <v-stepper-content step="3">
                        <v-card>
                            <v-card-title
                                primary-title
                                class="title"
                            >Choose your Template</v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-layout align-center justify-center row>
                                    <v-btn dark color="success" small @click="submit('Count')">
                                        <v-icon dark >fa-book</v-icon>&nbsp;<span style="color: #333">Text</span>
                                    </v-btn>
                                    <v-btn dark color="warning" small @click="submit('Picboard')">
                                        <v-icon dark >fa-line-chart</v-icon>&nbsp;<span style="color: #333">Chart</span>
                                    </v-btn>
                                    <v-btn dark color="error" small @click="submit('CountTable')">
                                        <v-icon dark >fa-table</v-icon>&nbsp;<span style="color: #333">Table</span>
                                    </v-btn>
                                    <v-btn dark color="info" small @click="submit()">
                                        <v-icon dark >fa-object-group</v-icon>&nbsp;<span style="color: #333">All</span>
                                    </v-btn>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row pt-2>
                            <v-btn
                              block
                              color="primary"
                              class="mr-1"
                              disabled
                            >
                              Continue
                            </v-btn>

                            <v-btn block @click="backtwo()" class="ml-1">Back</v-btn>
                        </v-layout>
                      </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-dialog>
  </v-container>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'
import draggable from 'vuedraggable'
import Count from './Count.vue'
import CountTable from './CountTable.vue'
import Picboard from './Picboard.vue'
import MoreTasksCountTable from './MoreTasksCountTable.vue'


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
      dialogwidth: '41%',
      e1: 0,
      select: { state: 'Select count *', abbr: 'Count * ' },
      items: [
        { state: 'Select count *', abbr: 'Count * ' },
        { state: 'Select *', abbr: '*' }
      ],
      search: '',
      selected: [],
      headers: [],
      desserts: [],
      // layout: testLayout,
      draggable: true,
      resizable: true,
      index: 0,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      layout: [
          { 'x': 0, 'y': 0, 'w': 6, 'h': 8, 'i': '0', 'newwidth': '', 'newheight': '', 'index': 0, 'type':'Count'},
          { 'x': 6, 'y': 0, 'w': 2, 'h': 8, 'i': '1', 'newwidth': '', 'newheight': '', 'index': 1, 'type':'Picboard'},
          { 'x': 8, 'y': 0, 'w': 4, 'h': 8, 'i': '2', 'newwidth': '', 'newheight': '', 'index': 2, 'type':'CountTable'},
          { 'x': 0, 'y': 8, 'w': 7, 'h': 3, 'i': '3', 'newwidth': '', 'newheight': '', 'index': 3, 'type':'Picboard'},
          { 'x': 7, 'y': 8, 'w': 5, 'h': 9, 'i': '4', 'newwidth': '', 'newheight': '', 'index': 4, 'type':'count'},
          { 'x': 0, 'y': 11, 'w': 3, 'h': 6, 'i': '5', 'newwidth': '', 'newheight': '', 'index': 5, 'type':'count'},
          { 'x': 3, 'y': 11, 'w': 4, 'h': 6, 'i': '6', 'newwidth': '', 'newheight': '', 'index': 6, 'type':'count'},
      ],
      snackbar: false,
      color: '',
      mode: '',
      timeout: 6000,
      text: 'Hello, I\'m a snackbar'
    }
  },
  components: {
    'GridLayout': VueGridLayout.GridLayout,
    'GridItem': VueGridLayout.GridItem,
    draggable,
    Count,
    CountTable,
    Picboard,
    MoreTasksCountTable
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
    },
    closesheet() {
      this.$store.commit('sheetshow')
    },
    submit(Type) {
      let newCard = { 'x': 0, 'y': 0, 'w': 6, 'h': 8, 'i': this.layout.length.toString(), 'newwidth': '', 'newheight': '', 'index': this.layout.length, 'type': Type}
      this.layout.unshift(newCard)
      this.$store.commit('changedashboard_dialog')
      this.e1 = 1

    },
    continueone() {
      this.e1 = 2
      this.dialogwidth = '70%'
    },
    continuetwo() {
      this.e1 = 3
      this.dialogwidth = '41%'
    },
    backone () {
        this.e1 = 1
        this.dialogwidth = '41%'
    },
    backtwo() {
        this.e1 = 2
        this.dialogwidth = '70%'
    },
    getdessertData() {
        this.axios.get('http://localhost:8081/static/desserts.json')
        .then((response) => {
            this.desserts = response.data.desserts
        })
    },
    getheaderData() {
        this.axios.get('http://localhost:8081/static/headers.json')
        .then((response) => {
            this.headers = response.data.headers
        })
    }
  },
  created: function() {
    // this.axios.get('/ousers/' + '5b750af429b2e9574a7ffa12', {params: {
    //   'access_token': 'WhAOxY3oBUPVLctzcuGhf5mf1N9ssxzOwyKZyv2zHNc98m481zdXnQOxfEbKMZJF'
    // }}).then(response => {

    // })
    this.getdessertData()
    this.getheaderData()
  }
}

</script>
