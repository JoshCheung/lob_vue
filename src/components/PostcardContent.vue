<template>
    <text-input v-bind:id="inputId" className="text-input-styling" v-bind:label="inputLabel" size="small" v-bind:placeholder="inputPlaceholder" 
        v-on:change="handleContentChange"/>
</template>

<script>
export default {
    props: [ 'inputId', 'inputLabel', 'inputPlaceholder', 'successful'],
    data() {
        return {
            content: ""
        }
    },
    methods: { 
        handleContentChange(e) {
            var value = e.target.value
            this.content = value;
            this.$emit('content', this.content);
        },
    },
    watch: {
        successfullyCreatedPostcard: function() {
            if (this.successfullyCreatedPostcard);
            this.content = "";
        }
    }
}
</script>

<style scoped>

</style>
