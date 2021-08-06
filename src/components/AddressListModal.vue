<template>
    
    <lob-table space="md">
        <TableBody>
            <TableRow :key=address v-for="address in addressList">
                <p className="name-text">
                    {address.name}
                </p>
                <p className="address-text">
                    {address.address_line1} {address.address_line2} 
                    <br/>
                    {address.address_city} {address.address_state} {address.address_zip} 
                    <br/>
                    {address.address_country}
                </p>
            </TableRow>
        </TableBody>
    </lob-table>
</template>

<script>
    export default {
        props: ['addressList']
    }
</script>

<style scoped>

</style>
