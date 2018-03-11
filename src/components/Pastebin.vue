<template>
    <div id="pastebin">
        <!-- <v-card class="px-0"> -->
            <v-layout>
                <v-flex xs12 v-show="page === 1">
                    <v-layout row>
                        <v-flex xs2 align-content-center>
                            <v-avatar tile @click="$router.go(-1)">
                                <img src="../assets/back.png"/>
                            </v-avatar>
                        </v-flex>
                        <v-flex xs10>
                            <v-text-field
                                label="Paste Here"
                                color="success"
                            >
                            </v-text-field>
                            <v-select
                                :items="formats"
                                v-model="selectedFormat"
                                label="Syntax Highlighting"
                                color="success"
                            ></v-select>
                            <v-btn @click="page = 2">
                                Get Pastebin
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs12 v-show="page === 2">
                    <v-layout row>
                        <v-flex xs2 align-content-center @click="page = 1">
                            <v-avatar tile>
                                <img src="../assets/back.png"/>
                            </v-avatar>
                        </v-flex>
                        <v-flex xs10>
                            <v-card-text class="px0">
                                https://pastebin.com
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        <!-- </v-card> -->
    </div>
</template>

<script>
import axios from 'axios'

function getPastebin(pasteString, format) {

}

export default {
  name: 'Pastebin',
  data() {
    return {
        formats: [
            { text: "none" },
            { text: "c" },
            { text: "csharp" },
            { text: "cpp" },
            { text: "css" },
            { text: "html" },
            { text: "java" },
            { text: "javascript" },
            { text: "json" },
            { text: "lua" }
        ],
        selectedFormat: "",
        page: 1
    }
  }
}
</script>

<style lang="scss" scoped>
$btnSize: 60%;

#pastebin {
    img {
        width: $btnSize;
        height: $btnSize;
    }
}
</style>