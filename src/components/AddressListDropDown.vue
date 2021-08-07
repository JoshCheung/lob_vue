<template>
    <div className="dropdown-container">
        <lob-table className="table-styling" space="sm">
            <TableBody>
                <TableRow className="address-row" :key=address v-for="address in filteredAddressList" v-on:click="selectAddress(address)">  
                    <div className="address">
                        <p className="name-text">
                            {{address.name}}
                            <br/>
                            <br/>
                                {{address.address_line1}} {{address.address_line2}} 
                            <br/>
                            {{address.address_city}} {{address.address_state}} {{address.address_zip}}
                            <br/>
                            {{address.address_country}}
                        </p>
                        <div className="address-text"> 
                            {{address.id}}
                        </div>
                    </div>
                </TableRow>
            </TableBody>
        </lob-table>
    </div>
</template>

<script>
    import AddressRow from './AddressRow.vue'
    export default {
        props: ['filteredAddressList'],
        components: 
            AddressRow,
        methods: {
            selectAddress(address) {
                console.log(address);
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
        height: 400px;
        width: 30%;
        margin-top: -20px;
        overflow-y: scroll;
    }

    .table-styling {
        width: 100%;
    }

    .address-row{ 
        cursor: pointer;
        border-bottom: 1px solid #ebeff6;
    }

    .address-text {
        font-size: 1.2vh;
        color: #6083a5;
        padding: 25px;
    }

    .name-text {
        padding: 25px;
        font-size: 1.3vh;
        color: #6083a5;
        text-align: left;
    }

    

</style>
