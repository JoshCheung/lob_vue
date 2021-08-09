<template>
    <main-navigation className="main-navigation" :collapsible="false"> 
        <template v-slot="{ expanded }">
            <main-navigation-item
                title="Overview"
                :iconSrc='home'
                iconAltText="Overview"
                to=""
                :expanded="expanded"
            />
            <main-navigation-item
                title="Mail Analytics"
                :iconSrc='mail'
                iconAltText="Mail"
                to=""
                :expanded="expanded"
            />
            <main-navigation-item
                title="Address Book"
                :iconSrc='book'
                iconAltText="Address"
                to=""
                :expanded="expanded"
            />
            <main-navigation-item
                title="HTML Templates"
                :iconSrc='docPage'
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
  },
  data() {
      return {
        //iconSrc was not working so, I passed the images srcs in as props
        docPage: require('../assets/DocPage.png'),
        book: require('../assets/Book.png'),
        home: require('../assets/Home.png'),
        mail: require('../assets/Mail.png')
      }
  }
}

</script>

<style scoped>
    .main-navigation {
        background-color: #f7f8fa;
        height: 100%;
    }
</style>