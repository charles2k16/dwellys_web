<template>
  <el-row :sm="24" :md="12" class="p-20">
    <div class="photo_content">
      <div class="profile_holder mr-20" v-if="!avatar">
        <i class="el-icon-user-solid"></i>
      </div>
      <div v-else class="acc_photo">
        <img :src="imageUrl" />
      </div>
    </div>
    <el-row class="photo_text">
      <i class="el-icon-warning-outline"></i>
      <el-col class="photo_main_text">
        <small
          >Must be an actual photo of you.<br />Logos, clip-art, group photos,
          and digitally-altered images are not allowed<br />
          <p><i class="el-icon-link"></i>Learn more</p></small
        >
      </el-col>
    </el-row>
    <div class="d-flex justify_end">
      <el-upload
        class="upload-demo"
        action="#"
        :multiple="false"
        :auto-upload="false"
        :on-change="getAvatar"
        :show-file-list="false"
      >
        <el-button type="info">Select an image of you</el-button>
      </el-upload>
      <el-button type="primary" class="ml-20" @click="save" :disabled="!avatar"
        >Save</el-button
      >
    </div>
  </el-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PropertyPhotoUpload",
  data() {
    return {
      avatar: "" as any,
      imageUrl: "",
    };
  },
  methods: {
    login() {},
    getAvatar(file: any) {
      console.log(file);
      this.imageUrl = URL.createObjectURL(file.raw);

      let reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onloadend = () => {
        this.avatar = reader.result;
      };
    },
    save() {
      this.$emit("avatar", this.avatar);
    },
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
  .acc_photo {
    height: 200px;
    img {
      border-radius: 50%;
      height: 200px;
      width: 200px;
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
    width: 81%;
    line-height: 16px;
    p {
      // padding-right: 10px;
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
