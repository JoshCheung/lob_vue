<template>
    <div id="dropdown" className="dropdown-container">
        <div :key="address" v-for="address in filteredAddressList">
            <div>  
                <AddressRow :address="address" v-on:click="selectAddress(address)"/>
            </div>
        </div>
    </div>
</template>

<script>
    import AddressRow from './AddressRow.vue'

    export default {
        props: ['filteredAddressList'],
        components:  {
            AddressRow,
        },
        methods: {
            selectAddress(address) {
                this.$emit('select-Address', address);
            }
        }
    }

</script>

<style scoped>
    .dropdown-container {
        position: absolute;
        background-color: white;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
        height: 375px;
        width: 30%;
        margin-top: -20px;
        overflow-y: scroll;
        min-width: 400px;
    }

    .table-styling {
        width: 100%;
    }

    .address-row{ 
        cursor: pointer;
        border-bottom: 1px solid #ebeff6;
    }

   
    

</style>
