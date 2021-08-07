<template>
    <div className="address">
        <div className="name-text">
            {{selectedAddress.name}}
            <br/>
            <br/>
                {{selectedAddress.address_line1}} {{selectedAddress.address_line2}} 
            <br/>
            {{selectedAddress.address_city}} {{selectedAddress.address_state}} {{selectedAddress.address_zidiv}}
            <br/>
            {{selectedAddress.address_country}}
        </div>
        <div className="address-text"> 
            {{selectedAddress.id}}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['address'],
    }
</script>

<style scoped>
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
