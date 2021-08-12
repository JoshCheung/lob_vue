<template>
  <div className="app-container">
    <div className="main-container">
      <div className="logo-container">
        <img className="logo" :src="require('../public/lob-logo.png')"/>
      </div>
      <div className="main-component">
        <div className="navigation-container">
          <MainNaviation/>
        </div>
        <div className="postcard-form-container">
          <PostCardForm @hasAddressError="getAddressError"/>
        </div>
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
  data() {
    return {
      
    }
  },
  components: {
    PostCardForm,
    MainNaviation
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.app-container{
  width: 100vw;
  display: flex;
  flex-direction: column;  
}

.logo-container {
  width: 100%;
  display: flex;
  border-bottom: 3px solid #e9ecf5
}

.logo {
   width: 8%;
}
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-component {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.navigation-container{
  display: flex;
  border-right: 3px solid #e9ecf5;
  background-color: #f7f8fa;
  min-height: 700px;
}

.postcard-form-container { 
  display: flex;
  width: 100%;
}

</style>
