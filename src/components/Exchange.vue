<template>
  <div>
    <h2>Exchange Test</h2>
    <body>
      <div id="currency-converter">
        <h3>{{ msg }}</h3>
        <br>
        <span>Amount:</span>
        <input type="number" v-model.number = "amount" placeholder = "Amount" />
         <br/><br/>
        <h4>{{ amount }} {{ conFrom }} is {{ finalamount }} {{ conTo }}</h4>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: 'Exchange',
  data() {
    return{
      msg: 'Currency Converter',
      name:'',
      conFrom:'BOB',
      conTo:'USD',
      amount:''
    }
  },
  computed: {
    finalamount() {
      var from = this.conFrom;
      var to = this.conTo;
      var result;
      result = this.amount * 0.14184;
      return result;
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin : 0 15px;
}
option {
  font-size: 0 20px;
}
</style>
