<template>
  <div>
    <!-- Login dialog -->
    <el-dialog
      :visible.sync="showLoginModal"
      width="80%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3 class="">Login or sign up</h3>
      </template>
      <LoginForm @closeLoginModal="closeLoginModal" />
    </el-dialog>
    <el-dialog
      :visible.sync="showPasswordModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3 class="">Welcome back, Richmond</h3>
      </template>
      <PasswordModal @closePasswordModal="closePasswordModal" />
    </el-dialog>

    <el-dialog
      :visible.sync="photoModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>Upload your photo</h3>
      </template>
      <PropertyModal />
    </el-dialog>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ApplicationHandler",
  data() {
    return {
      user: "ass" as string,
      showLoginModal: false as boolean,
      showPasswordModal: false as boolean,
      photoModal: false,
    };
  },
  methods: {
    showLogin(user: string): void {
      console.log(user);
      this.showLoginModal = true;
    },
    closeLoginModal() {
      this.showLoginModal = false;
      this.showPasswordModal = true;
    },
    showPhotoModal() {
      console.log("in");
      this.photoModal = true;
    },
    closePhotoModal() {
      this.photoModal = false;
    },
    closePasswordModal() {
      console.log("handler");
      this.showPasswordModal = false;
    },
  },
});
</script>
<style scoped></style>
