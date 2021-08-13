<template>
  <div className="post-card-input-container">
    <div v-if="hasGetAddressError" className="alert-error" v-bind:key="errorMessage">
      <alert id="alert" variant="error">
        <p>{{errorMessage}}</p>
      </alert>
    </div>
    <div className="input-container">
      <text-input id="description" name="description" className="text-input-styling" label="Description:" placeholder="Describe the mail" size="small"/>
      <br/>
        <SearchAddress :inputId="'To'" :inputLabel="'To'" :inputPlaceholder="'Recipient'" :addresses="addresses" />
      <br/>
        <SearchAddress :iinputId="'From'" :inputLabel="'From'" :inputPlaceholder="'Sender'" :addresses="addresses"/>
      <br/>
      <text-input id="front" name="front" className="text-input-styling" label="Front:" size="small" placeholder=""/>
      <br/>

      <text-input id="back" name="back" className="text-input-styling" label="Back:" size="small" placeholder=""/>
      <br/>

      <lob-button>
          Submit
      </lob-button>

    </div>
  </div>
</template>

<script>
import SearchAddress from './SearchAddress'

export default {
  data(){
    return {
      addresses: [],
      filtered: [],
      hasGetAddressError: false,
      errorMessage: "" 
    }
  },
  mounted(){
    this.getAddresses();
  },
  components: {
    SearchAddress
  },
  methods: {
    getAddresses() {
        // test_f6f5743a658e682896d58acd02f42b9e2e8 personal api_key
        var Lob = require('lob')('test_f6f5743a658e682896d58acd02f42b9e2e8');
        // var Lob = require('lob')('test_8ddaad35dc02260ae8a4e6e33d9f3ade7ae');

        // var Lob = require('lob')('test_8ddaad35dc02260ae8a4e6e33d9f3ade7ae');
        // var Lob = require('lob')('test_2312670');
        Lob.addresses.list()
            .then((res) => {
                this.addresses = res.data;
            })
            .catch((e) => {
              var error = e._response;
              this.hasGetAddressError = true;
              this.errorMessage = error.statusCode + " " + error.body.error.message;
        });
    },
  }
}


</script>

<style scoped>
  .post-card-input-container {
    margin: auto;
    height: 100%;
    width: 100%;
  }

  .input-container {
    width: 25vw;
    min-width: 400px;
    margin: auto;
    margin-top: 6%;
  }

  .text-input-styling {
    text-align: left;
    margin-bottom: 20px;
  }

  .alert-error {
    width: 100%;
  }
</style>
