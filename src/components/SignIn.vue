<template>
  <div class="sign-in px-4 py-3">
    <h1>Sign In</h1>
    <div class="sign-in-baseinput">
      <div class="email">
        <label for="" class="input-head">Email</label>
        <BaseInput
          placeholder="Type Your Email"
          class="firstname-input"
          v-model="email"
        />
      </div>
      <div class="password py-2">
        <label for="" class="input-head">Password</label>
        <BaseInput
          placeholder="Type Your Password"
          class="firstname-input"
          v-model="password"
        />
      </div>
    </div>
    <div class="py-4">
      <Basebutton
        title="Sign In"
        height="52"
        width="361"
        @Click="SignIn"
        :loading="store.state.signInLoader"
      />
    </div>
    <div class="no-account">
      <p>
        Don't Have an Account? <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import store from "../store/store";
import BaseInput from "./BaseInput.vue";
import Basebutton from "./Basebutton.vue";
let email = ref("");
let password = ref("");
const SignIn = () => {
  if (!email.value || !password.value) {
    alert("Please Check your Email and Password");
  }
  store.dispatch("singnInForm", {
    email: email.value,
    password: password.value,
  });
};
</script>
<style lang="scss" scoped>
.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h1 {
    font-family: "Proxima Nova";
    font-size: 30px;
    color: #36454f;
    text-align: center;
  }
  .input-head {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #36454f;
  }
  .sign-in-baseinput {
    align-items: center;
    width: 100%;
  }
  .email {
    width: 100%;
  }
  .password {
    width: 100%;
  }
  .no-account {
    p {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 12px;
      color: #36454f;
      a {
        color: #cc5500;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
}
</style>
