<template>
  <div>
    <b-form inline>

      <label class="sr-only" for="inline-form-input-username">Username</label>
      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input
          id="inline-form-input-username"
          placeholder="Username"
        ></b-form-input>
      </b-input-group>

      
      <label class="sr-only" for="inline-form-input-Password">Password</label>
      <b-form-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="password"
        required
      ></b-form-input>

      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
        >Remember me</b-form-checkbox
      >

      <b-button variant="primary">Submit</b-button>

      <!-- <router-link to="/login">Login</router-link> -->
      <!-- <router-link to="/signup">Signup</router-link> -->

      <!-- <router-view/> -->
    </b-form>
  </div>
</template>

<script>
export default {};
</script>