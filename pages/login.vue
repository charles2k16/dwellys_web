<template>
  <div>
    <div class="section">
      <el-dialog
        :visible.sync="showAddClassModal"
        width="40%"
        :destroy-on-close="true"
        custom-class="mobile-modal"
      >
        <div class="login_section">
          <div>login</div>
          <div>Text</div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoginPage",

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.login_section {
  display: flex;
}
</style>
