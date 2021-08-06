<template>
    <lob-table className="dropdown-container" space="md">
        <TableBody>
            <TableRow className="address-row" :key=address v-for="address in filteredAddressList" v-on:click="selectAddress(address)">
                <p className="name-text">
                    {{address.name}}
                </p>
                <p className="address-text">
                    {{address.address_line1}} {{address.address_line2}} 
                    <br/>
                    {{address.address_city}} {{address.address_state}} {{address.address_zip}}
                    <br/>
                    {{address.address_country}}
                </p>
            </TableRow>
        </TableBody>
    </lob-table>
</template>

<script>
    export default {
        props: ['filteredAddressList'],
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
        box-shadow: 3px 3px 3px 3px gray;
    }
    .address-row{ 
        cursor: pointer;
    }
</style>
