<template>
    <div id="songrequest">
        <v-layout>
            <v-flex xs12 v-show="!expanded" @click="expanded = true">
                <v-layout>
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
            </v-flex>
            <v-flex xs12 v-show="expanded">
                <v-layout row>
                    <v-flex xs2 align-content-center @click="expanded = false">
                        <v-avatar tile>
                            <img src="../assets/back.png"/>
                        </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                        <v-text-field
                            label="Search for Song..."
                        >
                        </v-text-field>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    name: 'SongRequest',
    data() {
        return {
            expanded: false
        }
    }
}
</script>

<style lang="scss" scoped>
</style>

