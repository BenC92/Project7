<template>
  <div id="app">
    <b-form @submit.prevent="createPost">
      <input v-model="postTitle" type="text" />
      <input v-model="postText" type="text" />
      <input type="file" @change="onFileChange" />
      <button type="submit">Submit</button>
    </b-form>

    <Post
      v-for="(post, index) in posts"
      :key="index"
      :title="post.title"
      :text="post.text"
      :img-src="post.imgSrc"
    />

    <div v-if="!image"></div>
    <div v-else>
      <img :src="image" />
      <button @click="removeImage">Delete image</button>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";




export default {
  components: {
    Post,
  },
  data: () => ({
    postTitle: "",
    postText: "",
    image: "",
    posts: [
      {
        title: "",
        text: "",
      },
      {
        title: "",
        imgSrc: "",
      },
    ],
  }),
  methods: {
    createPost() {
      const post = {
        title: this.postTitle,
        text: this.postText,
        userId: 1,
      };
      this.posts.unshift(post);
      console.log(JSON.stringify(post))
     
     fetch ('http://localhost:3000/api/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post)
          
        })
          // .then(res => res.json())
          // .then(data => console.log(data))
          .catch(err => console.error(err))
      // fetch('http://localhost:3000/api/post', {
      //     method: 'POST',
      //     body: JSON.stringify(post),
      //     headers: {
      //         'Content-Type': 'application/json'
      //     }
      // })
      //     .then(res => res.json())
      //   .then(res => console.log(res))
      //   .catch(err =>{
      //     console.error('Error: ',err);
      //   })
      
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
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
    removeImage: function () {
    this.image = '';
    }
  },
  mounted(){
    fetch('http://localhost:3000/api/post')
  .then(response => response.json())
  .then(data => {
    this.posts = data
  }).catch(err => {
    console.error('Error: ', err);
  });
  }
};
</script>



<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>