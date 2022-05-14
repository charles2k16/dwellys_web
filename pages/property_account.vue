<template>
  <div class="property_account">
    <ApplicationHandler ref="propertyAction" />
    <div class="steps_content">
      <div class="steps">
        <el-steps :active="active" :space="150" finish-status="success">
          <el-step title="Step 1" description="User information"></el-step>
          <el-step title="Step 2" description="Verification"></el-step>
          <el-step title="Step 3" description="Photo"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="section account_content">
      <div class="create_account">
        <h3>Create a property owner account</h3>
        <p>
          Help us authenticate you by providing us some background information
        </p>
      </div>

      <hr class="hr_rule" />
      <div class="account_form">
        <el-form ref="userAccount" v-model="account" label-position="top">
          <div v-if="step == 1">
            <div class="d-flex pb-20">
              <div>
                <div class="profile_holder mr-20">
                  <i class="el-icon-user-solid"></i>
                </div>
              </div>
              <div class="d-flex_column profie__text pl-20">
                <el-button type="info btn_sm" @click="showPhotoModal"
                  >Upload photo</el-button
                >
                <small class="w-50">
                  Must be an actual photo of you. Logos, clip-art, group photos,
                  and digitally-altered images are not allowed
                </small>
              </div>
            </div>
            <hr class="hr_rule" />
            <div class="d-flex pb-20 pt-20">
              <div class="account_label">
                <el-form-item label="Name"></el-form-item>
              </div>

              <div class="form_div">
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="12">
                    <el-form-item label="First Name">
                      <el-input
                        v-model="account.first_name"
                        placeholder="First name"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="12">
                    <el-form-item label="Last Name">
                      <el-input
                        v-model="account.last_name"
                        placeholder="Last Name"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24">
                    <el-form-item label="Date">
                      <el-input v-model="account.date" type="date"> </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
            <hr class="hr_rule" />

            <div class="d-flex pt-20">
              <div class="account_label">
                <el-form-item label="Contact information"></el-form-item>
              </div>
              <div class="form_div">
                <el-form-item label="Email address">
                  <el-input
                    v-model="account.email"
                    type="email"
                    placeholder="Enter email"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="Phone number" style="margin-bottom: 0">
                  <vue-phone-number-input
                    v-model="account.number"
                    :border-radius="7"
                    default-country-code="GH"
                    @update="onCountryUpdate"
                  />
                </el-form-item>
                <div class="mt-20 d-flex justify_end">
                  <el-button type="primary" class="btn_sm" @click="toNext"
                    >Next</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div v-if="step == 2">
            <div class="d-flex pb-20 pt-20">
              <div class="account_label">
                <el-form-item label="Validate account"></el-form-item>
                <small>
                  We need to verify your information. Please submit a copy of
                  your government ID to process your application
                </small>
              </div>
              <div class="form_div">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="12">
                    <el-form-item label="ID type" class="">
                      <el-select v-model="value" placeholder="Select ID type">
                        <el-option
                          v-for="item in options"
                          :key="item"
                          :label="item"
                          :value="item"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-col :xs="24" :sm="24" :md="24">
                  <el-form-item label="Upload ID">
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
                        Upload a front photo of your ID
                      </div>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col>
                  <div class="terms_condition py-20">
                    <small>
                      By selecting <span class="bold">Agree and continue</span>,
                      I agree to Dwellys
                      <span class="bold"
                        >Terms of Service, Payments Terms of Service, and
                        Nondiscrimination Policy</span
                      >
                      and acknowledge the Privacy Policy.
                    </small>
                  </div>
                  <div class="mt-20 d-flex justify_between">
                    <el-button class="back_btn" @click="toPrev">Back</el-button>
                    <div>
                      <el-button type="info" @click="toNext">Skip</el-button>
                      <el-button
                        type="primary"
                        class="second_next"
                        @click="toNext"
                        >Agree and Continue</el-button
                      >
                    </div>
                  </div>
                </el-col>
              </div>
            </div>
          </div>
          <div v-if="step == 3">
            <p>third one</p>
          </div>
        </el-form>
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
      value: "" as string,
      fileList: [],
      account: {
        first_name: "" as string,
        last_name: "" as string,
        date: "" as string,
        email: "" as string,
        phone: "" as string,
        terms: false as boolean,
        number: "" as string,
      },
      options: ["Health Insurance", "Passport", "Voter ID"],
      user: "" as string,
    };
  },
  computed: {
    isValid() {},
  },
  methods: {
    toPrev() {
      this.step--;
      this.active--;
    },
    toNext() {
      this.step++;
      this.active++;
    },
    showPhotoModal(): void {
      console.log("show");
      (this as any).$refs.propertyAction.showPhotoModal(this.user);
    },
    handlePreview() {},
    handleRemove() {},
    onCountryUpdate() {},
    submitAccount() {
      console.log("submit");
    },
  },
});
</script>

<style lang="scss" scoped>
.property_account {
  padding-bottom: 50px;
}
.steps_content {
  background: #f8fafc;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  .steps {
    width: 30%;
    align-self: flex-end;
  }
}
.account_content {
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;

  .create_account {
    padding-bottom: 20px;
    h3 {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
  .account_form {
    padding-top: 20px;
    .profile_holder {
      background: #f1f5f9;
      width: 110px;
      height: 110px;
      padding: 10px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 80px;
        color: #cbd5e1;
      }
    }
    .profile_text {
      font-size: 12px;
      line-height: 16px;
    }
    .form_div {
      max-width: 500px;
      width: 100%;
    }
  }
  .account_label {
    width: 20%;
    padding-right: 30px;
    margin-right: 10px;
    small {
      color: #94a3b8;
      font-size: 11px;
      line-height: 16px;
    }
  }
  .terms_condition {
    small {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.01em;
    }
  }
  .second_next {
    width: 180px;
  }
}
</style>
