<template>
    <v-card class='card' height="100%" color="fff" hover>
        <v-layout align-center justify-center row>
            <v-card-title class="title pt-2 pb-1" primary-title style="color: purple;" >
                {{ title }}
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon small right @click="sheet = true"><v-icon>more_horiz</v-icon></v-btn>
            <v-btn icon small right @click=""><v-icon>zoom_out_map</v-icon></v-btn>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-text class="card-text">
            <v-layout align-center justify-center row fill-height>
                <v-data-iterator :items="items" content-tag="v-layout" hide-actions row wrap>
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
            </v-layout>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'CountTable',
    // props: ["title"],
    data() {
        return {
            items: [
                {
                    value: false,
                    name: 'Frozen Yogurt',
                    calories: 159,
                    calcium: '14%',
                    iron: '1%'
                }
            ],
            title: ''
        }
    },
    methods: {
        getCardData() {
            this.axios.get('http://localhost:8080/static/config.json')
        .then((response) => {
            this.Data = response.data
            this.title = response.data.title
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


