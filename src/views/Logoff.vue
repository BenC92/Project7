<template>
  <div id="app">
    
    <router-link to="./login">Login</router-link>
    <router-link to="./signup">Sign up</router-link>
  
    <router-view/>

    <hr>
    <div id="text">
    <h1>Successfully logged off</h1>

    <p>You have successfully logged of. Come back soon</p>
    </div>
  </div>
</template>



<style scoped>
#app {
  text-align: center;
}
#text{
  padding: 5px;
}
</style>