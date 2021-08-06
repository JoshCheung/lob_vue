<template>
  <div className="input-container">
        <text-input className="text-input-styling" label="Description:" placeholder="Describe the mail">
        </text-input>
        <br/>
        <text-input className="text-input-styling" label="To:" placeholder="Recipient Name">
        </text-input>
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
export default {
  props: {
    msg: String
  },
  data(){
    return {
        addresses: [],
        filtered: [],
        search: '',
        recipientInputModal: false,
        selectedAddress: [],
        submitted: false,  
    }
  },
  methods: {
    getAddresses() {
        var Lob = require('lob')('test_8ddaad35dc02260ae8a4e6e33d9f3ade7ae');
        Lob.addresses.list()
            .then((res) => {
                this.setState({
                    addresses: res.data
                })
                this.state.addresses.sort(this.compare);
            // console.log(res.data);
            })
            .catch((e) => {
            console.log(e);
        });
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
    }
</style>
