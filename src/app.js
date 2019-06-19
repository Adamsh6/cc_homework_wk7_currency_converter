import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  Vue.filter('twoDPs', function(value) {
    return value.toFixed(2)
  })

  new Vue({
    el: "#app",
    data: {
      rates: {},
      fromEuroRate: 0.89403,
      toEuroRate: 0.89403,
      nonBaseFromRate: 0.89403,
      nonBaseToRate: 0.89403,
      fromEuroAmount: 1,
      toEuroAmount: 1,
      nonBaseAmount: 1
    },
    computed: {
      convertedFromEuros: function(){
        return this.fromEuroAmount * this.fromEuroRate
      },
      convertedToEuros: function(){
        return this.toEuroAmount / this.toEuroRate
      },
      nonBaseConversion: function(){
        return (this.nonBaseAmount / this.nonBaseFromRate) * this.nonBaseToRate
      }
    },

    mounted(){
      this.getRates()
    },
    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.rates = data.rates)
      }
    }
  })
})
