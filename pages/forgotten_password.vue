<template>
  <div class="forgotten">
    <div style="width: 50%">
      <div class="forgotten_text">
        <h3>Have you forgotten your password?</h3>
        <p>
          Enter the e-mail address to which you registered your account in the
          system, and we’ll send you reset instructions.
        </p>
      </div>
      <div style="width: 80%">
        <el-form
          ref="userAccount"
          v-model="account"
          class="client"
          label-position="top"
        >
          <el-form-item label="Email address">
            <el-input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <div style="margin-top: 20px">
          <el-button class="email_btn" @click="submitEmail"
            >Send a link to reset password</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ForgottenPage",

  data() {
    return {
      email: "" as string,
    };
  },
  methods: {
    submitEmail() {},
  },
});
</script>

<style lang="scss" scoped>
.forgotten {
  padding-top: 30px;

  width: 85%;
  margin: 0 auto;
  .forgotten_text {
    padding-top: 20px;
    padding-bottom: 20px;
    h3 {
      padding-bottom: 10px;
      line-height: 28px;
    }
    p {
      line-height: 20px;
    }
  }
  .email_btn {
    float: right;
    border-radius: 8px;
    background: var(--button-bg);
    color: white;
  }
}
</style>
