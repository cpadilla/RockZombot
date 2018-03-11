<template>
    <div id="menu">
        <v-container color="primary" fluid grid-list-md>
            <v-layout row :key="i">
                <v-flex xs12>
                    <!-- <router-link :to="pastebin"> -->
                        <v-layout row
                            v-on:click="navigate('pastebin')"
                            v-if="$route.name === 'Viewer'"
                        >
                            <v-flex xs2 align-content-center>
                                <v-avatar tile>
                                    <img src="../assets/pastebin-icon.png"/>
                                </v-avatar>
                            </v-flex>
                            <v-flex xs10>
                                <v-card-text class="px0">
                                    Create a Pastebin link
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                        <v-layout
                            v-on:click="navigate('songrequest')"
                            v-if="$route.name === 'Viewer'"
                        >
                            <v-flex xs2 align-content-center>
                                <v-avatar tile>
                                    <img src="../assets/spotify.png"/>
                                </v-avatar>
                            </v-flex>
                            <v-flex xs10>
                                <v-card-text class="px0">
                                    Request a Song
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                    <!-- </router-link> -->
                    <!-- <Pastebin />
                    <SongRequest /> -->
                    <router-view></router-view>
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
            clicked: false
        }
    },
    methods: {
        navigate: function (path) {
            this.clicked = true
            this.$router.push({ name: path })
        },
        inMainMethod: function() {
            // alert(this.$router.path)
            return true
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