<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        class="Email"
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="User Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="imput-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="passwort"
          placeholder="password"
          required
          ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-5"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Remember me </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },mounted(){
    fetch('http://localhost:3000/api/user')
  .then(response => response.json())
  .then(data => {
    this.user = data
  }).catch(err => {
    console.error('Error: ', err);
  });
  }
};

</script>

<style>
#Email {
  color: white;
}
</style>

 