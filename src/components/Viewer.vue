<template>
  <div id="viewer">
    This is the viewer.vue!
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Viewer'
}
</script>

<style>
#viewer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
