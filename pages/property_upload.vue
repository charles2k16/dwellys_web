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
          <el-slider v-model="step" disabled :min="1" :max="5"></el-slider>
        </div>
      </div>
      <div class="property_content_container">
        <div class="property_content">
          <div v-for="(property, index) in properties" :key="index" @click="getProperty(property)" :style="property.isSelect && {background: ' #F1F5F9'}">
            <div class="property_main_content"  >
              <div class="d-flex_column">
                <p>
                  <b> {{ property.title }} </b>
                </p>
                <p>{{ property.details }}</p>
              </div>
              <img  :src="getImage(property.img)"/>
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
          <el-slider v-model="step" disabled :min="1" :max="5"></el-slider>
        </div>
      </div>
      <div class="property_content_container">
        <div class="property_content">
          <div v-for="(property, index) in propertiesSpecs" :key="index">
            <div class="property_main_content" @click="getProperty(property)">
              <div class="d-flex_column">
                <p>
                  <b> {{ property.title }} </b>
                </p>
              </div>
              <div class="d-flex">
                  <el-input-number  :min="0" size="small" v-model="property.no"></el-input-number>
                <!-- <el-button
                  :disabled="property.no === 0"
                  @click="property.no--"
                  class="reduceSpecs"
                >
                  -
                </el-button>
                <el-button class="d-flex justify_center">{{
                  property.no
                }}</el-button>
                <el-button @click="property.no++" class="addSpecs ml-10"
                  >+</el-button
                > -->
              </div>
            </div>
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
          <el-slider v-model="step" disabled :min="1" :max="5"></el-slider>
        </div>
      </div>
      <div class="grid_content_container">
        <div class="grid_container">
          <div v-for="(property, index) in amenities" :key="index">
            <div class="grid_content" :style="property.isSelect && {background: '#E2E8F0'}" @click="getAmenities(property)">
              <div class="">
      <img :src="getSvg(property.img)" class="pt-10" />
    <p  class="mt-30"> {{property.title}} </p>
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
          <el-slider v-model="step" disabled :min="1" :max="5"></el-slider>
        </div>
      </div>
      <div class="property_content_container pb-20">
        <el-upload
          class="upload-demo"
          drag
          action=""
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
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
          <h3>Plans and pricing</h3>
          <small>Please check the plausible amenities</small>
        </div>
        <div class="block slider">
          <el-slider v-model="step" disabled :min="1" :max="5"></el-slider>
        </div>
      </div>
      <div class="plans_price pb-20">
        <PlansPricing :pricingPlans="pricingPlans" />
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
        v-if="step === 5"
        >Submit</el-button
      >
      <el-button
        type="primary"
        class="btn_sm submit_register_button"
        @click="toNext"
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
import ApplicationHandler from "@/handlers/ApplicationHandler.vue";

 interface property {
  title: String,
  details: String,
  img: String,
  isSelect: Boolean,
  }

export default Vue.extend({
  name: "AccountPage",
  components: {
    VuePhoneNumberInput,
    ApplicationHandler,
  },
 
  data() {
    return {
      step: 1 as number,
      fileList: [],
      propertiesSpecs: [
        {
          title: "Bedrooms" as string,
          no: 0 as number,
        },
        {
          title: "Bathrooms" as string,
          no: 0 as number,
        },
        {
          title: "Bedrooms" as string,
          no: 0 as number,
        },
        {
          title: "Bathrooms" as string,
          no: 0 as number,
        },
        {
          title: "Kitchens" as string,
          no: 0 as number,
        },
        {
          title: "Living area" as string,
          no: 0 as number,
        },
        {
          title: "Guest rooms" as string,
          no: 0 as number,
        },
        {
          title: "Apartment" as string,
          no: 0 as number,
        },
      ],
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
      amenities: [
        {
          img: "ac_unit.png",
          title: "Air condition",
          isSelect: false,
        },
         {
          img: "electrical_services.png",
          title: 'Generator',
          isSelect: false,
        },
         {
          img: "kitchen.png",
          title: "Refrigerator",
          isSelect: false,
        },
         {
          img: "language.png",
          title: 'Internet',
          isSelect: false,
        },
         {
          img: "local_laundry_service.png",
           title: 'Washine machine',
           isSelect: false,
        },
         {
          img: "mode_fan.png",
           title: 'Fan',
           isSelect: false,
        },
         {
          img: "oil_barrel.png",
           title: 'Water storage',
           isSelect: false,
        },
         {
          img: "pool.png",
           title: 'Pool',
           isSelect: false,
        },
         {
          img: "yard.png",
          title: "Garden",
          isSelect: false,
        }
      ],
      pricingPlans: [
        {
          title: 'Quick Deals',
          recommend: 'Recommended for individuals',
          amount: 'Ghc20.00',
          duration: 'For 1 month',

          isSelect: false,
        },
        {
          title: 'Quick Sale',
          recommend: 'Recommended for individuals',
          amount: 'Ghc20.00',
          duration: 'For 1 month',

          isSelect: false,
        },
        {
          title: ' Quick Rent',
          recommend: 'Recommended for individuals',
          amount: 'Ghc20.00',
          duration: 'For 1 month',

          isSelect: false,
        },
        {
          title: 'Quick Rent',
          recommend: 'Recommended for individuals',
          amount: 'Ghc20.00',
          duration: 'For 1 month',
          isSelect: false,

        },
      ]
    };
  },
  computed: {
    isValid() {},
  },
  methods: {
    submitUpload() {
      console.log('submit')
    },
     getImage(pic: string): string {
      return require("../assets/img/" + pic);
    },
    getSvg(pic: string): string {
      return require("../assets/svg/" + pic);
    },
    getProperty(newProperty: property): void {
    //  newProperty.isSelect = true;
     this.properties.filter(property => property.title === newProperty.title ? property.isSelect = true : property.isSelect = false)
    },
     getAmenities(property: property): void {
      property.isSelect = !property.isSelect;
    },
    toPrev(): void {
      this.step--;
    },
    toNext(): void {
      this.step++;
    },
  },
});
</script>

<style lang="scss">

$small_screen: 426px;

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
      color: #64748B;
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
        padding: 15px;
        border-radius: 12px;
        margin-bottom: 10px;
        cursor: pointer;
       @media (max-width: $small_screen) {
        img {
          display: none;
        }
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
          border: 1px solid #E2E8F0;
border-radius: 8px;
text-align: center;
padding: 20px;


        }
      }
  }
  .plans_price {
    display: flex;
     @media (max-width: $small_screen) {
      flex-direction: column;
      
     }
  }
}
</style>
