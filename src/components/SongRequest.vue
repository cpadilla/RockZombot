<template>
    <div id="songrequest">
        <v-layout>
            <v-flex xs12 >
                <v-layout row>
                    <v-flex xs2 align-content-center>
                        <v-avatar tile @click="$router.go(-1)">
                            <img src="../assets/back.png"/>
                        </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                        <v-text-field
                            label="Search for Song"
                            color="success"
                            v-model="songSearch"
                            v-on:keyup="submit"
                        >
                        </v-text-field>
                        <v-card height="300px">
                            <v-card-text>
                                {{ songName }}
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import spotify from '../Spotify/swrapper.js'

export default {
    name: 'SongRequest',
    data() {
        return {
            expanded: false,
            songSearch: "",
            songName: "",
            timeout: null
        }
    },
    methods: {
        submit: function() {
            clearTimeout(this.timeout)

            var thisRef = this

            this.timeout = setTimeout(function() {
                thisRef.songName = thisRef.songSearch;
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
$btnSize: 60%;

#songrequest {
    img {
        width: $btnSize;
        height: $btnSize;
    }
}
</style>

