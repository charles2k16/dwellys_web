<template>
  <div class="section">
    <el-row class="house_section" :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="6"
        v-for="(house, index) in houses"
        :key="index"
        class="pb-20"
      >
        <el-card shadow="hover" class="house_card">
          <div
            class="card_img"
            :style="{
              backgroundImage: `url(${getImage(house.img)})`,
            }"
          ></div>
          <div class="card_body">
            <p class="house_amount">$700/mth</p>
            <p class="house_plot">Plot No, 34, Dade St, Tema</p>
          </div>
          <div class="card_footer">
            <div>
              <div><b>3</b></div>
              <p>Bedrooms</p>
            </div>
            <div class="house_bathroom px-20">
              <div><b>4</b></div>
              <p>Bathrooms</p>
            </div>
            <div>
              <div><b>1</b></div>
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
  name: "DetailCard",
  data() {
    return {
      email: "" as string,
      houses: [
        { img: "Frame2.png" },
        { img: "Frame3.png" },
        { img: "Frame4.png" },
        { img: "Frame5.png" },
      ],
    };
  },
  methods: {
    login() {},
    getImage(pic: string): string {
      return require("../../assets/img/" + pic);
    },
  },
});
</script>

<style lang="scss"></style>
