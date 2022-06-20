<template>
  <el-row>
    <hr class="hr_rule" />
    <div class="d-flex pb-20 pt-10">
      <img src="~/assets/img/user_detail_img.png" />
      <div class="ml-20">
        <p>Abena Dankwa Have</p>
        <p style="font-size: 12px; color: #64748b">Independent agent</p>
      </div>
    </div>
    <hr class="hr_rule" />
    <el-form class="pt-20">
      <el-input
        v-model="message"
        placeholder="Write a message to send"
        type="textarea"
      ></el-input>
    </el-form>
    <div class="d-flex justify_end pt-20">
      <el-button type="info">Cancel</el-button>
      <el-button type="primary">Send message</el-button>
    </div>
  </el-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SendMessage",
  data() {
    return {
      message: "" as string,
    };
  },
  methods: {
    login() {},
  },
});
</script>

<style lang="scss"></style>
