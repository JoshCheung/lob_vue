<template>
  <div className="app-container">
    <div className="logo-container">
      <img className="logo" :src="require('./assets/lob-logo.png')"/>
    </div>
    <div className="main-component">
      <div className="navigation-container">
        <MainNaviation/>
      </div>
      <div className="postcard-form-container">
        <PostCardForm/>
      </div>
    </div>
  </div>
</template>
<script> 

// import homeIcon from "@lob/ui-components/src/components/Icons/Home.vue"
import PostCardForm from "./components/PostCardForm.vue"
import MainNaviation from "./components/MainNavigation.vue"
export default {
  name: 'App',
  components: {
    PostCardForm,
    MainNaviation
    // homeIcon
    // HelloWorld,
    // Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  /* margin-top: 60px; */
}

.app-container{
  height: 100%;
  width: 100%;
}

.logo-container {
  width: 100%;
  border-bottom: 3px solid #e9ecf5
}

.logo {
  width: 12vh;
}

.main-component {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.navigation-container{
  border-right: 3px solid #e9ecf5;
}

.postcard-form-container { 
  width: 100%;
}

</style>
