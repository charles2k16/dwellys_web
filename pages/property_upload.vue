<template>
  <div>
    <div class="section property_upload">
      <div v-if="step === 1">
        <div class="center">
          <div class="property_upload_head">
            <h3>What kind of property do you want to upload?</h3>
            <small
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small
            >
          </div>
          <div class="block slider">
            <el-slider v-model="step" disabled :min="1" :max="6"></el-slider>
          </div>
        </div>
        <div class="property_content_container">
          <div class="property_content">
            <div v-for="property in propertyTypes" :key="property.id">
              <div
                class="property_main_content"
                @click="getProperty(property)"
                :style="
                  selectedProperty == property.name && {
                    backgroundColor: '#F1F5F9',
                  }
                "
              >
                <div class="d-flex_column">
                  <p>
                    <b> {{ property.name }} </b>
                  </p>
                  <p class="property_description">
                    {{ property.description }}
                  </p>
                </div>
                <!-- <div
                  :style="{
                    backgroundImage: `url(${getImage(property.photo)})`,
                  }"
                  class="property_upload_photo"
                ></div> -->
                <img
                  :src="getImage(property.photo)"
                  class="property_upload_photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="step === 2">
        <div class="center">
          <div class="property_upload_head">
            <h3>Provide information on the property specification</h3>
            <small>Number of bedrooms, bathrooms, garage, kitchen, etc</small>
          </div>
          <div class="block slider">
            <el-slider v-model="step" disabled :min="1" :max="6"></el-slider>
          </div>
        </div>
        <div class="property_content_container">
          <div class="property_content">
            <div v-for="spec in propertySpecs.specifications" :key="spec.id">
              <div class="property_main_content">
                <div class="d-flex_column">
                  <p>
                    <b> {{ spec.name }} </b>
                  </p>
                </div>
                <div class="d-flex">
                  <el-input-number :min="0" size="small" v-model="spec.number">
                    {{ spec.number ? spec.number : 0 }}
                    <!-- v-model="propertyUpload.specifications.number" -->
                  </el-input-number>
                </div>
              </div>
            </div>
            <div
              v-for="spec in propertyUpload.other_specifications"
              :key="spec.id"
            >
              <div class="other_specs">
                <div class="inner_specs">
                  <div class="d-flex_column">
                    <el-input
                      v-model="spec.name"
                      placeholder="Please specify if other"
                    >
                    </el-input>
                  </div>
                  <div class="d-flex">
                    <el-input-number
                      :min="0"
                      size="small"
                      v-model="spec.number"
                    >
                      {{ spec.number }}
                    </el-input-number>
                  </div>
                </div>
                <p>
                  For other living areas, please specify, eg, Patio, lounge,
                  pool
                </p>
              </div>
            </div>
            <div class="d-flex justify_end">
              <el-button @click="addSpecSection"
                ><i class="el-icon-plus mr-10"></i>Add another
                section</el-button
              >
            </div>
          </div>
        </div>
      </div>
      <div v-if="step === 3">
        <div class="center">
          <div class="property_upload_head">
            <h3>Select all available amenities</h3>
            <small>Please check the plausible amenities</small>
          </div>
          <div class="block slider">
            <el-slider v-model="step" disabled :min="1" :max="6"></el-slider>
          </div>
        </div>
        <div class="grid_content_container">
          <div class="grid_container">
            <div v-for="(property, index) in amenities" :key="index">
              <div
                class="grid_content"
                @click="getAmenities(property)"
                :style="
                  propertyUpload.property_amenities_id.includes(property.id)
                    ? { background: '#E2E8F0' }
                    : { background: '#fff' }
                "
              >
                <div class="">
                  <!-- <img :src="getSvg(property.img)" class="pt-10" /> -->
                  <p class="mt-30">{{ property.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="step === 4">
        <div class="center">
          <div class="property_upload_head">
            <h3>Add images of the property</h3>
            <small>Please check the plausible amenities</small>
          </div>
          <div class="block slider">
            <el-slider v-model="step" disabled :min="1" :max="6"></el-slider>
          </div>
        </div>
        <div class="property_content_container pb-20">
          <el-upload
            class="upload-demo"
            drag
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-change="toggleUpload"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
          </el-upload>
        </div>
      </div>
      <div v-if="step === 5">
        <div class="center">
          <div class="property_upload_head">
            <h3>Select property location</h3>
            <small>Select the location of the property</small>
          </div>
          <div class="block slider">
            <el-slider v-model="step" disabled :min="1" :max="6"></el-slider>
          </div>
        </div>
        <div class="property_content_container pb-20">
          <el-row class="pb-20">
            <el-col :sm="12" class="pb-20 d-flex_column pr-20">
              <span>Select Country</span>
              <el-select
                v-model="country"
                placeholder="Select"
                class="region pt-10"
                @change="getCountry($event)"
              >
                <el-option
                  v-for="country in countries"
                  :key="country.id"
                  :value="country.full_name"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :sm="12" class="pb-20 d-flex_column">
              <span class="pb-10">Location</span>
              <el-input
                v-model="propertyUpload.location"
                placeholder="Location"
              >
              </el-input>
            </el-col>
          </el-row>
          <el-row class="pb-20">
            <el-col :sm="12" class="pb-20 d-flex_column pr-20">
              <span>Select Region</span>
              <el-select
                v-model="propertyUpload.region"
                placeholder="Select"
                class="region pt-10"
              >
                <el-option
                  v-for="region in regions"
                  :key="region"
                  :value="region"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :sm="12" class="d-flex_column">
              <span>City</span>
              <el-input
                v-model="propertyUpload.city"
                placeholder="City"
                class="pt-10"
              >
              </el-input>
            </el-col>
          </el-row>
        </div>
      </div>
      <div v-if="step === 6">
        <div class="center">
          <div class="property_upload_head">
            <h3>Plans and pricing</h3>
            <small>Please check the plausible amenities</small>
          </div>
          <div class="block slider">
            <el-slider v-model="step" disabled :min="1" :max="6"></el-slider>
          </div>
        </div>
        <div class="plans_price pb-20">
          <PlansPricing :pricingPlans="pricingPlans" @getPlan="getPrice" />
        </div>
      </div>
      <hr class="hr_rule" />
      <div class="property_upload_btns pt-10">
        <el-button type="info" @click="toPrev" :disabled="step === 1"
          >Back</el-button
        >
        <el-button
          type="primary"
          class="btn_sm submit_register_button"
          @click="submitUpload"
          :loading="btnLoading"
          :disabled="!submitVal"
          v-if="step === 6"
          >Submit</el-button
        >
        <el-button
          type="primary"
          class="btn_sm submit_register_button"
          @click="toNext"
          :disabled="!isValid"
          v-else
          >Next</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import { IMixinState } from "@/types/mixinsTypes";
import ApplicationHandler from "@/handlers/ApplicationHandler.vue";

export default Vue.extend({
  name: "AccountPage",
  components: {
    VuePhoneNumberInput,
    ApplicationHandler,
  },

  data() {
    return {
      step: 1 as number,
      country: "" as string,
      propertySelected: false as boolean,
      selectedProperty: "",
      btnLoading: false as boolean,
      propertyTypes: [],
      propertySpecs: {
        specifications: [] as Array<object>,
      },
      regions: ["Greater Accra", "Ashanti Region", ""],
      amenities: [],

      properties: [
        {
          title: "Apartment",
          details: "fitted especially with housekeeping facilities",
          img: "property1.png",
          isSelect: false,
        },
        {
          title: "House",
          details: "fitted especially with housekeeping facilities",
          img: "property2.png",

          isSelect: false,
        },
        {
          title: "Single room self contain",
          details: "fitted especially with housekeeping facilities",
          img: "property2.png",
          isSelect: false,
        },
        {
          title: "Single room",
          details: "fitted especially with housekeeping facilities",
          img: "property2.png",
          isSelect: false,
        },
        {
          title: "Apartment",
          details: "fitted especially with housekeeping facilities",
          img: "property2.png",
          isSelect: false,
        },
        {
          title: "Apartment",
          details: "fitted especially with housekeeping facilities",
          img: "property1.png",
          isSelect: false,
        },
      ],
      pricingPlans: [],
      countries: [],
      propertyUpload: {
        name: "" as string,
        property_type_id: "" as string,
        country_id: "" as string,
        latitude: "" as string,
        longitude: "" as string,
        specifications: [] as Array<object>,
        property_amenities_id: [] as Array<string>,
        description: "" as string,
        photo: [] as Array<object>,
        price: 0 as number,
        location: "Accra Central",
        region: "Greater Accra",
        city: "Accra",
        other_specifications: [{ name: "", number: 0 }],
      },
    };
  },

  async created() {
    const propertyTypes = await this.$propertyTypesApi.index();
    this.propertyTypes = propertyTypes.data;
    console.log(propertyTypes);

    const listingPlans = await this.$listingPlansApi.index();
    this.pricingPlans = listingPlans.data;
    console.log(listingPlans);

    const countries = await this.$countriesApi.index();
    this.countries = countries.data;
    console.log(this.countries);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  },
  computed: {
    isValid() {
      let valid = false;
      if (this.step == 1 && this.propertyUpload.property_type_id != "") {
        valid = true;
      } else if (this.step == 2) {
        valid = true;
      } else if (
        this.step == 3 &&
        this.propertyUpload.property_amenities_id.length > 0
      ) {
        valid = true;
      } else if (this.step == 4 && this.propertyUpload.photo.length > 0) {
        valid = true;
      } else if (
        this.step == 5 &&
        this.propertyUpload.country_id != "" &&
        this.propertyUpload.location != "" &&
        this.propertyUpload.region != "" &&
        this.propertyUpload.city != ""
      ) {
        valid = true;
      }
      return valid;
    },
    submitVal() {
      let valid = false;
      if (this.step == 6 && this.propertyUpload.price) {
        valid = true;
      }
      return valid;
    },
  },
  methods: {
    getImage(pic: any): string {
      return "http://localhost:8000/" + pic;
    },
    getSvg(pic: string): string {
      return require("../assets/svg/" + pic);
    },
    getPrice(price: any) {
      this.propertyUpload.price = price;
    },
    toggleUpload(file: any) {
      console.log(file);
      this.propertyUpload.photo.push(file);

      // let reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onloadend = function () {
      //   console.log("RESULT", reader.result);
      // };
    },
    addSpecSection() {
      let newSection = { name: "", number: 0 };
      this.propertyUpload.other_specifications.push(newSection);
    },
    handlePreview() {},
    handleRemove() {},
    async getProperty(newProperty: any) {
      this.propertyUpload.property_type_id = newProperty.id;
      this.propertyUpload.description = newProperty.description;
      this.propertyUpload.name = newProperty.name;
      this.selectedProperty = newProperty.name;

      const property = await this.$propertyTypesApi.show(newProperty.id);
      this.propertySpecs = property.data;
      this.amenities = property.data.amenities;

      console.log(property);
    },
    getAmenities(property: any): void {
      let singlePlan = Object.assign(
        [],
        this.propertyUpload.property_amenities_id
      );
      if (this.propertyUpload.property_amenities_id) {
        let amenityIndex = this.propertyUpload.property_amenities_id.indexOf(
          property.id
        );
        singlePlan.includes(property.id)
          ? this.propertyUpload.property_amenities_id.splice(amenityIndex, 1)
          : this.propertyUpload.property_amenities_id.push(property.id);
      }

      console.log(this.propertyUpload.property_amenities_id);
    },

    toPrev(): void {
      this.step--;
    },
    toNext() {
      this.step++;

      if (this.step == 3 && this.propertySpecs) {
        this.propertySpecs.specifications.filter((spec: any) =>
          this.propertyUpload.specifications.push({
            number: spec.number,
            property_type_specification_id: spec.id,
          })
        );
      }
      console.log(this.propertyUpload);
    },
    getCountry(e: any) {
      console.log(e);
      this.countries.filter((country: any) =>
        country.full_name == e
          ? (this.propertyUpload.country_id = country.id)
          : ""
      );
    },
    showPosition(position: any) {
      this.propertyUpload.latitude = position.coords.latitude;
      this.propertyUpload.longitude = position.coords.longitude;
    },
    async submitUpload() {
      console.log(this.propertyUpload);
      this.btnLoading = true;
      await this.$listingApi
        .create(this.propertyUpload)
        .then((res: any) => {
          console.log(res, "res");
          this.btnLoading = false;
          // this.$message.success("Property Uploaded Successfully!");
        })
        .catch((err: any) => {
          console.log(err, "error");
        });
    },
  },
});
</script>

<style lang="scss">
$small_screen: 426px;
$medium_screen: 769px;

.property_upload {
  padding-top: 120px;
  padding-bottom: 50px;
  @media (max-width: $small_screen) {
    padding: 20px 20px 0;
  }
  //   margin: 0 auto;
  .property_upload_head {
    padding-bottom: 30px;
    h3 {
      font-size: 20px;
      padding-bottom: 5px;
      line-height: 27px;

      @media (max-width: $small_screen) {
        text-align: left;
      }
    }
    small {
      font-size: 14px;
      line-height: 20px;
      color: #64748b;
    }
  }
  .property_content_container {
    padding-top: 20px;
    width: 50%;
    margin: 0 auto;
    @media (max-width: $small_screen) {
      width: 100%;
      margin: 0;
    }
    .property_content {
      height: 400px;
      overflow-y: scroll;

      .property_main_content {
        display: flex;
        justify-content: space-between;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        margin-bottom: 10px;
        padding: 15px;
        cursor: pointer;
        @media (max-width: $small_screen) {
          img {
            display: none;
          }
        }
        .property_description {
          font-size: 12px;
        }
        .property_upload_photo {
          border-radius: 7px;
          max-width: 70px;
          height: 50px;
          width: 100%;
        }
      }
    }
  }
  .property_upload_btns {
    width: 50%;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    @media (max-width: $small_screen) {
      width: 100%;
      margin: 0;
      padding-bottom: 20px;
    }
  }
  .slider {
    width: 50%;
    margin: 0 auto;
  }
  .grid_content_container {
    padding-top: 20px;
    width: 60%;
    margin: 0 auto;
    @media (max-width: $small_screen) {
      width: 100%;
      margin: 0;
    }
    .grid_container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 40px;

      @media (max-width: $small_screen) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
      .grid_content {
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        text-align: center;
        padding: 20px;
      }
    }
  }
  .plans_price {
    // display: flex;
    display: grid;
    grid-template-columns: repeat(4, 50%);
    @media (max-width: $medium_screen) {
      margin: 0 auto;
      width: 90%;
      grid-template-columns: repeat(2, 300px);
    }
    @media (max-width: $small_screen) {
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .other_specs {
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    margin-bottom: 10px;
    padding: 15px;
    p {
      font-size: 13px;
      color: #94a3b8;
    }
  }
  .inner_specs {
    display: flex;
    justify-content: space-between;
  }

  .region {
    width: 100%;
  }
}
</style>
