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
                <v-flex xs12 sm12 md12 lg12>
                    <div class="card-larg-body card-larg-chart">
                        <div class="result-count-chart">
                            <ve-chart :toolbox="toolbox" :data="chartData" :settings="chartSettings" :grid="grid"></ve-chart>
                        </div>
                    </div>
                </v-flex>

                <v-data-table v-model="selected" :headers="headers" :items="desserts"
                    :pagination.sync="pagination" select-all item-key="name" class="elevation-1">
                    <template slot="headers" slot-scope="props">
                        <tr>
                            <th v-for="header in props.headers" :key="header.text"
                            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                            @click="changeSort(header.value)">
                                <v-icon small>arrow_upward</v-icon>
                                {{ header.text }}
                            </th>
                        </tr>
                    </template>
                    <template slot="items" slot-scope="props">
                        <tr :active="props.selected" @click="props.selected = !props.selected">
                            <td>{{ props.item.name }}</td>
                            <td class="text-xs-right">{{ props.item.calories }}</td>
                            <td class="text-xs-right">{{ props.item.fat }}</td>
                            <td class="text-xs-right">{{ props.item.carbs }}</td>
                            <td class="text-xs-right">{{ props.item.protein }}</td>
                            <td class="text-xs-right">{{ props.item.iron }}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-layout>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'ChartLarge',
    props: ['id','chartStatue','tabStatus', 'countStatus'],
    data() {
        this.grid = {
            show: true,
            top: 35,
            bottom: 35,
            right: 20
        }
        this.toolbox = {
            feature: {
                magicType: {type: ['line', 'bar']},
                saveAsImage: {}
            }
        };
        let typeArr = ['line', 'histogram', 'pie'], index = 0;
        return {
            Data:[],
            pagination: {
                sortBy: 'name'
            },
            selected: [],
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    value: 'name'
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' }
            ],
            desserts: [],
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
            this.axios.get('http://localhost:8080/static/config.json')
        .then((response) => {
            this.chartData.rows = response.data.row
            this.desserts = response.data.desserts
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


