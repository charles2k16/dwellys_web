<template>
  <div class="section reset_password">
    <div>
      <div class="forgotten_text mb-20 mt-20">
        <h3>Have you forgotten your password?</h3>
        <p>
          Enter the e-mail address to which you registered your account in the
          system, and we’ll send you reset instructions.
        </p>
      </div>
      <hr class="hr_rule" />

      <div class="reset_div mt-20">
        <el-form
          ref="userAccount"
          v-model="email"
          class="client"
          label-position="top"
        >
          <el-form-item label="Email address">
            <el-input v-model="email" type="email" placeholder="Enter email">
            </el-input>
          </el-form-item>
        </el-form>
        <div class="mt-20 register_btn">
          <el-button
            type="primary"
            class="submit_register_button"
            @click="submitEmail"
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

<style lang="scss">
.forgotten_text {
  max-width: 500px;
  width: 100%;

  h3 {
    padding-bottom: 10px;
    line-height: 28px;
  }
}
.email_btn {
  float: right;
  border-radius: 8px;
  background: var(--button-bg);
  color: white;
}
.reset_div {
  max-width: 500px;
  width: 100%;
}

@media (max-width: 425px) {
  .reset_password {
    padding: 0 20px 10px;
  }
  .reset_div {
    height: 300px;
  }
}
</style>
