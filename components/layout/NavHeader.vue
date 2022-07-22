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
      <!-- <div class="header_content hidden-sm-and-down">
        <section class="pr-20">
          <NuxtLink to="/">Property valuation</NuxtLink>
        </section>
        <section class="pl-10">
          <NuxtLink to="/property_account">Become an agent</NuxtLink>
        </section>
      </div> -->
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
              <section @click="drawer = false" class="pb-20">
                <NuxtLink to="/">Property valuation</NuxtLink>
              </section>
              <section @click="drawer = false" class="pb-20">
                <NuxtLink to="/property_account">Become an agent</NuxtLink>
              </section>
              <section @click="drawer = false" class="pb-20">
                <NuxtLink to="/messages">Messages</NuxtLink>
              </section>

              <section
                class="login"
                @click="showLoginModal"
                v-if="!$auth.loggedIn"
              >
                <div class="login_text">
                  <p>Login</p>
                  <img src="~/assets/img/user_icon.png" alt="icon" />
                </div>
              </section>
              <section
                class="login"
                @click="$auth.logout()"
                v-if="$auth.loggedIn"
              >
                <div class="login_text">
                  <p>Logout</p>
                  <!-- <img src="~/assets/img/user_icon.png" alt="" /> -->
                </div>
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
            <img
              :src="src + userData.avatar"
              alt="avatar"
              class="user_avatar"
              v-if="$auth.user"
            />
            <img src="~/assets/img/user_icon.png" alt="icon" v-else />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-if="!$auth.loggedIn">
              <p class="py-10" @click="showLoginModal">Login</p>
            </el-dropdown-item>

            <el-dropdown-item>
              <section class="py-10">
                <NuxtLink to="/">Property valuation</NuxtLink>
              </section>
            </el-dropdown-item>
            <el-dropdown-item v-if="userData.user_type == 'lister'">
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
    this.userData = this.$auth.$storage.getLocalStorage("user_data");
    console.log(this.$auth.$storage.getLocalStorage("user_data"));
    console.log(this.$auth);
  },
  updated() {
    this.userData = this.$auth.$storage.getLocalStorage("user_data");
    console.log(this.$auth.$storage.getLocalStorage("user_data"));
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
.user_avatar {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-left: 10px;
}
/* @media (max-width: 768px) {
  .header_content {
    display: none;
  }
} */
</style>
