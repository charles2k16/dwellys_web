<template>
  <div class="">
    <el-row class="house_section" :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="6"
        v-for="(house, index) in houses"
        :key="index"
        class="pb-20"
      >
        <el-card
          shadow="hover"
          style="background-image='~/assets/img/Frame1.png'"
          class="house_card"
        >
          <div class="card_img">
            <!-- images -->
            <div class="p-10">
              <div class="d-flex justify_between">
                <p
                  style="
                    background: white;
                    padding: 2px 10px;
                    border-radius: 7.34885px;
                  "
                >
                  Rent
                </p>
                <span class="material-icons"> favorite_border </span>
              </div>
            </div>
          </div>
          <div class="card_body">
            <!-- amount -->
            <p class="house_amount">$700/mth</p>
            <p class="house_plot">Plot No, 34, Dade St, Tema</p>
          </div>
          <div class="card_footer">
            <div>
              <div><b>3</b></div>
              <p>Bedrooms</p>
            </div>
            <div class="house_bathroom px-20">
              <div>4</div>
              <p>Bathrooms</p>
            </div>
            <div>
              <div>1</div>
              <p>Living area</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeCard",
  data() {
    return {
      email: "" as string,
      houses: {
        one: {},
        two: {},
        three: {},
        four: {},
        five: {},
        six: {},
        seven: {},
        eight: {},
      },
    };
  },
  methods: {
    login() {},
  },
});
</script>

<style lang="scss">
.house_card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  line-height: 16px;
  .card_img {
    background-image: url("~/assets/img/Frame1.png");
    background-repeat: no-repeat;
    background-size: 100% 220px;
    height: 220px;
  }
  .card_body {
    // padding: 10px;
    padding: 10px 20px;
    .house_amount {
      color: #475569;
    }
    .house_plot {
      color: #64748b;
      font-size: 11px;
    }
  }
  .card_footer {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    border-top: 1px solid #e2e8f0;

    p {
      color: #94a3b8;
      font-size: 11px;
    }
    .house_bathroom {
      border-left: 1px solid #e2e8f0;
      border-right: 1px solid #e2e8f0;
      //   padding: 0 10px;
    }
  }
}
</style>
