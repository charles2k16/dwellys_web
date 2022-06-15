<template>
  <div class="header">
    <ApplicationHandler ref="modalHandler" />

    <div class="header_wrapper section">
      <div style="display: flex; align-items: center">
        <NuxtLink to="/">
          <img src="~/assets/img/logo.png" />
        </NuxtLink>
      </div>
      <div class="header_content">
        <section class="pr-20">
          <NuxtLink to="/">Property valuation</NuxtLink>
        </section>
        <section class="pl-10">
          <NuxtLink to="/property_account">Become an agent</NuxtLink>
        </section>
      </div>
      <div class="header_content">
        <section class="pr-20">
          <NuxtLink to="/messages">Messages</NuxtLink>
        </section>
        <section class="login" @click="showLoginModal" v-if="!$auth.loggedIn">
          <div class="login_text">
            <p>Login</p>
            <img src="~/assets/img/user_icon.png" alt="icon" />
          </div>
        </section>
        <section class="login" @click="$auth.logout()" v-if="$auth.loggedIn">
          <div class="login_text">
            <p>Logout</p>
            <!-- <img src="~/assets/img/user_icon.png" alt="" /> -->
          </div>
        </section>
      </div>
    </div>
    <hr class="hr_rule register_header_line mt-20" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ApplicationHandler from '@/handlers/ApplicationHandler.vue';

export default Vue.extend({
  name: 'NavHeader',
  components: {
    ApplicationHandler,
  },
  data() {
    return {
      user: 'login',
    };
  },
  methods: {
    showLoginModal(): void {
      (this as any).$refs.modalHandler.showLogin(this.user);
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
  padding: 20px 0 0;
}
.header_wrapper {
  display: flex;
  justify-content: space-between;
}
.header_content {
  display: flex;
  align-items: center;
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
.login_text img {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .header_content {
    display: none;
  }
}
</style>
