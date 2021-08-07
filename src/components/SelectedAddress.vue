<template>
    <div className="address-row" v-bind:key="selectedAddress" >
        <div className="address">
            <div className="name-text">
                {{selectedAddress.name}}
                <br/>
                <br/>
                    {{selectedAddress.address_line1}} {{selectedAddress.address_line2}} 
                <br/>
                {{selectedAddress.address_city}} {{selectedAddress.address_state}} {{selectedAddress.address_zip}}
                <br/>
                {{selectedAddress.address_country}}
            </div>
            <div className="address-text"> 
                {{selectedAddress.id}}
            </div>
            <div className="button">
                <lob-button v-on:click="onCancel()"> 
                    X
                </lob-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['selectedAddress'],
        methods: {
            onCancel() {
                this.$emit('cancel');
            }
        }
    }

</script>

<style scoped>
    .dropdown-container {
        /* position: absolute; */
        background-color: white;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
        margin-top: -20px;
    }

    .table-styling {
        width: 100%;
    }

    .address-row{ 
        cursor: pointer;
        
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
        width: 100%;
        /* border-bottom: 1px solid #ebeff6; */
    }

    .address {
        display: flex;
        flex-direction: row;
    }

    .address-text {
        font-size: 1.2vh;
        color: #6083a5;
        width: 100%;
        margin: auto;
        padding: 25px;
    }

    .name-text {
        padding: 25px;
        margin: auto;
        padding: 10px;
        font-size: 1.2vh;
        color: #6083a5;
        width: 100%;
        text-align: left;
    }

    .button {
        margin: auto;
        padding: 10px;
    }

</style>
