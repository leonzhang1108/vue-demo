/**
 * Created by leon on 2016/4/20.
 */

require.config({
    baseUrl: '../../js/lib/',
    shim: {
        'bootstrap': ['jquery']
    },
    paths: {
        'vue': 'vue',
        'jquery': 'jquery-1.12.3.min',
        'bootstrap': 'bootstrap.min',
        'handlebars': 'handlebars',
        'ui': '../common/ui',
        'util': '../common/util',
        'constants':'../common/constants',
        'message':'../common/message',
        'loader':'../common/loader'
    }
})

require(['ui','util','vue'], function (DC, Util, Vue) {

    DC.ui.input({
        el: 'demo-leon'
    })



    Vue.component('demo-grid', {
        template: '#grid-template',
        props: {
            data: Array,
            columns: Array,
            filterKey: String
        },
        data: function () {
            var sortOrders = {}
            this.columns.forEach(function (key) {
                sortOrders[key] = 1
            })
            return {
                sortKey: '',
                sortOrders: sortOrders
            }
        },
        methods: {
            sortBy: function (key) {
                this.sortKey = key
                this.sortOrders[key] = this.sortOrders[key] * -1
            }
        }
    })

    var demo = new Vue({
        el: '#demo',
        data: {
            searchQuery: '',
            gridColumns: ['name', 'power'],
            gridData: [
                { name: 'leon', power: Infinity },
                { name: 'ciccy', power: 9000 }
            ]
        }
    })


    DC.show()
})





