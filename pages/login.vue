<template>
  <div class="login_form">
    <h2 class="center pb-20">Login</h2>

    <p v-if="showVerifyInfo" style="color: red">
      Verify your email address to continue
    </p>
    <el-form
      ref="loginForm"
      :model="loginForm"
      label-position="top"
      :rules="validation"
      v-loading="btnLoading"
    >
      <el-form-item label="Email address" prop="email">
        <el-input
          v-model="loginForm.email"
          placeholder="Enter email"
          prefix-icon="el-icon-message"
        />
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="Enter your password"
          suffix-icon="el-icon-view"
        >
        </el-input>
      </el-form-item>
      <div class="mt-20">
        <el-button
          type="primary"
          class="btn_lg"
          @click="signIn"
          :loading="btnLoading"
          >Continue</el-button
        >
      </div>
    </el-form>
    <el-col class="separater py-20">
      <div class="first_separater"></div>
      <div class="mx-10 bold">or</div>
      <div class="second_separater"></div>
    </el-col>
    <el-col class="media_login">
      <div class="facebook" @click="facebookSignIn">
        <img src="~/assets/img/facebook.png" width="25px" />
        <p>Continue with Facebook</p>
      </div>
      <div class="google" type="info" @click="googleSignIn">
        <img src="~/assets/img/google.png" />
        <p>Continue with Google</p>
      </div>
    </el-col>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IMixinState } from "@/types/mixinsTypes";

export default Vue.extend({
  name: "LoginPage",

  data() {
    return {
      showVerifyInfo: false,
      btnLoading: false as boolean,
      loginForm: {
        email: "" as string,
        password: "" as string,
      },
      validation: {
        email: [
          {
            required: true,
            type: "email",
            message: "Please enter valid email",
            trigger: ["blur", "change"],
          },
          { min: 5, message: "Length should be 5 or more", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    signIn() {
      this.btnLoading = true;
      (this as any).$refs.loginForm.validate((valid: boolean) => {
        if (valid) {
          this.checkUserVerification();
        } else {
          this.btnLoading = false;
          (this as any as IMixinState).getNotification(
            "Make sure all required fields are filled",
            "error"
          );
        }
      });
    },
    login(response: any) {
      const { user, token } = response.data.data;
      console.log(user, token, "response");

      this.$auth.setUserToken(token);
      this.$auth.setUser(user);
      this.$auth.$storage.setLocalStorage("user_data", user);
      (this as any as IMixinState).$message({
        showClose: true,
        message: response.data.message,
        type: "success",
      });
      this.$router.push("/");
    },
    checkUserVerification() {
      this.$auth
        .loginWith("local", {
          data: {
            email: this.loginForm.email,
            password: this.loginForm.password,
          },
        })
        .then((response: any) => {
          this.btnLoading = false;
          const message = response.data.message;
          if (
            message ==
            "An email has been set to you in order to complete your registration"
          ) {
            this.showVerifyInfo = true;
            (this as any as IMixinState).getNotification(
              "Verify your email address to continue",
              "warning"
            );
          } else {
            this.login(response);
          }
        })
        .catch((error: any) => {
          this.btnLoading = false;
          (this as any as IMixinState).catchError(error);
          if (error?.response?.data) {
            (this as any as IMixinState).getNotification(
              error?.response?.data.message,
              "warning"
            );
          }
        });
    },
    facebookSignIn() {
      this.$auth
        .loginWith("facebook")
        .then((response: any) => {
          // const { user, token } = response.data.data;
          console.log(response);
          // this.$auth.setUserToken(token);
          // this.$auth.setUser(user);
          // this.$emit("closeLoginModal");
          // this.$message({
          //   message: response.data.message,
          //   type: "success",
          // });
        })
        .catch((error: any) => {
          console.log(error);
          // this.btnLoading = false;
          // (this as any as IMixinState).catchError(error);
        });
    },
    googleSignIn() {
      this.$auth
        .loginWith("google")
        .then((response: any) => {
          // const { user, token } = response.data.data;
          console.log(response);

          // this.$auth.setUserToken(token);
          // this.$auth.setUser(user);
          // this.$emit("closeLoginModal");
          // this.$message({
          //   message: response.data.message,
          //   type: "success",
          // });
        })
        .catch((error: any) => {
          console.log(error);
          // this.btnLoading = false;
          // (this as any as IMixinState).catchError(error);
        });
    },
  },
});
</script>

<style lang="scss" scoped>
$small_screen: 426px;
.login_form {
  width: 40%;
  margin: 20px auto;
  padding-top: 10px;
  @media (max-width: $small_screen) {
    width: 100%;
    padding-right: 0;
  }
  .media_login {
    display: flex;
    flex-direction: column;
    .facebook,
    .google,
    .apple {
      background: #f1f5f9;
      display: flex;
      cursor: pointer;
      margin-bottom: 10px;
      padding: 20px;
      line-height: 20px;
      color: #44556f;
      border-radius: 8px;
      @media (max-width: $small_screen) {
        padding: 10px;
        line-height: 0;
        font-size: 14px;
      }
      p {
        flex: 1;
        text-align: center;
      }
    }
  }
  .separater {
    display: flex;
    align-items: center;
    .first_separater,
    .second_separater {
      width: 45%;
      border: 1px solid #e2e8f0;
      height: 2px;
      @media (max-width: $small_screen) {
        width: 43%;
      }
    }
  }
}
</style>

// https://www.getpostman.com/collections/509fe1fee94ba39e47fb
