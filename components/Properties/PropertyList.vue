<template>
  <div>
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="6"
        v-for="(property, index) in listings"
        :key="index"
        class="pb-20"
      >
        <el-card shadow="hover" class="house_card">
          <div class="card_img" @click.self="toDetails(property)">
            <!-- :style="{ backgroundImage: `url(${getImage(
              property.listing_detail.listing_images[0] )})`, }" -->
            <div class="d-flex justify_between house_text p-10">
              <p
                style="
                  background: white;
                  padding: 2px 10px;
                  border-radius: 7.34885px;
                "
              >
                {{ property.listing_detail.category.name }}
              </p>
              <span
                class="material-icons fav"
                @click="favProperty(property)"
                :style="
                  favProperties.includes(property)
                    ? { color: 'red' }
                    : { background: '#fff' }
                "
              >
                favorite_border
              </span>
            </div>
          </div>
          <!-- <nuxt-link
            :to="{ name: 'property_details', params: { property: property } }"
          > -->
          <div class="card_body">
            <!-- amount -->
            <p class="house_amount">${{ property.listing_detail.price }}/mth</p>
            <p class="house_plot">
              {{ property.listing_detail.region }},
              {{ property.listing_detail.city }}
            </p>
          </div>
          <div class="card_footer">
            <div class="pl-5">
              <div class="d-flex align_center">
                <img src="~/assets/svg/bed.png" class="property_img pr-10" />
                <b>3</b>
              </div>
              <p>Bedrooms</p>
            </div>
            <div class="house_bathroom">
              <div class="d-flex align_center">
                <img src="~/assets/svg/bath.png" class="property_img pr-10" />
                <b>4</b>
              </div>
              <p>Bathrooms</p>
            </div>
            <div>
              <div class="d-flex align_center">
                <img src="~/assets/svg/tv.png" class="property_img pr-10" /><b
                  >1</b
                >
              </div>
              <p>Living area</p>
            </div>
          </div>
          <!-- </nuxt-link> -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    listings: {
      required: true,
      type: Array,
    },
  },
  name: "PropertyList",
  data() {
    return {
      email: "" as string,
      roote: "~/assets/img/",
      favProperties: [] as Array<object>,
    };
  },
  methods: {
    favProperty(fav: any) {
      let singleProperty = Object.assign([], this.favProperties);
      if (this.favProperties) {
        let favIndex = this.favProperties.indexOf(fav);
        singleProperty.includes(fav)
          ? this.favProperties.splice(favIndex, 1)
          : this.favProperties.push(fav);
      }
      console.log(this.favProperties);
    },
    getImage(pic: string): string {
      return require("../../assets/img/" + pic);
    },
    toDetails(property: any): void {
      console.log(property);
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
    background-repeat: no-repeat;
    background-size: 100%;
    .house_img {
      width: 100%;
      height: 220px;
    }
    .house_text {
      width: 100%;
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
    .property_img {
      width: 25px;
    }

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
      @media (max-width: 768px) {
        padding: 0 20px;
      }
      @media (max-width: 768px) {
        padding: 0 30px;
      }
    }
  }
  .fav {
    color: grey;
    cursor: pointer;
  }
}
</style>
