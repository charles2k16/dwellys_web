<template>
  <div class="password_container">
    <hr class="hr_rule" />
    <div class="profile_img_container">
      <img src="~/assets/img/user.png" />
      <p>Abenadanks@gmail.com</p>
    </div>
    <el-form
      ref="userAccount"
      class="pt-20"
      v-model="password"
      label-position="top"
    >
      <el-form-item label="Password">
        <el-input
          v-model="password"
          type="password"
          placeholder="Enter your password"
        >
        </el-input>
      </el-form-item>
      <div class="d-flex justify_end py-10">
        <div @click="closeModal">
          <NuxtLink to="/forgotten_password">Forgot password?</NuxtLink>
        </div>
      </div>
      <div class="mt-20">
        <el-button type="primary" class="btn_lg" @click="login"
          >Continue</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PasswordModal',
  data() {
    return {
      password: '' as string,
    };
  },
  methods: {
    closeModal() {
      console.log('modal');
      this.$emit('closePasswordModal');
    },
    login() {},
  },
});
</script>

<style lang="scss" scoped>
.password_container {
  display: flex;
  flex-direction: column;
}
.profile_img_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  img {
    width: 200px;
    border-radius: 50%;
  }
}
</style>
