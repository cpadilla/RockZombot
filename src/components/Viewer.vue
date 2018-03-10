<template>
  <div id="viewer">
    <router-view/>
    <v-app>
      <v-flex grid-list-md text-xs-right>
        <div id="buttonContainer">
          <v-btn color="success" >>_</v-btn>
        </div>
      </v-flex>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Viewer'
}
</script>

<style lang="scss" scoped>
$variable: 100px;

#viewer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  // v-app 
  .application {
    background: transparent;

    // #buttonContainer {
      
    // }
  }
}
</style>
