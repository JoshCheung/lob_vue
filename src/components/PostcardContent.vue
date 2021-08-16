<template>
    <text-input className="text-input-styling" :id="id" :label="label" :placeholder="placeholder" size="small"
        v-on:change="handleContentChange"/>
</template>

<script>
export default {
    props: [ 'id', 'label', 'placeholder', 'successful'],
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
