<template>
  <div class="container">
     <div id="nav">
        <img alt="Vue logo" src="./assets/groupomania.png">
        <TheForm/>
        <TheNavigation/>
        <router-view/>
      </div>
    </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue"


export default {
 components:{
   TheNavigation
  
 }
}
</script>

