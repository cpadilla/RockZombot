<template>
    <div id="pastebin">
        <v-layout>
            <v-flex xs12 v-show="page === 1">
                <v-layout row>
                    <v-flex xs2 align-content-center>
                        <v-avatar tile @click="$router.go(-1)">
                            <img src="../assets/back.png"/>
                        </v-avatar>
                    </v-flex>
                    <v-flex xs10>
                        <textarea
                            className="preWrap"
                            label="Paste Here"
                            color="success"
                            v-model="paste"
                        >
                        </textarea>
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
                            <a :href="link">{{ link }}</a>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Pastebin',
  data() {
    return {
        paste: "",
        link: "",
        selectedFormat: "",
        page: 1,
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
        getPastebin: async function(pasteString, format) {
            var syntaxHighlighting = "text";
            if (format) {
                syntaxHighlighting = format.text
            }

            this.link = pasteString;
            var thisRef = this;

            const API = this.$config.API;
            var url = API + "/pastebin";
            console.log('API URL: ', url)

            try {
                const response = await axios.post(url, {
                    pasteString,
                    syntaxHighlighting
                });
                this.link = response.data.link;
            } catch (error) {
                console.log(error)
            }

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

    textarea {
        resize: none;
        width: 100%;
        height: 50px;
        white-space: pre !important;
    }

}
</style>