<template>
  <div>
    <!-- Login dialog -->
    <el-dialog
      :visible.sync="showLoginModal"
      width="60%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <LoginForm />
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
    };
  },
  methods: {
    showLogin(user: string): void {
      console.log(user);
      this.showLoginModal = true;
    },
    closeAddClassModal() {
      this.showLoginModal = false;
    },
  },
});
</script>
