<template>
  <div>
    <!-- Login dialog -->
    <el-dialog
      :visible.sync="showLoginModal"
      width="60%"
      :destroy-on-close="true"
      custom-class="login_modal"
    >
      <template slot="title">
        <h3 class="">Login or sign in</h3>
      </template>
      <LoginForm @closeLoginModal="closeLoginModal" />
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
      <PropertyPhotoUpload @avatar="ownerAvatar" />
    </el-dialog>
    <el-dialog
      :visible.sync="ownerModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>Send a message</h3>
      </template>
      <SendMessage />
    </el-dialog>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ApplicationHandler",
  data() {
    return {
      loginEmail: "" as string,
      showLoginModal: false as boolean,
      photoModal: false as boolean,
      ownerModal: false as boolean,
    };
  },
  methods: {
    showLogin(): void {
      this.showLoginModal = true;
    },
    closeLoginModal(email: string): void {
      this.loginEmail = email;
      this.showLoginModal = false;
    },
    showPhotoModal(): void {
      this.photoModal = true;
    },
    closePhotoModal(): void {
      this.photoModal = false;
    },
    showOwnerModal(): void {
      this.ownerModal = true;
    },
    closeOwnerModal(): void {
      this.ownerModal = false;
    },
    ownerAvatar(file: Object) {
      this.$emit("avatar", file);
      this.photoModal = false;
    },
  },
});
</script>
<style scoped></style>
