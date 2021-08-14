<template>
  <div className="post-card-input-container">
    <div v-if="hasGetAddressError" className="alert-bar" v-bind:key="errorMessage">
      <alert id="alert" variant="error">
        <p>{{errorMessage}}</p>
      </alert>
    </div>
    <div v-else-if="successfullyCreatedPostcard" className="alert-bar">
        <alert id="alert" variant="success">
          <p>Postcard was successfully created!</p>
        </alert>
    </div> 
    <div className="input-container">
      <PostcardContent :inputId="'Description'" :inputLabel="'Description:'" :inputPlaceholder="'Description'" @content="updateDescription" :successfullyCreatedPostcard="successfullyCreatedPostcard"/>
      <br/>
      
      <SearchAddress :inputId="'To'" :inputLabel="'To:'" :inputPlaceholder="'Recipient'" :addresses="addresses" @selectedAddress="selectToAddress" :successfullyCreatedPostcard="successfullyCreatedPostcard"/>
      <br/>
      
      <SearchAddress :inputId="'From'" :inputLabel="'From:'" :inputPlaceholder="'Sender'" :addresses="addresses" @selectedAddress="selectFromAddress" :successfullyCreatedPostcard="successfullyCreatedPostcard"/>
      <br/>

      <PostcardContent :inputId="'front'" :inputLabel="'Front:'" :inputPlaceholder="'Hi'" @content="updateFront" :successfullyCreatedPostcard="successfullyCreatedPostcard"/>
      <br/>

      <PostcardContent :inputId="'back'" :inputLabel="'Back:'" :inputPlaceholder="'Bye'" @content="updateBack" :successfullyCreatedPostcard="successfullyCreatedPostcard"/>
      <br/>

      <lob-button v-on:click="onSubmit">
          Submit
      </lob-button>
    </div>
  </div>
</template>

<script>
import SearchAddress from './SearchAddress';
import PostcardContent from './PostcardContent';

export default {
  data(){
    return {
      addresses: [],
      filtered: [],
      hasGetAddressError: false,
      errorMessage: "",
      description: "",
      selectedToAddress: null,
      selectedFromAddress: null,
      front: "",
      back:  "",
      successfullyCreatedPostcard: false
    }
  },
  mounted(){
    this.getAddresses();
  },
  components: {
    SearchAddress,
    PostcardContent
  },
  methods: {
    getAddresses() {
        var Lob = require('lob')('test_f6f5743a658e682896d58acd02f42b9e2e8');
        // test_f6f5743a658e682896d58acd02f42b9e2e8 personal api_key
        
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

    selectToAddress(address) {
      this.selectedToAddress = address.id;
    },

    selectFromAddress(address) {
      this.selectedFromAddress = address.id;
    },

    updateDescription(content) {
      this.description = content;
    },

    updateFront(content) {
      this.front = content;
    },

    updateBack(content) {
      this.back = content;
    },

    onSubmit() {
      var Lob = require('lob')('test_f6f5743a658e682896d58acd02f42b9e2e8');
      Lob.postcards.create({
        description: this.description,
        to: this.selectedToAddress,
        from: this.selectedFromAddress,
        front: '<html style="padding: 1in; font-size: 50>' + this.front + '</html>',
        back: '<html  style="padding: 1in; font-size: 50>' + this.back + '</html>',
      }, (err, res) => {
        // console.log(err);
        if(res._response.statusCode === 200) {
          this.hasGetAddressError = false;
          this.successfullyCreatedPostcard = true;
          setTimeout(() => this.successfullyCreatedPostcard = false, 2000);
        }

      })
      .catch((e) => {
        var error = e._response;
        this.hasGetAddressError = true;
        this.errorMessage = "Error: " + error.statusCode + " " + error.body.error.message;
      });
    }
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

  .alert-bar {
    width: 100%;
  }
</style>
