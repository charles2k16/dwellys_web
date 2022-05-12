<template>
  <footer class="footer">
    <el-row>Dwellys</el-row>
    <hr class="hr_rule" />
    <el-row>
      <el-col>Dwellys</el-col>
      <el-col></el-col>
      <el-col></el-col>
    </el-row>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "footer",
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
.footer {
  position: absolute;
  background: pink;
  /* width: 100%; */
  bottom: 0;
}
</style>
