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
                                v-model="paste"
                            >
                            </v-text-field>
                            <v-select
                                :items="formats"
                                v-model="selectedFormat"
                                label="Syntax Highlighting"
                                color="success"
                            ></v-select>
                            <v-btn @click="getPastebin(paste, selectedFormat)">
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
                                {{ link }}
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        <!-- </v-card> -->
    </div>
</template>

<script>
import PastebinAPI from 'pastebin-js'
var pastebin = new PastebinAPI('c2782b965a1788ff8fd954b3f30d8b52')

// console.log('pastebin: ', pastebin)

export default {
  name: 'Pastebin',
  data() {
    return {
        paste: "",
        link: "",
        selectedFormat: "",
        page: 1,
        pastebin: pastebin,
        formats: [
            { text: "text" },
            { text: "c" },
            { text: "csharp" },
            { text: "cpp" },
            { text: "css" },
            { text: "html5" },
            { text: "java" },
            { text: "javascript" },
            { text: "json" },
            { text: "lua" }
        ],
    }
  },
  methods: {
        getPastebin: function(pasteString, format) {
            console.log("paste: ", pasteString, " format: ", format)
            var syntaxHighlighting = "text";
            if (format) {
                syntaxHighlighting = format.text
            }

            var thisRef = this;

            this.pastebin.createPaste(pasteString, "", syntaxHighlighting, 0)
            .then(function(data) {
                console.log("data ", data)
                thisRef.link = data + ""
            })
            .fail(function(err) {
                console.log(err)
                thisRef.link = err + ""
            })
            this.page = 2;
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

    .input-group--text-field input {
        background: red;
        white-space: pre-wrap !important;
    }

}
</style>