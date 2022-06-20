<template>
  <div class="home_details pt-20">
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
          <b>3 bed room house in Community 25, Tema</b>
        </p>
      </div>
      <div class="section">
        <div class="d-flex justify_between pb-10" style="color: #475569">
          <div class="details_plot">
            <section>
              <p class="d-flex">
                <span class="material-icons mr-5"> room </span>Plot No, 34, Dade
                St, Tema
              </p>
            </section>
            <section>
              <p class="d-flex">
                <span class="material-icons mr-5"> schedule </span>Last updated
                2 mins ago
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
        <el-row class="house_details_images">
          <div class="house_1"></div>
          <div class="second_imgs">
            <div class="house_2"></div>
            <div class="house_3"></div>
          </div>
        </el-row>
      </div>
      <div class="section justify_between property_info">
        <div class="pt-20 basic_info">
          <h3 style="line-height: 24px; color: #1e293b" class="pb-10">
            Basic information
          </h3>
          <div class="pb-20 info_cards">
            <el-card shadow="never" class="info_card">
              <p class="d-flex">
                <span class="material-icons mr-5"> king_bed </span>2 Bedrooms
              </p>
            </el-card>
            <el-card shadow="never" class="info_card">
              <p class="d-flex">
                <span class="material-icons mr-5"> bathtub </span>2 bathrooms
              </p>
            </el-card>
            <el-card shadow="never" class="info_card">
              <p class="d-flex">
                <span class="material-icons mr-5"> weekend </span>1 living area
              </p>
            </el-card>
            <el-card shadow="never" class="info_card">
              <p class="d-flex">
                <span class="material-icons mr-5"> drive_eta </span>2 car garage
              </p>
            </el-card>
          </div>
          <div class="house_details_description">
            <h3 class="description_header">Description</h3>
            <p class="description_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus
              risus aenean mattis. Odio accumsan viverra ipsum tristique lectus
              pellentesque erat. Fermentum faucibus et nisl donec sollicitudin
              aenean vel ornare vulputate. Lorem dolor elementum quis tempor
              morbi. Dolor varius praesent iaculis et accumsan at fusce aliquam
              ultricies. Amet aenean justo proin nulla ac arcu. Vitae dui, elit
              velit nulla quis euismod nunc. .
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
                    <b style="font-size: 24px; line-height: 28px">$400.00</b>/
                    month
                  </p>
                  <div class="d-flex">
                    <img src="~/assets/img/user_detail_img.png" />
                    <div class="ml-20">
                      <p>Abena Dankwa Have</p>
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

      <div class="section amenities pb-20">
        <!-- amenities -->
        <hr class="hr_rule" />
        <div class="amenities_content">
          <h3>Amenities</h3>
          <ul class="amenites_list">
            <li>Air conditioning</li>
            <li>Fans</li>
            <li>Refrigerator</li>
            <li>Swimming pool</li>
            <li>Water reservoir</li>
            <li>Washing Machine</li>
            <li>Garden</li>
            <li>Internet</li>
            <li>Generator</li>
          </ul>
        </div>
        <div>
          <!-- similar properties -->
        </div>
      </div>
      <div class="section">
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

export default Vue.extend({
  name: "PropertyDetails",
  components: {
    ApplicationHandler,
  },
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
      user: "",
    };
  },
  methods: {
    onCountryUpdate(country: object) {
      console.log(country, "event");
    },
    handleClick(tab: string, event: object) {
      console.log(tab, event);
    },
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
    margin-left: 25px;
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
    display: flex;
    height: 550px;
    @media (max-width: $medium_screen) {
      flex-direction: column;
      height: 800px;
    }
    .house_1 {
      background-image: url("~/assets/img/image1.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 550px;
      flex: 1;
      margin-right: 20px;
      border-radius: 10px;
      @media (max-width: $medium_screen) {
        height: 400px;
        margin-right: 0;
      }
    }
    .second_imgs {
      display: flex;
      flex-direction: column;
      @media (max-width: $medium_screen) {
        padding-top: 20px;
        flex-direction: row;
        justify-content: space-between;
        height: 300px;
      }

      .house_2 {
        background-image: url("~/assets/img/image2.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        width: 100%;
        border-radius: 10px;
        max-width: 280px;
        height: 50%;
        @media (max-width: 768px) {
          width: 100%;
          max-width: 400px;
          margin-right: 20px;
          height: 300px;
        }
      }
      .house_3 {
        background-image: url("~/assets/img/image3.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 50%;
        width: 300px;
        max-width: 280px;
        border-radius: 10px;
        margin-top: 20px;
        @media (max-width: $medium_screen) {
          margin-top: 0;
          width: 100%;
          max-width: 400px;
          height: 300px;
        }
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
}
</style>
