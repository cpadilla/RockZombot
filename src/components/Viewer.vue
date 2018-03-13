<template>
  <div id="viewer">
    <!-- <router-view/> -->
    <v-app dark class="transparent">
        <v-container grid-list-md>
          <v-layout row fill-height align-end justify-end>
            <v-flex xs4>
              <Menu v-show="expanded"/>
              <v-layout class="endRow" row justify-end>
                <v-flex xs6 align-items-end>
                  <v-btn v-on:click="expanded = !expanded" color="green" >{{ buttonText }}</v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
    </v-app>
  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Viewer',
  components: {
    Menu
  },
  data() {
    return {
      expanded: false,
      buttonText: ">_"
    }
  }
}
</script>

<style lang="scss" scoped>
$videoPlayerHeight: 90px;

#viewer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .endRow {
    padding-bottom: $videoPlayerHeight;
  }
}
</style>
