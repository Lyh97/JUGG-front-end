<template>
  <v-container grid-list-md text-xs-center fluid>
    <v-layout row wrap>
      <v-flex xs9 sm9 md9 lg9 xl9>
        <v-card class="file-card">
          <v-list two-line subheader>
            <v-subheader inset>Folders</v-subheader>
            <v-list-tile v-for="item in items" :key="item.title" avatar @click="">
              <v-list-tile-avatar>
                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1" @click="folderClick(item.id)">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs3 sm3 md3 lg3 xl3>
        <div class="file-card">
          <v-tabs fixed-tabs v-model="active">
            <v-tab v-for="n in 2" :key="n">
              {{ tagTitles[n] }}
            </v-tab>
            <v-tab-item v-for="n in 2" :key="n">
              <v-card flat class="file-detail-card">
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-flex>
    </v-layout>
    
    <div class="file-hr"></div>
  </v-container>
</template>
<script>
export default {
  data() {
  	return {
      active: null,
      tagTitles: ['','Detailed','Shared'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [
          {id: '1', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'WorkSpaces', subtitle: 'Jan 9, 2018' },
          {id: '2', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'SQL', subtitle: 'Jan 17, 2018' },
          {id: '3', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'PHP', subtitle: 'Jan 28, 2018' },
          {id: '4', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Shell', subtitle: 'Jan 9, 2018' },
          {id: '5', icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recently', subtitle: 'Jan 17, 2018' }
        ]
    }
  },
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    },
    folderClick(id) {
      console.log(this.items.subtitle);
      this.text=this.items.subtitle;
    }
  }
}
</script>
<style>
  .file-card {
  }
  .file-Name {
    font-size: 13px;
    width:100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .file-detail-card {
    background-color: transparent !important;
  }
  .file-hr {
    border-top: 1px dashed #bcc1c5;
    margin: 3px 0px 8px 0px;
  }
</style>