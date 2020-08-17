<template>
  <v-app style="background: #000000;">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#000000"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="#39FF14" >{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
          
        </v-list-item>
      </v-list>
      <a style="text-decoration:none" href="/search"> <v-icon color="#18D3AF">mdi-magnify</v-icon>search db</a>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="#000000"
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#18D3AF"/>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon color="#18D3AF">mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      
      <v-toolbar-title v-text="title" />
      <v-spacer />
     <!-- <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>-->
      <a style="text-decoration:none" href="/audio">listen<a/><v-btn icon color="#39FF14"><v-icon>mdi-music</v-icon></v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer
      dark
      padless
    >
      <myfooter>

      </myfooter>
    </v-footer>

   
  </v-app>
</template>

<script>
import  myfooter from './myfooter.vue'
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        
        {
          icon: 'mdi-campfire',
          title: 'dashboard',
          to: '/dashboard'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Mansaah',
      components:{myfooter},
    }
  }
}
</script>

