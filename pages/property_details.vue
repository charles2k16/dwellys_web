<template>
  <div class="home_details">
    <ApplicationHandler ref="propertyAction" />
    <div class="detail_tabs">
      <el-tabs
        tab-position="top"
        class="property_details_tabs"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane label="Images" class="property_details_tab" name="first">
          <div class="pt-20">
            <!-- back arrow -->
            <p class="arrow_back">
              <span class="material-icons"> arrow_back </span>
            </p>
            <div class="section" style="padding-bottom: 100px">
              <div>
                <p style="color: #1e293b; line-height: 24px" class="pb-10">
                  <b>3 bed room house in Community 25, Tema</b>
                </p>
                <div
                  class="d-flex justify_between pb-10"
                  style="color: #475569"
                >
                  <div class="details_plot">
                    <section>
                      <p class="d-flex">
                        <span class="material-icons mr-5"> room </span>Plot No,
                        34, Dade St, Tema
                      </p>
                    </section>
                    <section>
                      <p class="d-flex">
                        <span class="material-icons mr-5"> schedule </span>Last
                        updated 2 mins ago
                      </p>
                    </section>
                  </div>
                  <div class="d-flex share">
                    <p class="d-flex mr-20">
                      <span class="material-icons mr-5"> share </span>Share
                    </p>
                    <p class="d-flex">
                      <span class="material-icons mr-5"> favorite_border </span
                      >Share
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
              <div class="d-flex justify_between">
                <div class="pt-20 basic_info">
                  <p
                    style="font-size: 20px; line-height: 24px; color: #1e293b"
                    class="pb-10"
                  >
                    Basic information
                  </p>
                  <div class="pb-20 info_cards">
                    <el-col :md="4" :sm="6">
                      <el-card shadow="never" class="info_card">
                        <p class="d-flex">
                          <span class="material-icons mr-5"> king_bed </span>2
                          Bedrooms
                        </p>
                      </el-card>
                    </el-col>
                    <el-col :md="4" :sm="6">
                      <el-card shadow="never" class="info_card">
                        <p class="d-flex">
                          <span class="material-icons mr-5"> bathtub </span>2
                          bathrooms
                        </p>
                      </el-card>
                    </el-col>
                    <el-col :md="4" :sm="6">
                      <el-card shadow="never" class="info_card">
                        <p class="d-flex">
                          <span class="material-icons mr-5"> weekend </span>1
                          living area
                        </p>
                      </el-card>
                    </el-col>
                    <el-col :md="4" :sm="6">
                      <el-card shadow="never" class="info_card">
                        <p class="d-flex">
                          <span class="material-icons mr-5"> drive_eta </span>2
                          car garage
                        </p>
                      </el-card>
                    </el-col>
                  </div>
                  <div class="house_details_description">
                    <h3 class="description_header">Description</h3>
                    <p class="description_content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut metus risus aenean mattis. Odio accumsan viverra ipsum
                      tristique lectus pellentesque erat. Fermentum faucibus et
                      nisl donec sollicitudin aenean vel ornare vulputate. Lorem
                      dolor elementum quis tempor morbi. Dolor varius praesent
                      iaculis et accumsan at fusce aliquam ultricies. Amet
                      aenean justo proin nulla ac arcu. Vitae dui, elit velit
                      nulla quis euismod nunc. .
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
                              >$400.00</b
                            >/ month
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

              <div class="amenities pb-20">
                <!-- amenities -->
                <hr class="hr_rule" />
                <div class="amenities_content">
                  <p>Amenities</p>
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
              <div>
                <hr class="hr_rule" />
                <p class="pt-20">Similar properties</p>
                <div class="pt-20">
                  <DetailCard />
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Basic information" name="second"
          >Config</el-tab-pane
        >
        <el-tab-pane label="Amenities" name="third">Role</el-tab-pane>
        <el-tab-pane label="Similar offers" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </div>
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
.detail_tabs {
  .detail_tabs .property_details_tabs[data-v-28842251] {
    background: red;
    // .el-tabs__header {
    //   background: yellow;

    //   .el-tabs__nav-wrap {
    //     background: pink;
    //     .el-tabs__nav-scroll {
    //       background: red;
    //     }
    //   }
    // }
  }
  .details_plot {
    display: flex;
    justify-content: space-between;
    width: 500px;
  }
  .details_plot,
  .share {
    span {
      font-size: 20px;
    }
  }
  .basic_info {
    width: 70%;

    .info_cards {
      .info_card {
        background: #f8fafc;
        padding: 10px;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        margin: 0;
        width: fit-content;
      }
    }
  }

  .arrow_back {
    position: absolute;
    left: 30px;
    border: 1px solid #cbd5e1;
    display: flex;
    border-radius: 12px;
    color: rgba(203, 213, 225, 1);
  }
  .house_details_images {
    display: flex;
    height: 550px;
    .house_1 {
      background-image: url("~/assets/img/image1.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      height: 550px;
      flex: 1;
      margin-right: 20px;
      border-radius: 10px;
    }
    .second_imgs {
      display: flex;
      flex-direction: column;

      .house_2 {
        background-image: url("~/assets/img/image2.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        width: 100%;
        border-radius: 10px;
        max-width: 280px;
        height: 50%;
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
      }
    }
  }
  .amenities {
    width: 70%;
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

          &::before {
            content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
            color: red; /* Change the color */
            font-weight: bold; /* If you want it to be bold */
            display: inline-block; /* Needed to add space between the bullet and the text */
            width: 1em; /* Also needed for space (tweak if needed) */
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
    }
  }

  .info_side_card {
    width: 100%;
    max-width: 300px;
  }
}
</style>
