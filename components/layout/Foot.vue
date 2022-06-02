<template>
  <footer class="foot section mini_section">
    <hr class="hr_rule" />
    <el-row class="foot_contents mt-10">
      <el-col class="foot_content trademark" :md="8" :sm="24">
        <p class="pb-10 trademark_reserved">
          &copy; Dwellys 2022, All rights reserved
        </p>
        <p class="trademark_text text-grey">
          Dwellys is a registered trademark and the trading name of Dwellys
          Limited.
        </p>
      </el-col>
      <el-col class="foot_content" :md="8" :sm="24">
        <ul class="conditions text-grey">
          <li>Privacy</li>
          <li class="term">Terms</li>
          <li class="sitemap">Sitemaps</li>
        </ul>
      </el-col>
      <el-col class="foot_content media_holder" :md="8" :sm="24">
        <span> <img src="~/assets/img/media_instagram.png" /></span>
        <span> <img src="~/assets/img/media_facebook.png" /></span>

        <span> <img src="~/assets/img/media_twitter.png" /></span>
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
@media (max-width: 425px) {
  .foot {
    padding: 0 20px;
    width: 100%;
    height: auto;
    padding-bottom: 150px;

    .foot_contents {
      flex-direction: column;
      .trademark_reserved {
        font-size: 14px;
        font-weight: 600;
      }
      .trademark_text {
        width: 80%;
        font-size: 12px;
      }
      .conditions {
        padding-top: 30px;
        padding-bottom: 30px;
        font-size: 14px;
        justify-content: space-between;
      }
      .media_holder {
        justify-content: flex-start;

        span {
          margin-right: 20px;
        }
        .img {
          width: 35px;
        }
      }
    }
  }
}
.foot {
  margin-top: auto;
  width: 100%;
  background: #fff;
  bottom: 0;
  z-index: 50;
  .trademark {
    justify-self: flex-start;
  }
  .media_holder {
    display: flex;
    justify-content: flex-end;

    span {
      margin-right: 20px;
    }
    .img {
      width: 35px;
    }
  }
  .foot_contents {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .foot_content {
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
