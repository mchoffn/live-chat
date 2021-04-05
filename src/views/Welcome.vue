<template>
  <div class="welcome container">
    <p>Welcome</p>
  </div>
</template>

<script>

import Signupform from '../components/SignupForm.vue'

export default {
    components: { Signupform }
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>