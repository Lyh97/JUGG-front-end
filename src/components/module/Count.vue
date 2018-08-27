<template>
    <v-card class='card' height="100%" color="fff" hover>
        <v-layout align-center justify-center row>
            <v-card-title class="title pt-2 pb-1" primary-title style="color: purple;" >
                {{ title }}
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon small right @click="opensheet()"><v-icon>more_horiz</v-icon></v-btn>
            <v-btn icon small right @click="large()"><v-icon>zoom_out_map</v-icon></v-btn>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-text class="card-text">
            <v-layout align-center justify-center row fill-height>
                <div class="card-body">
                    <div class="result-count">
                        <span>{{Data.resultCount}}</span>
                        <span class="result-change">
                            <v-icon>arrow_upward</v-icon>
                            <span>{{Data.resultChange}}</span>
                        </span>
                    </div>
                    <div class="result-time">
                        <span class="result-time-name">result-time: </span>
                        {{Data.resultTime}}
                    </div>
                </div>
            </v-layout>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'Count',
    props: ['id',"timeStatus","changeStatus"],
    data() {
        return {
            Data:[],
            title: ''
        }
    },
    methods: {
        getCardData() {
            this.axios.get('http://localhost:8081/static/config.json')
            .then((response) => {
                this.Data = response.data.count
                this.title = response.data.title
            })
        },
        large() {
            this.$router.push('/dashboard/countlarge')
        },
        opensheet() {
            this.$store.commit('sheetshow')
        }
    },
    created: function() {
        this.getCardData();
    }
}
</script>
<style>
    .card-body {
        width: 100%;
        -moz-user-select: -moz-none;
        -moz-user-select: none;
        -o-user-select:none;
        -khtml-user-select:none;
        -webkit-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    .result-count {
        text-align: center;
        font-weight: 500;
        font-size: 60px;
    }
    .result-change {
        font-size: 15px;
    }
    .result-time {
        text-align: center;
        font-size: 13px;
        /*margin-top: 5%;*/
    }
    .result-time-name {
        font-size: 15px;
        font-weight: 500;
    }
    .card-text{
        height: calc(100% - 40px);
    }
</style>


