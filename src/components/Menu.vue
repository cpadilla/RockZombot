<template>
    <div id="menu">
        <v-container fluid grid-list-md>
            <v-layout row>
                <v-flex md12>
                    <v-spacer>
                        <v-card v-for="i in 4" :key="i">
                            This will contain menu items
                        </v-card>
                    </v-spacer>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>