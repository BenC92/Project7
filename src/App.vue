<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <img class="logo" alt="Vue logo" src="./assets/groupomania.png" />
      <b-navbar-brand
        ><router-link to="/home">Home</router-link></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>Menu</em>
            </template>
            <b-dropdown-item
              ><router-link to="/profile">Profile</router-link></b-dropdown-item
            >
            <b-dropdown-item
              ><router-link to="/logoff">Log off</router-link></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <TheNavigation />
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>



