<template>
    <v-layout align-center justify-center fill-height>
        <div class="card-body">
                <div class="result-count">
                    <span>{{Data.resultCount}}</span>
                    <span v-if="changeStatus" class="result-change">
                        <v-icon>arrow_upward</v-icon>
                        <span>{{Data.resultChange}}</span>
                    </span>
                </div>
                <div v-if="timeStatus" class="result-time">
                    <span class="result-time-name">result-time: </span>
                    {{Data.resultTime}}
                </div>
        </div>
    </v-layout>
</template>
<script>
export default {
    name: 'Count',
    props: ['id',"timeStatus","changeStatus"],
    data() {
        return {
            Data:[]
        }
    },
    methods: {
        getCardData() {
            this.axios.get('http://localhost:8081/static/config.json')
        .then((response) => {
            this.Data = response.data
        })
        }
    },
    created: function() {
        this.getCardData();
    }
}
</script>
<style>
    .card-body {
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
        /*text-align: left;*/
        font-size: 13px;
        /*margin-top: 5%;*/
    }
    .result-time-name {
        font-size: 15px;
        font-weight: 500;
    }
</style>


