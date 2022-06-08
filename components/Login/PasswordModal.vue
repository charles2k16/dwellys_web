<template>
  <div class="password_container">
    <div class="profile_img_container pb-20">
      <img src="~/assets/img/user.png" />
      <p class="pt-10">Abenadanks@gmail.com</p>
    </div>
    <el-form
      ref="userAccount"
      class="pt-20"
      v-model="password"
      type="password"
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
          <NuxtLink to="/reset_password">Forgot password?</NuxtLink>
        </div>
      </div>
      <div class="mt-20">
        <el-button
          type="primary"
          class="btn_lg"
          @click="login"
          :disabled="!password"
          >Continue</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PasswordModal",
  props: {
    email: {
      type: String,
      required: true,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      password: "" as string,
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
      this.$auth
        .loginWith("local", {
          data: {
            username: this.email,
            password: this.password,
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    closeModal() {
      console.log("modal");
      this.$emit("closePasswordModal");
    },
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
  img {
    width: 100%;
    max-width: 200px;

    border-radius: 50%;
  }
}

@media (max-width: 425px) {
  .profile_img_container {
    img {
      max-width: 100px;
    }
  }
}
</style>
