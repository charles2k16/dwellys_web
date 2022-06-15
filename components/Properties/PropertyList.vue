<template>
  <div>
    <el-row class="house_section" :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="6"
        v-for="(house, index) in houses"
        :key="index"
        class="pb-20"
      >
        <!-- {{ "backgroundImage:" + "url(" + roote + house.img + ")" }} -->
        <NuxtLink to="/property_details">
          <el-card shadow="hover" class="house_card">
            <div class="card_img">
              <img :src="getImage(house.img)" class="house_img" />
              <div class="d-flex justify_between house_text p-10">
                <p
                  style="
                    background: white;
                    padding: 2px 10px;
                    border-radius: 7.34885px;
                  "
                >
                  Rent
                </p>
                <span class="material-icons" style="color: white">
                  favorite_border
                </span>
              </div>
            </div>
            <div class="card_body">
              <!-- amount -->
              <p class="house_amount">$700/mth</p>
              <p class="house_plot">Plot No, 34, Dade St, Tema</p>
            </div>
            <div class="card_footer">
              <div class="pl-5">
                <div class="d-flex align_center">
                  <img src="~/assets/svg/bed.png" class="pr-10" />
                  <b>3</b>
                </div>
                <p>Bedrooms</p>
              </div>
              <div class="house_bathroom">
                <div class="d-flex align_center">
                  <img src="~/assets/svg/bath.png"  class="pr-10"/>
                   <b>4</b>
                </div>
                <p>Bathrooms</p>
              </div>
              <div>
                <div class="d-flex align_center">
                 <img src="~/assets/svg/tv.png" class="pr-10" /><b>1</b>
                </div>
                <p>Living area</p>
              </div>
            </div>
          </el-card>
        </NuxtLink>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PropertyList',
  data() {
    return {
      email: '' as string,
      roote: '~/assets/img/',
      houses: [
        {
          img: 'Frame1.png',
        },
        { img: 'Frame2.png' },
        { img: 'Frame3.png' },
        { img: 'Frame4.png' },
        { img: 'Frame5.png' },
        { img: 'Frame6.png' },
        { img: 'Frame7.png' },
        { img: 'Frame8.png' },
      ],
    };
  },
  methods: {
    login() {},
    getImage(pic: string): string {
      return require('../../assets/img/' + pic);
    },
  },
});
</script>

<style lang="scss">
.house_card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  line-height: 16px;
  .card_img {
    width: 100%;
    height: 220px;
    .house_img {
      width: 100%;
      height: 220px;
    }
    .house_text {
      width: 100%;
      position: relative;
      top: -220px;
      z-index: 20;
    }
  }
  .card_body {
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
        padding: 0 20px;
        @media (max-width: 1024px) {
          padding: 0 10px;
        }
    }
  }
}
</style>
