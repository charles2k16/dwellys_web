<template>
  <div class="login_form">
    <h2 class="center pb-20">Login or sign in</h2>
    <el-form
      ref="loginForm"
      :model="loginForm"
      label-position="top"
      :rules="validation"
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
          @click="login"
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
  <!-- <div class="login_text">
      <div class="py-20">
        <img src="~/assets/img/login_logo.png" />
      </div>
      <div>
        <p class="pb-20 discover text-white">
          Discover the world’s hub for <span>houses</span> and
          <span class="bold">properties</span> for sale and rent
        </p>
        <p class="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus
          risus aenean mattis. Odio accumsan viverra ipsum tristique lectus
          pellentesque erat.
        </p>
      </div>
    </div> -->
</template>

<script lang="ts">
import Vue from "vue";
import { IMixinState } from "@/types/mixinsTypes";

export default Vue.extend({
  name: "LoginPage",

  data() {
    return {
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
      (this as any).$refs.loginForm.validate((valid: boolean) => {
        if (valid) {
          this.login();
          this.btnLoading = false;
          // this.$message.success({
          //   message: "You have successfully loggedin",
          //   type: "success",
          // });
        } else {
          this.btnLoading = false;
          (this as any as IMixinState).getNotification(
            "Make sure all required fields are filled",
            "error"
          );
        }
      });
    },
    login() {
      this.btnLoading = true;
      this.$auth
        .loginWith("local", {
          data: {
            email: this.loginForm.email,
            password: this.loginForm.password,
          },
        })
        .then((response: any) => {
          const { user, token } = response.data.data;
          console.log(response);

          this.$auth.setUserToken(token);
          this.$auth.setUser(user);
          // this.$auth.$storage.setLocalStorage("user_data", user);
          (this as any as IMixinState).$message({
            showClose: true,
            message: response.data.message,
            type: "success",
          });
          this.$emit("closeLoginModal");
        })
        .catch((error: any) => {
          this.btnLoading = false;
          (this as any as IMixinState).catchError(error);
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
