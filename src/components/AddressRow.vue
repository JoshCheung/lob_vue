<template>
    <!-- Apply conditional css class -->
    <div v-bind:class="[selected ? 'address selected' : 'address']" v-bind:key="address" >
        <div className="text-boxes">
            {{address.name}}
            <br/>
            <br/>
                {{address.address_line1}} {{address.address_line2}} 
            <br/>
            {{address.address_city}} {{address.address_state}} {{address.address_zip}}
            <br/>
            {{address.address_country}}
        </div>
        <div className="text-boxes addressId-text"> 
            {{address.id}}
        </div>
        <div className="button" v-if="selected">
            <lob-button v-on:click="onCancel()"> 
                X
            </lob-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['address', 'selected'],
        methods: {
            onCancel() {
                this.$emit('cancel');
            }
        }
    }
</script>

<style scoped>

    .address-row{ 
        cursor: pointer;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
        width: 100%;
        border-bottom: 1px solid #ebeff6;
    }

    .address {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #ebeff6;
    }

    .selected {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
    }

    .text-boxes {
        font-size: 0.8rem;
        color: #6083a5;
        margin-top: auto;
        margin-bottom: auto;
        padding: 20px;
        width: 50%;
        text-align: left;
    }

    .addressId-text {
        text-align: right;
    }


    .button {
        margin: auto;
        padding: 10px;
    }
</style>
