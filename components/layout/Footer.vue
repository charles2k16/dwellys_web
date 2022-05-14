<template>
  <footer class="footer section">
    <hr class="hr_rule" />
    <el-row class="footer_contents">
      <el-col class="footer_content trademark"
        ><p>&copy; Dwellys 2022, All rights reserved</p>
        <small>
          Dwellys is a registered trademark and the trading name of Dwellys
          Limited.
        </small>
      </el-col>
      <el-col class="footer_content">
        <ul class="conditions">
          <li>Privacy</li>
          <li class="term">Terms</li>
          <li class="sitemap">Sitemaps</li>
        </ul>
      </el-col>
      <el-col class="footer_content media_holder">
        <el-row class="medias">
          <img src="~/assets/img/media_instagram.png" />
          <img src="~/assets/img/media_facebook.png" />
          <img src="~/assets/img/media_twitter.png" />
        </el-row>
      </el-col>
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
<style lang="scss" scoped>
.footer {
  margin-top: auto;
  width: 100%;
  bottom: 0;
  .trademark {
    justify-self: flex-start;
  }
  .media_holder {
    .medias {
      float: right;
      display: flex;
      width: 50%;
      justify-content: space-between;
    }
  }
  .footer_contents {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .footer_content {
      .conditions {
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        .term,
        .sitemap {
          list-style-type: disc;
        }
      }
    }
  }
}
</style>
