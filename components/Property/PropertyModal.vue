<template>
  <el-row :sm="24" :md="12" class="p-20">
    <div class="photo_content">
      <div class="profile_holder mr-20">
        <i class="el-icon-user-solid"></i>
      </div>
    </div>
    <el-row class="photo_text">
      <i class="el-icon-warning-outline"></i>
      <el-col class="photo_main_text">
        <small
          >Must be an actual photo of you.<br />
          Logos, clip-art, group photos, and digitally-altered images are not
          allowed</small
        >
        <p><i class="el-icon-link"></i>Learn more</p></el-col
      >
    </el-row>
    <div class="d-flex justify_end">
      <el-upload
        class="upload-demo"
        action="#"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
      >
        <el-button size="small" type="info">Select an image of you</el-button>
      </el-upload>
      <el-button type="primary" class="ml-20">Save</el-button>
    </div>
  </el-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PropertyProfile",
  data() {
    return {
      email: "" as string,
    };
  },
  methods: {
    login() {},
  },
});
</script>

<style lang="scss">
.photo_content {
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
  width: 100%;
  .profile_holder {
    background: #f1f5f9;
    max-width: 220px;
    width: 100%;
    max-height: 300px;
    height: 220px;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 140px;
      color: #cbd5e1;
    }
  }
}

.photo_text {
  display: flex;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  i {
    font-size: 25px;
    margin-top: 5px;
    margin-right: 20px;
  }
  .photo_main_text {
    width: 80%;
    p {
      padding-right: 10px;
      color: var(--color-primary);
      float: right;

      i {
        font-size: 20px;
        margin-right: 5px;
        margin-top: 5px;
      }
    }
  }
}
</style>
