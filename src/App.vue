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
            <v-dialog v-model="dialog" width="41.5%">
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
                        <v-card
                          class="mb-3"
                          color="grey lighten-1"
                          height="220px"
                        >
                        </v-card>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row pt-2>
                            <v-btn
                              block
                              color="primary"
                              @click="e1 = 2"
                              class="mr-1"
                            >
                              Continue
                            </v-btn>

                            <v-btn block disabled class="ml-1">Back</v-btn>
                        </v-layout>
                      </v-stepper-content>

                      <v-stepper-content step="2">
                        <v-card
                          class="mb-3"
                          color="grey lighten-1"
                          height="220px"
                        ></v-card>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row pt-2>
                            <v-btn
                              block
                              color="primary"
                              @click="e1 = 3"
                              class="mr-1"
                            >
                              Continue
                            </v-btn>

                            <v-btn block @click="e1 = 1" class="ml-1">Back</v-btn>
                        </v-layout>
                      </v-stepper-content>

                      <v-stepper-content step="3">
                        <v-card
                          class="mb-3"
                          color="grey lighten-1"
                          height="220px"
                        ></v-card>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row pt-2>
                            <v-btn
                              block
                              color="primary"
                              @click="submit()"
                              class="mr-1"
                            >
                              Submit
                            </v-btn>

                            <v-btn block @click="e1 = 2" class="ml-1">Back</v-btn>
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
        e1: 0,
        drawer: null,
        dialog2: false,
        isname: false,
        isconnect: false,
        iscompany: false
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
        }
    }
};
</script>
<style>

</style>
