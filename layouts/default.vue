<template>
  <div>
    <el-container style="height: 100vh">
      <el-main>
        <NavHeader />
        <Nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue';
import global from '~/mixins/global.ts';

Vue.mixin(global);
export default {};
</script>
