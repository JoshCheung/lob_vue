<template>
    <main-navigation className="main-navigation" :collapsible="false"> 
        <template v-slot="{ expanded }">
            <main-navigation-item
                title="Overview"
                iconSrc='@lob/ui-components/src/components/Icons/Home.vue'
                iconAltText="Overview"
                to=""
                :expanded="expanded"
            />
            <main-navigation-item
                title="Mail Analytics"
                iconSrc="../node_modules/@lob/ui-components/src/components/Icons/Analytics"
                iconAltText="Mail"
                to=""
                :expanded="expanded"
            />
            <main-navigation-item
                title="Address Book"
                iconSrc="@lob/ui-components/src/components/Icons/Book.vue"
                iconAltText="Address"
                to=""
                :expanded="expanded"
            />
            <main-navigation-item
                title="HTML Templates"
                iconSrc="@lob/ui-components/src/components/Icons/DocPage.vue"
                iconAltText="HTML"
                to=""
                :expanded="expanded"
            />
        </template>
    </main-navigation>
</template>

<script>
// import homeIcon from '@lob/ui-components/src/components/Icons/Home.vue'

export default {
  components: {
    // homeIcon
  }
}

</script>

<style scoped>
    .main-navigation {
        background-color: #f7f8fa;
        height: 100%;
    }
</style>