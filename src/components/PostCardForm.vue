<template>
  <div className="input-container">
        <text-input className="text-input-styling" label="Description:" placeholder="Describe the mail">
        </text-input>
        <br/>

        <div v-if="selectedAddress !== null">
          <SelectedAddress :selectedAddress="selectedAddress" @cancel="onCancel"/>
        </div>
        <div v-else>
          <text-input className="text-input-styling" label="To:" placeholder="Recipient Name" v-on:change="recipientInputChange">
          </text-input>
          <div v-if="showRecipientInputDropDown">
            <AddressListDropDown :filteredAddressList="filtered" @select-Address="handleSelectAddress"/>
          </div>
        </div>
        
        
        <br/>
        
        
        <text-input className="text-input-styling" label="From:" placeholder="Describe" >
        </text-input>
        <br/>
        <text-input className="text-input-styling" label="Front:" placeholder="">
        </text-input>
        <br/>
        <text-input className="text-input-styling" label="Back:" placeholder="">
        </text-input>
        <br/>
        <lob-button>
            Submit
        </lob-button>
  </div>
</template>

<script>
import AddressListDropDown from "./AddressListDropDown.vue";
import SelectedAddress from "./SelectedAddress.vue";

export default {
  props: {
    msg: String
  },
  data(){
    return {
        addresses: [],
        filtered: [],
        search: '',
        showRecipientInputDropDown: false,
        selectedAddress: null,
        submitted: false,  
    }
  },
  mounted(){
    this.getAddresses();
  },
  components: {
    AddressListDropDown,
    SelectedAddress,
  },
  methods: {
    getAddresses() {
        var Lob = require('lob')('test_8ddaad35dc02260ae8a4e6e33d9f3ade7ae');
        Lob.addresses.list()
            .then((res) => {
                console.log(res.data);
                this.addresses = res.data;
            })
            .catch((e) => {
            console.log(e);
        });
    },
    filterAddress(query) {
        return function(person1, person2) {
            // const person1Name = person1.name.split(/\s+/); //split by any amount of spaces
            // const person2Name = person2.name.split(/\s+/);
            // var index1 = person1Name[0].indexOf(query); //check index of searched item
            // var index2 = person2Name[0].indexOf(query);
            
            var index1 = person1.name.indexOf(query); //check index of searched item in name
            var index2 = person2.name.indexOf(query);

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
      console.log(this.selectedAddress);
    },
    onCancel() {
      this.selectedAddress = null;
    }
  }
}


</script>

<style scoped>
    .input-container {
        padding-left: 35%;
        padding-right: 35%;
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .text-input-styling {
      text-align: left;
      margin-bottom: 20px;

    }
</style>
