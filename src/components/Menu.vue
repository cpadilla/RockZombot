<template>
    <div id="menu">
        <v-container color="primary" fluid grid-list-md>
            <v-layout row :key="i">
                <v-flex xs12>
                    <Pastebin />
                    <SongRequest />
                    <!-- <SongRequest /> -->
                    <!-- <v-card class="px-0">
                        <v-card-text class="px0">
                            This will contain menu items
                        </v-card-text>
                    </v-card> -->
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Pastebin from './Pastebin'
import SongRequest from './SongRequest.vue'

export default {
    name: 'Menu',
    components: {
        Pastebin,
        SongRequest
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
#menu {
    .container {
        background: rgb(66,66,66);
        border-radius: 2px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
        rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    }
}
</style>