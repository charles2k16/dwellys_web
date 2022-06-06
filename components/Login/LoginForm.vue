<template>
  <div class="login_content">
    <div class="login_form">
      <!-- <div class="px-20"> -->
      <el-form ref="userAccount" v-model="email" label-position="top">
        <el-form-item label="Email address">
          <p style="color: red" v-if="error">
            <i class="el-icon-warning pr-10"></i>{{ error }}
          </p>
          <el-input v-model="email" type="email" placeholder="Enter email">
          </el-input>
        </el-form-item>
        <div class="mt-20">
          <el-button
            type="primary"
            class="btn_lg"
            :disabled="!email"
            @click="login"
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
          <img src="~/assets/img/facebook.png" />
          <p>Continue with Facebook</p>
        </div>
        <div class="google" type="info" @click="googleSignIn">
          <img src="~/assets/img/google.png" />
          <p>Continue with Google</p>
        </div>
        <div class="apple" type="info">
          <img src="~/assets/img/apple.png" />
          <p>Apple ID</p>
        </div>
      </el-col>
      <!-- </div> -->
    </div>
    <div class="login_text">
      <div class="py-20">
        <img src="~/assets/img/login_logo.png" />
      </div>
      <div>
        <p class="pb-20 discover">
          Discover the world’s hub for <span>houses</span> and
          <span class="bold">properties</span> for sale and rent
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus
          risus aenean mattis. Odio accumsan viverra ipsum tristique lectus
          pellentesque erat.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LoginForm",
  data() {
    return {
      step: 1 as number,
      totalSteps: 2 as number,
      email: "" as string,
      error: "" as string,
    };
  },

  methods: {
    login() {
      if (
        String(this.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        this.error = "";
        this.$emit("closeLoginModal", this.email);
      } else {
        this.error = "Enter a valide email address";
      }
    },
    facebookSignIn() {
      console.log("facebook");
      this.$auth.loginWith("facebook");
    },
    googleSignIn() {
      console.log("google");
      this.$auth.loginWith("google");
    },
  },
});
</script>

<style lang="scss">
.login_content {
  display: flex;
  width: 100%;
  .login_form {
    width: 50%;
    padding-right: 20px;
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
        p {
          width: 50%;
          margin: 0 auto;
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
      }
    }
  }
  .login_text {
    background: linear-gradient(137.93deg, #cf0100 23.72%, #8d0100 84.77%);
    width: 50%;
    padding: 30px;
    color: white;
    img {
      width: 100px;
    }
    h3 {
      font-size: 26px;
      line-height: 28px;
    }
    .discover {
      font-size: 24px;
      line-height: 28px;
      span {
        font-weight: 700;
        font-size: 28px;
      }
    }
    // background: #f12424;
  }

  @media (max-width: 425px) {
    .login_form {
      width: 100%;
      padding-right: 0;
      .media_login {
        .facebook,
        .google,
        .apple {
          background: #f1f5f9;
          display: flex;
          margin-bottom: 10px;
          padding: 10px 0;

          line-height: 20px;
          color: #44556f;
          border-radius: 8px;
          p {
            width: 50%;
            margin: 0 auto;
            text-align: center;
          }
        }
      }
    }

    .login_text {
      display: none;
    }
  }
}
</style>
