<template>
  <div>
    <div v-if="step === 1">
      <div class="center">
        <div class="property_upload_head">
          <h4>What kind of property do you want to upload?</h4>
          <small
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small
          >
        </div>
        <div class="block slider">
          <el-slider v-model="step" disabled :min="1" :max="4"></el-slider>
        </div>
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
        <div class="block slider">
          <el-slider v-model="step" disabled :min="1" :max="4"></el-slider>
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
                <el-button
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
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step === 3">
      <div class="center">
        <div class="property_upload_head">
          <h4>Select all available amenities</h4>
          <small>Please check the plausible amenities</small>
        </div>
        <div class="block slider">
          <el-slider v-model="step" disabled :min="1" :max="4"></el-slider>
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
                <el-button
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
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step === 4">
      <div class="center">
        <div class="property_upload_head">
          <h4>Add images of the property</h4>
          <small>Please check the plausible amenities</small>
        </div>
        <div class="block slider">
          <el-slider v-model="step" disabled :min="1" :max="4"></el-slider>
        </div>
      </div>
      <div class="property_content_container">
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
    <hr class="hr_rule" />
    <div class="property_upload_btns pt-10">
      <el-button type="info" @click="toPrev" :disabled="step === 1"
        >Back</el-button
      >
      <el-button
        type="primary"
        class="btn_sm submit_register_button"
        @click="toNext"
        >Next</el-button
      >
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
  props: {
    properties: {
      required: true,
      type: Array,
    },
    propertiesSpecs: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      step: 1 as number,
      fileList: [],
    };
  },
  computed: {
    isValid() {},
  },
  methods: {
    getImage(pic: string): string {
      return require("../../assets/img/" + pic);
    },
    getProperty(property: Object): void {
      console.log(property);
    },
    toPrev(): void {
      this.step--;
    },
    toNext(): void {
      this.step++;
    },
    handlePreview() {},
    handleRemove() {},
  },
});
</script>

<style lang="scss"></style>
