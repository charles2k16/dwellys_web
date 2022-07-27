<template>
  <div class="header">
    <ApplicationHandler ref="modalHandler" />
    <!-- {{ $auth }} -->
    <div class="header_wrapper section">
      <div style="display: flex; align-items: center">
        <NuxtLink to="/">
          <img src="~/assets/img/logo.png" />
        </NuxtLink>
      </div>
      <div class="header_content hidden-sm-and-down">
        <section class="pr-20">
          <NuxtLink to="/">Property valuation</NuxtLink>
        </section>
        <section class="pl-10">
          <NuxtLink to="/property_account">Become an agent</NuxtLink>
        </section>
      </div>
      <div class="drawer hidden-md-and-up">
        <svg
          @click="drawer = true"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-align-right"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="10" y1="12" x2="20" y2="12" />
          <line x1="6" y1="18" x2="20" y2="18" />
        </svg>

        <el-drawer
          size="60%"
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose"
        >
          <div class="drawer_content px-20">
            <div class="d-flex_column">
              <span class="login-avatar">
                Login
                <img
                  v-if="hasUserData"
                  :src="src + userData.avatar"
                  alt="avatar"
                  class="user_avatar"
                />

                <img src="~/assets/img/user_icon.png" alt="icon" v-else />
              </span>

              <section @click="drawer = false" class="pb-20 mt-20">
                <NuxtLink to="/register">Register</NuxtLink>
              </section>
              <section @click="drawer = false" class="pb-20">
                <NuxtLink to="/">Property valuation</NuxtLink>
              </section>
              <section @click="drawer = false" class="pb-20">
                <NuxtLink to="/property_account">Become an agent</NuxtLink>
              </section>
              <section @click="drawer = false" class="pb-20">
                <NuxtLink to="/messages">Messages</NuxtLink>
              </section>
            </div>
          </div>
        </el-drawer>
      </div>
      <div class="header_content hidden-sm-and-down">
        <section class="pr-20">
          <NuxtLink to="/messages">Messages</NuxtLink>
        </section>

        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span class="login-avatar">
              Login
              <img
                v-if="hasUserData"
                :src="src + userData.avatar"
                alt="avatar"
                class="user_avatar"
              />

              <img src="~/assets/img/user_icon.png" alt="icon" v-else />
            </span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-if="!$auth.loggedIn">
              <p class="py-10" @click="showLoginModal">Login</p>
            </el-dropdown-item>

            <el-dropdown-item>
              <p class="py-10" @click="$router.push('/register')">Register</p>
            </el-dropdown-item>

            <el-dropdown-item>
              <section class="py-10">
                <NuxtLink to="/">Property valuation</NuxtLink>
              </section>
            </el-dropdown-item>
            <el-dropdown-item v-if="hasUserData">
              <section class="py-10">
                <NuxtLink to="/property_upload">Property Upload</NuxtLink>
              </section>
            </el-dropdown-item>
            <el-dropdown-item>
              <section class="py-10">
                <NuxtLink to="/property_account">Become an agent</NuxtLink>
              </section>
            </el-dropdown-item>
            <el-dropdown-item v-if="$auth.loggedIn" style="color: red">
              <p class="py-10" @click="$auth.logout()">
                Logout
              </p></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <hr class="hr_rule register_header_line mt-20" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "element-ui/lib/theme-chalk/display.css";
import ApplicationHandler from "@/handlers/ApplicationHandler.vue";

export default Vue.extend({
  name: "NavHeader",
  components: {
    ApplicationHandler,
  },
  data() {
    return {
      userData: {} as any,
      src: "http://localhost:8000/",
      user: "login" as string,
      drawer: false as boolean,
      direction: "rtl",
    };
  },
  created() {
    if (this.$auth.user !== null) {
      this.userData = this.$auth.user;
    }
    console.log(this.$auth);
  },
  computed: {
    hasUserData() {
      return this.$auth.user !== null;
    },
  },
  methods: {
    showLoginModal(): void {
      this.drawer = false;
      (this as any).$refs.modalHandler.showLogin(this.user);
    },
    handleClose(done: string) {
      this.drawer = false;
      console.log(done);
    },
  },
});
</script>
<style lang="scss" scoped>
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
.login-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  padding: 5px 10px;
  border-radius: 20px;

  .user_avatar {
    border-radius: 50%;
    height: 35px;
    width: 35px;
  }

  img {
    margin-left: 10px;
  }
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

/* @media (max-width: 768px) {
  .header_content {
    display: none;
  }
} */
</style>
