<template>
  <div class="section home_details pt-20">
    <ApplicationHandler ref="propertyAction" />
    <!-- <div class="pt-20 d-flex"> -->
    <!-- back arrow -->

    <div class="" style="padding-bottom: 100px">
      <div class="align_center mb-10">
        <div class="arrow_back">
          <NuxtLink to="/">
            <span class="material-icons">arrow_back</span>
          </NuxtLink>
        </div>
        <p
          style="
            color: #1e293b;
            line-height: 24px;
            display: flex;
            align-items: center;
          "
        >
          <b
            >{{ propertyDetails.listing_detail.city }} -
            {{ propertyDetails.listing_detail.location }},
            {{ propertyDetails.listing_detail.region }}
          </b>
        </p>
      </div>
      <div>
        <div class="d-flex justify_between pb-10" style="color: #475569">
          <div class="details_plot">
            <section>
              <p class="d-flex">
                <span class="material-icons mr-5"> room </span
                >{{ propertyDetails.listing_detail.city }}
              </p>
            </section>
            <section>
              <p class="d-flex">
                <span class="material-icons mr-5"> schedule </span>Last updated
                2 mins ago
                <!-- {{ propertyDetails.updated_at }} -->
              </p>
            </section>
          </div>
          <div class="d-flex share">
            <p class="d-flex mr-20">
              <span class="material-icons mr-5"> share </span>Share
            </p>
            <p class="d-flex">
              <span class="material-icons mr-5"> favorite_border </span>Share
            </p>
          </div>
        </div>
        <div class="d-flex">
          <el-row class="house_details_images">
            <div class="house_1">
              <img
                :src="
                  src +
                  (image
                    ? image
                    : propertyDetails.listing_detail.listing_images[0].photo)
                "
                class="previewImg"
              />
            </div>
          </el-row>
          <div class="d-flex_column">
            <img
              v-for="image in propertyDetails.listing_detail.listing_images"
              :key="image.id"
              :src="src + image.photo"
              @click="prevImage(image.photo)"
              class="prop_imgs mb-10"
            />
          </div>
        </div>
      </div>
      <div class="justify_between property_info">
        <div class="pt-20 basic_info">
          <h3 style="line-height: 24px; color: #1e293b" class="pb-10">
            Basic information
          </h3>
          <div
            class="pb-20 info_cards"
            v-for="specification in propertyDetails.property_specifications"
            :key="specification.id"
          >
            <!-- <el-card shadow="never" class="info_card">
              <p class="d-flex">
                <span class="material-icons mr-5"> king_bed </span>2 Bedrooms
              </p>
            </el-card>
            <el-card shadow="never" class="info_card">
              <p class="d-flex">
                <span class="material-icons mr-5"> bathtub </span>2 bathrooms
              </p>
            </el-card> -->
            <el-card shadow="never" class="info_card">
              <p class="d-flex">
                <span class="material-icons mr-5"> weekend </span>
                {{ specification.number }}
                {{ specification.specification.name }}
              </p>
            </el-card>
            <!-- <el-card shadow="never" class="info_card">
              <p class="d-flex">
                <span class="material-icons mr-5"> drive_eta </span>2 car garage
              </p>
            </el-card> -->
          </div>
          <div class="pb-20 d-flex info_cards">
            <el-card
              shadow="never"
              class="info_card mx-10"
              v-for="specification in propertyDetails.other_specifications"
              :key="specification.id"
            >
              <p class="d-flex">
                <!-- <span class="material-icons mr-5"> weekend </span> -->
                {{ specification.number }}
                {{ specification.name }}
              </p>
            </el-card>
          </div>
          <div class="house_details_description">
            <h3 class="description_header">Description</h3>
            <p class="description_content">
              {{ propertyDetails.listing_detail.description }}
            </p>
          </div>
        </div>
        <div class="info_side_card pt-20">
          <el-col>
            <el-card shadow="never" class="p-20">
              <div>
                <div style="height: 200px">
                  <p style="padding-bottom: 5px">Rent</p>
                  <p class="pb-20">
                    <b style="font-size: 24px; line-height: 28px"
                      >${{ propertyDetails.listing_detail.price }}</b
                    >/ month
                  </p>
                  <div class="d-flex">
                    <img
                      :src="src + propertyDetails.lister.avatar"
                      class="property_avatar"
                    />
                    <div class="ml-20">
                      <p>
                        {{ propertyDetails.lister.first_name }}
                        {{ propertyDetails.lister.last_name }}
                      </p>
                      <p style="font-size: 12px; color: #64748b">
                        Independent agent
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <el-button
                    type="primary"
                    style="width: 100%"
                    @click="showOwner"
                    ><p class="d-flex justify_between">
                      Send a message<span class="material-icons">
                        arrow_forward
                      </span>
                    </p></el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </div>
      </div>

      <div class="amenities pb-20">
        <!-- amenities -->
        <hr class="hr_rule" />
        <div class="amenities_content">
          <h3>Amenities</h3>
          <ul
            class="amenites_list"
            v-for="amenity in propertyDetails.amenities"
            :key="amenity.amenity.name"
          >
            <li>{{ amenity.amenity.name }}</li>
            <!-- <li>Fans</li>
            <li>Refrigerator</li>
            <li>Swimming pool</li>
            <li>Water reservoir</li>
            <li>Washing Machine</li>
            <li>Garden</li>
            <li>Internet</li>
            <li>Generator</li> -->
          </ul>
        </div>
        <div>
          <!-- similar properties -->
        </div>
      </div>
      <div>
        <hr class="hr_rule" />
        <h3 class="pt-20">Similar properties</h3>
        <div class="pt-20">
          <DetailCard />
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { products } from '@/assets/data/index.js'
import ApplicationHandler from "@/handlers/ApplicationHandler.vue";
// import moment from "moment";

export default Vue.extend({
  name: "PropertyDetails",
  components: {
    ApplicationHandler,
  },
  // props: {
  //   property: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  data() {
    return {
      src: "http://localhost:8000/",
      activeName: "first" as string,
      image: "" as any,
      propertyDetails: this.$route.params.property,
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
      user: "",
    };
  },
  created() {
    console.log(this.propertyDetails);
  },
  methods: {
    handleClick(tab: string, event: object) {
      console.log(tab, event);
    },
    prevImage(image: any) {
      this.image = image;
    },
    //  lastUpdate (date:any) {
    //     return moment(date).format("MMMM Do YYYY");
    //   },
    showOwner(): void {
      console.log("show");
      (this as any).$refs.propertyAction.showOwnerModal(this.user);
    },
  },
});
</script>

<style lang="scss" scoped>
$medium_screen: 768px;
$small_screen: 426px;

.home_details {
  .arrow_back {
    width: 35px;
    padding-top: 5px;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    color: rgba(203, 213, 225, 1);
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
  .details_plot {
    display: flex;
    justify-content: space-between;
    width: 500px;
    @media (max-width: $medium_screen) {
      width: 65%;
    }
  }
  .details_plot,
  .share {
    span {
      font-size: 20px;
    }
  }
  .property_info {
    display: flex;
    @media (max-width: $medium_screen) {
      flex-direction: column;
    }

    .basic_info {
      width: 70%;
      @media (max-width: $medium_screen) {
        margin-top: 30px;
        width: 100%;
      }
      .info_cards {
        display: flex;
        @media (max-width: $medium_screen) {
          width: 100%;
        }
        .info_card {
          background: #f8fafc;
          padding: 10px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          margin: 0 10px;
          width: 150px;
        }
      }
    }
  }

  .house_details_images {
    // height: 550px;
    width: 70%;
    @media (max-width: $medium_screen) {
      flex-direction: column;
      height: 800px;
    }
    .previewImg {
      // margin: 0 auto;
      width: 100%;
      height: 550px;
      border-radius: 10px;
    }

    .house_1 {
      display: flex;
      margin-right: 20px;
      border-radius: 10px;
      @media (max-width: $medium_screen) {
        height: 400px;
        margin-right: 0;
      }
    }
  }
  .amenities {
    // width: 70%;
    padding-top: 20px;
    .amenities_content {
      padding-top: 30px;
      p {
        color: #1e293b;
        font-size: 20px;
        line-height: 24px;
      }
      .amenites_list {
        padding-top: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;

        max-width: 500px;

        li {
          // text-decoration-color: red;
          list-style: none;
          padding-bottom: 20px;
          font-size: 14px;
          line-height: 20px;
          margin-left: 15px;

          &::before {
            content: "\2022";
            color: red;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
        }
      }
    }
    .amenity_card {
      width: 200px;
    }
  }
  .house_details_description {
    padding: 30px 0;
    .description_header {
      font-weight: 600;
      padding-bottom: 10px;
      padding-top: 50px;
    }
    .description_content {
      line-height: 20px;
      color: #334155;
      width: 70%;
      @media (max-width: $medium_screen) {
        width: 100%;
      }
    }
  }

  .info_side_card {
    width: 100%;
    max-width: 300px;
  }

  .property_avatar {
    width: 60px;
    // height:
    border-radius: 50%;
  }
  .prop_imgs {
    width: 100%;
    height: 270px;
    border-radius: 10px;
  }
}
</style>
