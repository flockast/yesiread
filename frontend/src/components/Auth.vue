<template>
  <div class="auth-wrap">
    <div class="auth-box">
      <div class="auth-box__group">
        <label for="sign-in-login" class="text-sm">Login</label>
        <input type="text" id="sign-in-login" class="input input--full input--sm" v-model="signInLogin">
      </div>
      <div class="auth-box__group">
        <label for="sign-in-password" class="text-sm">Password</label>
        <input type="password" id="sign-in-password" class="input input--full input--sm" v-model="signInPassword">
      </div>
      <div class="auth-box__group">
        <button class="button button--full button--sm">Sign In</button>
      </div>
    </div>

    <div class="auth-or">— or —</div>

    <div class="auth-box">
      <div class="auth-box__group">
        <label for="sign-up-login" class="text-sm">Login</label>
        <input type="text" id="sign-up-login" class="input input--full input--sm" v-model="signUpLogin">
      </div>
      <div class="auth-box__group">
        <label for="sign-up-password" class="text-sm">Password</label>
        <input type="password" id="sign-up-password" class="input input--full input--sm" v-model="signUpPassword">
      </div>
      <div class="auth-box__group">
        <button class="button button--full button--sm">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signInLogin: '',
      signInPassword: '',
      signUpLogin: '',
      signUpPassword: ''
    }
  }
}
</script>

<style lang="scss">
.auth-wrap {
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.auth-or {
  margin: 4rem;
  white-space: nowrap;
  text-align: center;
  @media (max-width: 640px) {
    width: 100%;
  }
}
.auth-box {
  padding: 15px;
  box-shadow: 0 0 0 2px #ececec, 0 0 0 3px black;
  border-radius: 4px;
  &__group {
    margin-bottom: 2rem;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
}
</style>
