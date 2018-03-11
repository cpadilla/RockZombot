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
                            label="Search for Song..."
                            color="success"
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
$btnSize: 60%;

#songrequest {
    img {
        width: $btnSize;
        height: $btnSize;
    }
}
</style>

