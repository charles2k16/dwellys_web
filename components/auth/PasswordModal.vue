<template>
  <div class="password_container">
    <div class="profile_img_container pb-20">
      <img src="~/assets/img/user.png" />
      <p class="pt-10">{{ email }}</p>
    </div>
    <el-form
      ref="password"
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
          suffix-icon="el-icon-view"
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
          :loading="btnLoading"
          >Continue</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IMixinState } from "@/types/mixinsTypes";

export default Vue.extend({
  name: "PasswordModal",
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      password: "" as string,
      btnLoading: false as boolean,
    };
  },
  methods: {
    login() {
      this.btnLoading = true;
      this.$auth
        .loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((response: any) => {
          const { user, token } = response.data.data;
          console.log(response);
          this.$auth.setUser(user);
          this.$auth.$storage.setLocalStorage("user_token", token);
          this.btnLoading = false;
        })
        .catch((error: any) => {
          this.btnLoading = false;
          (this as any as IMixinState).catchError(error);
        });
    },
    closeModal() {
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
    max-width: 150px;
    border-radius: 50%;
  }

  p {
    font-size: 14px;
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
