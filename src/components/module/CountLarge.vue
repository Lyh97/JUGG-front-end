<template>
    <v-card class='card' height="100%" color="fff" hover>
        <v-layout align-center justify-center row>
            <v-card-title class="title pt-2 pb-1" primary-title style="color: purple;">
                {{ title }}
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon small right @click="opensheet()"><v-icon>more_horiz</v-icon></v-btn>
            <v-btn icon small right @click="shrink()"><v-icon>fullscreen_exit</v-icon></v-btn>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-text class="card-text">
            <v-layout align-center justify-center row fill-height>
                <div class="card-larg-body">
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
                <div class="card-larg-body">
                    <v-data-iterator :items="items" content-tag="v-layout" hide-actions
                        row wrap>
                        <v-flex slot="item" slot-scope="props" xs12 sm12 md12 lg12>
                            <v-card>
                                <v-card-title class="subheading font-weight-bold">{{ props.item.name }}</v-card-title>
                                <v-divider></v-divider>
                                <v-list dense>
                                    <v-list-tile>
                                        <v-list-tile-content>Calories:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.calories }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Fat:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Carbs:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Protein:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.protein }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Sodium:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.sodium }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Calcium:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.calcium }}</v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-content>Iron:</v-list-tile-content>
                                        <v-list-tile-content class="align-end">{{ props.item.iron }}</v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-data-iterator>
                </div>
            </v-layout>
            <v-layout align-center justify-center fill-height>
                <v-flex xs12 sm12 md12 lg12>
                    <div class="card-larg-body card-larg-chart">
                        <div class="result-count-chart">
                            <ve-chart :toolbox="toolbox" :data="chartData" :settings="chartSettings"></ve-chart>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'Count',
    props: ['id','chartStatue','tabStatus', 'countStatus'],
    data() {
        this.toolbox = {
            feature: {
                magicType: {type: ['line', 'bar']},
                saveAsImage: {}
            }
        };
        let typeArr = ['line', 'histogram', 'pie'], index = 0;
        return {
            Data:[],
            items: [],
            chartData: {
                columns: ['日期', '访问用户'],
                rows: []
            },
            chartSettings: {
                type: typeArr[index]
            },
            title: ''
        }
    },
    methods: {
        getCardData() {
            this.axios.get('http://localhost:8081/static/config.json')
        .then((response) => {
            this.Data = response.data.count
            this.items = response.data.countTable
            this.chartData.rows = response.data.row
            this.title = response.data.title
        })
        },
        changeType: function () {
            this.index++
            if (this.index >= this.typeArr.length) { this.index = 0 }
            this.chartSettings = { type: this.typeArr[this.index] }
        },
        shrink() {
            this.$store.commit('openlarge')
            this.$router.push('/dashboard')
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
    .card-larg-body {
        width: 100%;
        -moz-user-select: -moz-none;
        -moz-user-select: none;
        -o-user-select:none;
        -khtml-user-select:none;
        -webkit-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
    .card-larg-chart {
        margin-top: 35px;
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
    }
    .result-time-name {
        font-size: 15px;
        font-weight: 500;
    }
    .card-text{
        height: calc(100% - 40px);
    }
</style>


