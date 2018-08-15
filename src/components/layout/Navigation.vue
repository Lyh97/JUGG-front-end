<template>
  <v-list dense>
    <template v-for="item in items">
      <v-list-group v-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="(child, i) in item.children" :key="i" :to="child.route">
          <v-list-tile-action v-if="child.icon">
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ child.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      <v-list-tile v-else :key="item.text" :to="item.route">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>
<script>
export default {
  name: 'Navigation',
  data() {
    return {
      items: [
        { icon: 'contacts', text: 'Dashboard', route: '/dashboard' },
        { icon: 'history', text: 'Tasks', route: '/tasks' },
        { icon: 'content_copy', text: 'Task Group', route: '/taskgroup' },
        { icon: 'help', text: 'Worksapce', route: '/workspace' },
        { icon: 'help', text: 'Files', route: '/files' },
        { icon: 'help', text: 'Connection', route: '/connection' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            { icon: 'chat_bubble', text: 'Send feedback' },
            { icon: 'help', text: 'Help' },
            { icon: 'phonelink', text: 'App downloads' }
          ]
        },
        { icon: 'settings', text: 'Settings' },


      ]
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
