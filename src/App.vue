<template>
    <div id="app">
        <v-app id="inspire">
            <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer" width="220">
                <navigation></navigation>
            </v-navigation-drawer>
            <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
                <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                    <span class="hidden-sm-and-down">JUGG</span>
                </v-toolbar-title>
                <v-text-field flat solo-inverted label="Search" hide-details></v-text-field>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>apps</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-badge color="purple" overlap>
                        <span slot="badge">6</span>
                        <v-icon>notifications</v-icon>
                    </v-badge>
                </v-btn>
                <v-dialog v-model="dialog2" width="500">
                    <v-btn slot="activator" color="primary" dark icon large class="ml-4">
                        <v-avatar size="40px" :tile="false">
                            <img src="/static/head.JPG" alt="head">
                        </v-avatar>
                    </v-btn>
                    <v-card>
                        <v-container class="info" style="height: 110px;">
                            <v-layout justify-center>
                                <v-tooltip bottom>
                                    <v-btn slot="activator" dark icon fab large class="mt-4">
                                        <v-avatar :size="98" class="elevation-6">
                                            <img src="/static/head.JPG" alt="avatar">
                                        </v-avatar>
                                    </v-btn>
                                    <span>click to change pic</span>
                                </v-tooltip>
                            </v-layout>
                        </v-container>
                        <v-container class="pa-5">
                            <v-layout aligin-center justify-center column wrap>
                                <v-layout row wrap>
                                    <v-icon>person</v-icon>
                                    <v-text-field :disabled="!isname" label="Name"></v-text-field>
                                    <v-btn color="purple" fab small dark @click="isname = !isname">
                                        <v-icon v-if="isname">close</v-icon>
                                        <v-icon v-else>create</v-icon>
                                    </v-btn>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-icon>call</v-icon>
                                    <v-text-field :disabled="!isconnect" label="Connect"></v-text-field>
                                    <v-btn color="pink" dark fab small @click="isconnect = !isconnect">
                                        <v-icon v-if="isconnect">close</v-icon>
                                        <v-icon v-else>create</v-icon>
                                    </v-btn>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-icon>business</v-icon>
                                    <v-text-field :disabled="!iscompany" label="Company"></v-text-field>
                                    <v-btn color="warning" fab small @click="iscompany = !iscompany">
                                        <v-icon v-if="iscompany">close</v-icon>
                                        <v-icon v-else>create</v-icon>
                                    </v-btn>
                                </v-layout>
                            </v-layout>
                        </v-container>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-layout column pa-2>
                                <v-flex>
                                    <v-btn style="background-color: rgb(46, 185, 38)" block @click="dialog2 = false">
                                        <span style="color: #fff">Save</span>
                                    </v-btn>
                                </v-flex>
                                <v-flex pt-2>
                                    <v-btn color="grey lighten-2" block @click="quit()">
                                        Quit
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
            <v-content class="pb-5">
                <router-view>
                </router-view>
            </v-content>
            <v-btn fab bottom right color="pink" dark fixed @click.stop="dialog = !dialog">
                <v-icon>add</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" :width="dialogwidth">
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
                                      <td class="text-xs-right">{{ props.item.calories }}</td>
                                      <td class="text-xs-right">{{ props.item.fat }}</td>
                                      <td class="text-xs-right">{{ props.item.carbs }}</td>
                                      <td class="text-xs-right">{{ props.item.protein }}</td>
                                      <td class="text-xs-right">{{ props.item.iron }}</td>
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
                                    <v-btn dark color="success" small @click="submit()">
                                        <v-icon dark >fa-book</v-icon>&nbsp;<span style="color: #333">Text</span>
                                    </v-btn>
                                    <v-btn dark color="warning" small @click="submit()">
                                        <v-icon dark >fa-line-chart</v-icon>&nbsp;<span style="color: #333">Chart</span>
                                    </v-btn>
                                    <v-btn dark color="error" small @click="submit()">
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
        </v-app>
    </div>
</template>
<script>
import navigation from "./components/layout/Navigation.vue";

export default {
    name: "App",
    components: {
        navigation
    },
    data: () => ({
        dialog: false,
        dialogwidth: '41%',
        e1: 0,
        drawer: null,
        dialog2: false,
        isname: false,
        isconnect: false,
        iscompany: false,
        select: { state: 'Select count *', abbr: 'Count * ' },
        items: [
          { state: 'Select count *', abbr: 'Count * ' },
          { state: 'Select *', abbr: '*' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' }
        ],
        search: '',
        selected: [],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
    }),
    props: {
        source: String
    },
    methods: {
        quit() {
            this.dialog2 = false
            this.$router.push("/")
        },
        submit() {
            this.dialog = false
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
        }

    }
};
</script>
<style>

</style>
