<template>
    <div v-if="selectedAddress !== null">
        <AddressRow :address="selectedAddress" :selected="true" @click="onCancel"/>
      </div>

      <div v-else>
        <text-input className="text-input-styling" v-bind:inputId="inputId" v-bind:label="inputLabel" v-bind:placeholder="inputPlaceholder" size="small" v-on:change="recipientInputChange"/>
        <div v-if="showRecipientInputDropDown">
          <AddressListDropDown :filteredAddressList="filtered" @select-Address="handleSelectAddress"/>
        </div>
      </div>
</template>

<script>
import AddressRow from "./AddressRow.vue";
import AddressListDropDown from './AddressListDropDown'
export default {
    props: [ 'inputId', 'inputLabel', 'inputPlaceholder', 'addresses'],
    components: {
        AddressRow,
        AddressListDropDown
    },
    data() {
        return {
            showRecipientInputDropDown: false,
            selectedAddress: null,
            search: '',
            filtered: [],
        }
    },
    methods: {
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
            var addressList = this.addresses;
            this.filtered = addressList.sort(this.filterAddress(value.toUpperCase()));
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
.text-input-styling {
    text-align: left;
    margin-bottom: 20px;
}
</style>
