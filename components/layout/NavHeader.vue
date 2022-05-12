<template>
  <div class="header">
    <ApplicationHandler ref="loginAction" />
    <div class="header_wrapper section">
      <div style="display: flex; align-items: center">
        <img src="~/assets/img/logo.png" />
      </div>
      <div class="header_content">
        <section class="property">
          <NuxtLink to="/">Property valuation</NuxtLink>
        </section>
        <section class="agent">
          <NuxtLink to="/">Become an agent</NuxtLink>
        </section>
      </div>
      <div class="header_content">
        <section class="messages"><NuxtLink to="/">Messages</NuxtLink></section>
        <section class="login" @click="showLoginModal">
          <div class="login_text">
            <p>Login</p>
            <i class="el-icon-user-solid"></i>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ApplicationHandler from "@/handlers/ApplicationHandler.vue";

export default Vue.extend({
  name: "NavHeader",
  components: {
    ApplicationHandler,
  },
  data() {
    return {
      user: "login",
    };
  },
  methods: {
    showLoginModal(): void {
      console.log("show");
      (this as any).$refs.loginAction.showLogin(this.user);
    },
  },
});
</script>
<style scoped>
a {
  color: #334155;
}
.header {
  line-height: 18px;
}
.header_wrapper {
  display: flex;
  justify-content: space-between;
}
.header_content {
  display: flex;
  align-items: center;
}
.property,
.messages {
  padding-right: 15px;
}

.agent,
.login {
  padding-left: 15px;
}

.login {
  border: 1px solid #e2e8f0;
  border-radius: 40px;
  cursor: pointer;
  padding: 5px 10px;
  background: #f8fafc;
}
.login_text {
  display: flex;
}
.login_text p {
  padding-right: 8px;
}
.login_text i {
  padding-top: 3px;
}
</style>
