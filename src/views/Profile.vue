<template>
  <div>
    <H1>Profile</H1>
    <!-- <router-link to="/home">Home</router-link> -->

    <input v-model="postText" type="text" />
    <button type="submit">Submit</button>

    <button @click="deleteUser">Delete User</button>
  </div>
</template>
<script>
export default {
  methods: {
    deleteUser() {},
  },
};
</script>