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
        // var Lob = require('lob')('test_f6f5743a658e682896d58acd02f42b9e2e8');
        var Lob = require('lob')('test_8ddaad35dc02260ae8a4e6e33d9f3ade7ae');

        //  var Lob = require('lob')('test_8ddaad35dc02260ae8a4e6e33d9f3ade7ae');
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
    filterAddress(query) {
        return function(person1, person2) {

            // take whole address and search for the query to account for searching address
            var person1Address = person1.name + person1.address_line1 + person1.address_line2 + person1.address_city + person1.address_state + person1.address_zip + person1.address_country;
            var person2Address = person2.name + person2.address_line1 + person2.address_line2 + person2.address_city + person2.address_state + person2.address_zip + person2.address_country;

            // const person1Name = person1.name.split(/\s+/); //split by any amount of spaces
            // const person2Name = person2.name.split(/\s+/);
            // var index1 = person1Name[0].indexOf(query); //check index of searched item
            // var index2 = person2Name[0].indexOf(query);
            
            // var index1 = person1.name.indexOf(query); //check index of searched item in name
            // var index2 = person2.name.indexOf(query);

            var index1 = person1Address.indexOf(query);
            var index2 = person2Address.indexOf(query);

            if (index1 === -1 && index1 < index2) {     //if searched item does not exist for each name
                return 1;                               //has higher precedence in name2 if not found name1
            }
            else if (index2 === -1 && index1 > index2) { 
                return -1;                              //has higher precedence in name1 if not found name2
            }   
            else if (index1 > index2) {                 //name2 has higher precedence if indexOf is smaller than name1
                return 1;
            } 
            else if (index1 < index2) {                 //name1 has higher precedence if indexOf is smaller than name2
                return -1;
            }
            else {              
                if(person1.name < person2.name)         //if either are not found then compare names in general
                    return 1;
                else
                    return -1;
            }
        };
    },
    recipientInputChange(e) {
        var value = e.target.value
        if (e.target.value !== '') {
          this.search = value.toUpperCase();
          this.showRecipientInputDropDown = true;
        }
        else {
          this.search = value;
          this.showRecipientInputDropDown = false;
        }
        this.filtered = this.addresses.sort(this.filterAddress(value.toUpperCase()));
    },
    handleSelectAddress(address) {
      this.selectedAddress = address;
      this.showRecipientInputDropDown = false;
    },
    onCancel() {
      this.selectedAddress = null;
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

  .alert-error {
    width: 100%;
  }
</style>
