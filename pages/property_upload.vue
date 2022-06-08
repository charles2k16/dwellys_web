<template>
  <div>
    <div class="steps_content">
      <div class="steps">
        <el-steps :active="active" :space="150" finish-status="success">
          <el-step title="Step 1" description="User information"></el-step>
          <el-step title="Step 2" description="Verification"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="section property_upload">
      <div v-if="step === 1">
        <div class="center">
          <div class="property_upload_head">
            <h4>What kind of property do you want to upload?</h4>
            <small
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small
            >
          </div>
          <hr class="hr_rule" />
        </div>
        <div class="property_content_container">
          <div class="property_content">
            <div v-for="(property, index) in properties" :key="index">
              <div class="property_main_content" @click="getProperty(property)">
                <div class="d-flex_column">
                  <p>
                    <b> {{ property.title }} </b>
                  </p>
                  <p>{{ property.details }}</p>
                </div>
                <img :src="getImage(property.img)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="step === 2">
        <div class="center">
          <div class="property_upload_head">
            <h4>Provide information on the property specification</h4>
            <small>Number of bedrooms, bathrooms, garage, kitchen, etc</small>
          </div>
          <hr class="hr_rule" />
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
                  <p @click="property.no--" class="pr-10">-</p>
                  {{ property.no }}
                  <p @click="property.no++" class="pl-10">+</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="property_upload_btns">
            <el-button type="info">Back</el-button>
            <el-button
              type="primary"
              class="btn_sm submit_register_button"
              @click="toNext"
              >Next</el-button
            >
          </div> -->
        </div>
      </div>
      <hr class="hr_rule" />
      <div class="property_upload_btns pt-10">
        <el-button type="info" @click="toPrev">Back</el-button>
        <el-button
          type="primary"
          class="btn_sm submit_register_button"
          @click="toNext"
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

export default Vue.extend({
  name: "AccountPage",
  components: {
    VuePhoneNumberInput,
    ApplicationHandler,
  },
  data() {
    return {
      active: 0 as number,
      step: 1 as number,
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
        },
        {
          title: "House",
          details: "fitted especially with housekeeping facilities",
          img: "property2.png",
        },
        {
          title: "Single room self contain",
          details: "fitted especially with housekeeping facilities",
          img: "property2.png",
        },
        {
          title: "Single room",
          details: "fitted especially with housekeeping facilities",
          img: "property2.png",
        },
        {
          title: "Apartment",
          details: "fitted especially with housekeeping facilities",
          img: "property2.png",
        },
        {
          title: "Apartment",
          details: "fitted especially with housekeeping facilities",
          img: "property1.png",
        },
      ],
    };
  },
  computed: {
    isValid() {},
  },
  methods: {
    getImage(pic: string): string {
      return require("../assets/img/" + pic);
    },
    toPrev(): void {
      this.step--;
      this.active--;
    },
    toNext(): void {
      this.step++;
      this.active++;
    },
    getProperty(property: Object): void {
      console.log(property);
    },
  },
});
</script>

<style lang="scss" scoped>
$small_screen: 426px;

.steps_content {
  background: #f8fafc;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: $small_screen) {
    // display: block;
    justify-content: space-between;
  }
  .steps {
    width: 30%;
    align-self: flex-end;
    @media (max-width: $small_screen) {
      width: 100%;
      padding: 0 20px;
    }
  }
}
.property_upload {
  padding-top: 40px;
  padding-bottom: 50px;

  //   margin: 0 auto;
  .property_upload_head {
    padding-bottom: 30px;
    h4 {
      font-size: 20px;
      padding-bottom: 5px;
    }
  }
  .property_content_container {
    padding-top: 20px;
    width: 50%;
    margin: 0 auto;
    .property_content {
      height: 400px;
      overflow-y: scroll;
      .property_main_content {
        display: flex;
        justify-content: space-between;
        // background: #f8fafc;
        border: 1px solid #e2e8f0;
        padding: 10px;
        border-radius: 12px;
        margin-bottom: 5px;
      }
    }
  }
  .property_upload_btns {
    width: 50%;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
