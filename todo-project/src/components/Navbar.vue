<template>
  <nav>

    <v-toolbar fixed app class="grey lighten-4">
      <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Projects</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Log Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>  
     <v-spacer></v-spacer>

 <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app dark class="blue rounded-bl-xl">
      <v-list>
        <v-list-group v-for="link in links" :value="link.active" :key="link.title">
          <v-list-tile slot="link" 
                       :to="link.path == '#' ? '' : link.path" 
                       :exact="link.exact" 
                       class="yellow--text"
                       active-class="red--text">
            <v-list-tile-action>
              <v-icon>{{ link.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >{{ link.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="link.links.length > 0">
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>         
        </v-list-group>
      </v-list>
    </v-navigation-drawer>  

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      clipped: false,
      links: [
        {
        
          title: 'My Projects',
          path: '/project',
          links: [],
        },
        {
          
          title: 'Team',
          path: '/team',
          links: []
        },       
      ]
    }
  }
}
</script>

<style>
</style>