<template>
  <div class="home">
    <div class="home_landing_page">
      <div class="landing_content section">
        <h1>
          Discover the world’s hub for<br />
          <span>houses</span> and <span>properties</span> for sale and rent
        </h1>
        <div class="discover_line"></div>
        <el-tabs type="card" @tab-click="handleClick">
          <el-tab-pane label="Buy">
            <div class="buy">
              <el-form
                ref="home"
                class="search_home"
                v-model="home"
                label-position="top"
              >
                <el-input
                  v-model="home"
                  class="search_input"
                  placeholder="Where do you want to live?"
                >
                </el-input>
                <el-button type="primary">Find your home</el-button>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Rent">
            <div class="buy">
              <el-form
                ref="home"
                class="search_home"
                v-model="home"
                label-position="top"
              >
                <el-input
                  v-model="home"
                  class="search_input"
                  placeholder="Where do you want to live?"
                >
                </el-input>
                <el-button type="primary">Find your home</el-button>
              </el-form>
            </div></el-tab-pane
          >
          <el-tab-pane label="Lease">
            <div class="buy">
              <el-form
                ref="home"
                class="search_home"
                v-model="home"
                label-position="top"
              >
                <el-input
                  v-model="home"
                  class="search_input"
                  placeholder="Where do you want to live?"
                >
                </el-input>
                <el-button type="primary">Find your home</el-button>
              </el-form>
            </div></el-tab-pane
          >
        </el-tabs>
        <el-row class="d-flex pt-20">
          <div class="pr-20">
            <p><b>2000+ </b></p>
            <small>Properties for rent</small>
          </div>
          <div
            style="
              border-left: 1px solid #f8fafc;
              border-right: 1px solid #f8fafc;
            "
            class="px-20"
          >
            <p><b>1954+</b></p>
            <small>Properties for sale</small>
          </div>
          <div class="pl-20">
            <p><b>1954+</b></p>
            <small>Properties for sale</small>
          </div>
        </el-row>
      </div>
    </div>
    <div>
      <el-tabs type="border-card">
        <el-tab-pane label="All">
          <div class="section pt-20">
            <p class="pb-20" style="font-size: 20px; line-height: 24px">
              Rent a home
            </p>
            <HomeCard /></div
        ></el-tab-pane>
        <el-tab-pane label="House">
          <div class="section pt-20">
            <p class="pb-20" style="font-size: 20px; line-height: 24px">
              Rent a house
            </p>
            <HomeCard /></div
        ></el-tab-pane>
        <el-tab-pane label="Apartment">
          <div class="section pt-20">
            <p class="pb-20" style="font-size: 20px; line-height: 24px">
              Rent an apartment
            </p>
            <HomeCard /></div
        ></el-tab-pane>
        <el-tab-pane label="Town house">
          <div class="section pt-20">
            <p class="pb-20" style="font-size: 20px; line-height: 24px">
              Rent a town house
            </p>
            <HomeCard /></div
        ></el-tab-pane>
        <el-tab-pane label="Office">
          <div class="section pt-20">
            <p class="pb-20" style="font-size: 20px; line-height: 24px">
              Rent an office
            </p>
            <HomeCard /></div
        ></el-tab-pane>
        <el-tab-pane label="Land">
          <div class="section pt-20">
            <p class="pb-20" style="font-size: 20px; line-height: 24px">
              Buy a land
            </p>
            <HomeCard /></div
        ></el-tab-pane>
        <el-tab-pane label="Community Space">
          <div class="section pt-20">
            <p class="pb-20" style="font-size: 20px; line-height: 24px">
              Rent a community space
            </p>
            <HomeCard /></div
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { products } from '@/assets/data/index.js'

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      activeName: "first" as string,
      home: "" as string,
      sendForm: {
        amount: null,
        recipient_amt: null,
        payment_method: "" as string,
      },
      payOptions: [
        { value: ":brijwallet", label: ":brij wallet" },
        { value: ":brijEx", label: ":brijEx" },
        { value: "M-PESA", label: "M-PESA" },
      ],
    };
  },
  methods: {
    onCountryUpdate(country: object) {
      console.log(country, "event");
    },
    handleClick(tab: string, event: object) {
      console.log(tab, event);
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  color: var(--text-white);
  .home_landing_page {
    background-image: url("~/assets/img/home.png");
    background-repeat: no-repeat;
    background-size: 100% 400px;
    height: 400px;
    padding: 30px 0;
    .landing_content {
      display: flex;
      width: 90%;
      flex-direction: column;
      justify-content: center;
      h1 {
        padding-top: 40px;
        width: 100%;
        max-width: 490px;
        font-weight: 200;
        line-height: 32px;
        z-index: 10;
        span {
          font-weight: 700;
          font-size: 30px;
        }
      }
      .discover_line {
        position: relative;
        top: -25px;
        left: 20px;
        width: 220px;
        height: 30px;
        border-radius: 100%;
        box-shadow: 5px -10px #cf0100;
      }
      .buy {
        background: #ffffff;
        border-radius: 0px 10px 10px 10px;
        .search_home {
          display: flex;
          padding: 10px;
        }
      }
    }
  }
}
</style>
