<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
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
        <v-btn icon large class="ml-4">
          <v-avatar size="40px" :tile="false">
            <img src="/static/head.JPG" alt="head">
          </v-avatar>
        </v-btn>
      </v-toolbar>
      <v-content>
        <router-view>
        </router-view>
      </v-content>
      <v-btn fab bottom right color="pink" dark fixed @click.stop="dialog = !dialog">
        <v-icon>add</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" width="800px">
        <v-card>
          <v-card-title class="grey lighten-4 py-4 title">
            Create contact
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt="">
                  </v-avatar>
                  <v-text-field placeholder="Name"></v-text-field>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-text-field prepend-icon="business" placeholder="Company"></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field placeholder="Job title"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field prepend-icon="mail" placeholder="Email"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field type="tel" prepend-icon="phone" placeholder="(000) 000 - 0000" mask="phone"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field prepend-icon="notes" placeholder="Notes"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat color="primary">More</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
            <v-btn flat @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>
<script>
import navigation from './components/layout/Navigation.vue'

export default {
  name: 'App',
  components: {
    navigation
  },
  data: () => ({
    dialog: false,
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
<style>
#app {}

</style>
