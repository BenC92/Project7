<template>
    <div class="home">
      <div class="container">
        <Post />
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped></style>
  
  <script>
  
  import Post from "@/components/post.vue";
  
  export default {
    name: "Home",
    components: {
      Post,
    },
  };
  </script>
  