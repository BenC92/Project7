<template>
  <div id="app">
    <form @submit.prevent="createPost">
      <input v-model="postTitle" type="text">
      <input v-model="postText" type="text">
      <input type="file" @change="onFileChange">
      <button type="submit">Submit</button>
     
    </form>
    <Post
    v-for="(post,index) in posts"
    :key="index"
    :title="post.title"
    :text="post.text"
    :img-src="post.imgSrc"
    />
 
    <div v-if="!image">
    </div>
    <div v-else>
      <img :src="image" />
      <!-- <button @click="removeImage">Delete image</button> -->
   </div>

    <TheNavigation/>
    <router-view/>
    
  </div>
</template>

<script>
import Post from '@/components/Post.vue'




export default {
  name: 'App',
  components: {
    Post
  },
  data: () => ({
    postTitle:'',
    postText:'',
    image: '',
    posts: [
      {
        title: '',
        text: ''
      },
      {
        title: '',
        imgSrc: ''
      }
    ]
  }),
  methods: {
    createPost (){
      const post = {
        title: this.postTitle,
        text: this.postText
      }
      this.posts.unshift(post)
    },
     onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        //var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      //removeImage: function (e) {
        //this.image = '';
      //}
  }
}
</script>



<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  margin-top: 60px;
  
  }
</style>