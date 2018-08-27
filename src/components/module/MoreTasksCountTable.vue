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
    name: 'MoreTasksCountTable',
    props: ["title"],
    data() {
        return {
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
            desserts: []
        }
    },
    methods: {
        getCardData() {
            this.axios.get('http://localhost:8081/static/config.json')
        .then((response) => {
            this.desserts = response.data.desserts
        })
        },
        changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
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


