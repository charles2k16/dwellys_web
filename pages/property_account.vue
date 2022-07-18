<template>
  <div class="property_account">
    <ApplicationHandler ref="propertyAction" @avatar="getAvatar" />
    <div class="steps_content">
      <div class="steps">
        <el-steps :active="active" :space="150" finish-status="success">
          <el-step title="Step 1" description="User information"></el-step>
          <el-step title="Step 2" description="Verification"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="section account_content">
      <div class="pb-20">
        <h3>Create a property owner account</h3>
        <p class="mt-10 text-grey">
          Help us authenticate you by providing us some background information
        </p>
      </div>

      <hr class="hr_rule" />
      <div class="account_form mt-10">
        <el-form
          ref="property_account"
          :rules="account_validation"
          :model="property_account"
          label-position="top"
        >
          <div v-if="step == 1">
            <div class="d-flex pb-20">
              <div>
                <div class="profile_holder mr-20">
                  <i
                    class="el-icon-user-solid"
                    v-if="!property_account.avatar"
                  ></i>
                  <img
                    :src="property_account.avatar"
                    v-else
                    class="property_avatar"
                  />
                </div>
              </div>
              <div class="d-flex_column profile_text pl-20">
                <el-button type="info btn_sm" @click="showPhotoModal"
                  >Upload photo</el-button
                >
                <p class="mt-10">
                  Must be an actual photo of you. Logos, clip-art, group photos,
                  and digitally-altered images are not allowed
                </p>
              </div>
            </div>
            <hr class="hr_rule" />
            <div class="property_forms pb-20 pt-20">
              <div class="account_label">
                <h4>Name</h4>
              </div>

              <div class="form_div">
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="12">
                    <el-form-item label="First Name" prop="first_name">
                      <el-input
                        v-model="property_account.first_name"
                        placeholder="First name"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="12">
                    <el-form-item label="Last Name" prop="last_name">
                      <el-input
                        v-model="property_account.last_name"
                        placeholder="Last Name"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="12">
                    <el-form-item label="Password" prop="password">
                      <el-input
                        v-model="property_account.password"
                        placeholder="Enter password"
                        type="password"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :xs="24" :sm="24" :md="12">
                    <el-form-item
                      label="Confirm Password"
                      prop="confirm_password"
                    >
                      <el-input
                        v-model="property_account.confirm_password"
                        placeholder="confirm password"
                        type="password"
                      >
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24">
                    <el-form-item label="Date of Birth" prop="dob">
                      <el-input v-model="property_account.dob" type="date">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
            </div>
            <hr class="hr_rule" />

            <div class="property_forms pt-20">
              <div class="account_label">
                <h4>Contact Information</h4>
              </div>
              <div class="form_div">
                <el-form-item label="Email address" prop="email">
                  <el-input
                    v-model="property_account.email"
                    type="email"
                    placeholder="Enter email"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item
                  label="Phone number"
                  prop="phone"
                  style="margin-top: 10px"
                >
                  <vue-phone-number-input
                    v-model="phone"
                    :border-radius="7"
                    default-country-code="GH"
                    @update="onPhoneUpdate"
                  />
                </el-form-item>
                <div class="mt-20 next_btn">
                  <el-button
                    type="primary"
                    class="btn_sm submit_register_button"
                    @click="toNext"
                    >Next</el-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div v-if="step == 2">
            <div class="property_forms pb-20">
              <div class="account_label">
                <h4>Validate account</h4>
                <p class="pt-5">
                  We need to verify your information. Please submit a copy of
                  your government ID to process your application
                </p>
              </div>
              <div class="form_div">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="12">
                    <el-form-item label="ID type" prop="id_card_type">
                      <el-select
                        v-model="property_account.id_card_type"
                        placeholder="Select ID type"
                      >
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
                <el-form-item label="ID card number" prop="id_card_number">
                  <el-input
                    v-model="property_account.id_card_number"
                    placeholder="Enter ID number"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="Upload ID" prop="id_card_upload">
                  <el-upload
                    drag
                    action=""
                    :on-change="propertyCard"
                    :limit="1"
                    :multiple="false"
                    class="upload_dragg w-100"
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text w-100">
                      Upload a front photo of your ID
                    </div>
                  </el-upload>
                </el-form-item>
                <el-col>
                  <div class="terms_condition py-20">
                    <p>
                      By selecting <b>Agree and continue</b>, I agree to Dwellys
                      <b
                        >Terms of Service, Payments Terms of Service, and
                        Nondiscrimination Policy</b
                      >
                      and acknowledge the Privacy Policy.
                    </p>
                  </div>
                  <div class="mt-20 d-flex justify_between">
                    <el-button class="back_btn" @click="toPrev">Back</el-button>
                    <div class="register_btn">
                      <el-button type="info" v-if="step === 1">Skip</el-button>
                      <el-button
                        type="primary"
                        :loading="btnLoading"
                        class="second_next submit_register_button"
                        @click="submit_account"
                        >Agree and Continue</el-button
                      >
                    </div>
                  </div>
                </el-col>
              </div>
            </div>
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
import { IMixinState } from "@/types/mixinsTypes";

export default Vue.extend({
  name: "AccountPage",
  components: {
    VuePhoneNumberInput,
    ApplicationHandler,
  },

  data() {
    var validatePass = (rule: any, value: string, callback: any) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if ((this as any).property_account.confirm_password !== "") {
          (this as any).$refs.property_account.validateField(
            "confirm_password"
          );
        }
        callback();
      }
    };
    var validatePass2 = (rule: any, value: string, callback: any) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== (this as any).property_account.password) {
        callback(new Error("Password don't match!"));
      } else {
        callback();
      }
    };
    return {
      active: 0 as number,
      step: 1 as number,
      phone: "",
      btnLoading: false as boolean,
      property_account: {
        avatar: "" as any,
        first_name: "" as string,
        last_name: "" as string,
        dob: "" as string,
        sign_up_mode: "email",
        email: "" as string,
        password: "" as string,
        confirm_password: "" as string,
        phone_number: "" as string,
        id_card_type: "" as string,
        id_card_upload: "" as any,
        id_card_number: "" as string,
        country_id: "39a40751-d7d2-4346-99e5-b0235b520ce5" as String,
        user_type: "lister",
      },
      account_validation: {
        first_name: [
          {
            required: true,
            message: "Please enter your first name",
            trigger: ["blur", "change"],
          },
        ],
        last_name: [
          {
            required: true,
            message: "Please enter your last name",
            trigger: ["blur", "change"],
          },
        ],
        dob: [
          {
            required: true,
            message: "Please enter your date of birth",
            trigger: ["blur", "change"],
          },
        ],
        id_card_number: [
          {
            required: true,
            message: "Please enter ID number",
            trigger: ["blur", "change"],
          },
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "Please enter valid email",
            trigger: ["blur", "change"],
          },
          { min: 5, message: "Length should be 5 or more", trigger: "blur" },
        ],
        phone_number: [
          {
            required: true,
            message: "Please enter your phone number",
            trigger: ["blur", "change"],
          },
        ],
        id_card_type: [
          {
            required: true,
            message: "Please select ID type",
            trigger: "change",
          },
        ],
        id_card_upload: [
          {
            required: true,
            message: "Please select an ID card",
            trigger: "change",
          },
        ],
        password: [
          { validator: validatePass, trigger: "blur", required: true },
        ],
        confirm_password: [
          { validator: validatePass2, trigger: "blur", required: true },
        ],
      },
      options: ["SSNIT", "Passport", "Voter"],
      user: "" as string,
      countries: [],
    };
  },
  async created() {
    const countries = await this.$countriesApi.index();
    this.countries = countries.data;
    console.log(countries);
  },
  methods: {
    toPrev() {
      this.step--;
    },
    toNext() {
      (this as any).$refs.property_account.validate((valid: boolean) => {
        if (valid) {
          this.step++;
        } else {
          return false;
        }
      });
    },
    propertyCard(file: any) {
      let reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onloadend = () => {
        this.property_account.id_card_upload = reader.result;
      };
    },
    showPhotoModal() {
      (this as any).$refs.propertyAction.showPhotoModal(this.user);
    },
    onPhoneUpdate(e: any) {
      console.log(e);
      this.property_account.phone_number = e.formattedNumber;
      this.countries.filter((country: any) =>
        country.short_name == e.countryCode
          ? (this.property_account.country_id = country.id)
          : ""
      );
    },
    getAvatar(avatar: any) {
      this.property_account.avatar = avatar;
      console.log(this.property_account);
    },
    submit_account() {
      this.btnLoading = true;
      (this as any).$refs.property_account.validate((valid: boolean) => {
        if (valid) {
          this.signUp();
        } else {
          this.btnLoading = false;
          (this as any as IMixinState).getNotification(
            "Make sure all required fields are filled",
            "error"
          );
          return false;
        }
      });
    },
    async signUp(): Promise<void> {
      try {
        const response = await this.$registerApi.create(this.property_account);
        console.log(response);

        (this as any as IMixinState).$confirm(response.message, {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "success",
        });
        this.btnLoading = false;
      } catch (error) {
        this.btnLoading = false;
        (this as any as IMixinState).catchError(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$small_screen: 426px;
.property_account {
  padding-bottom: 50px;
}
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
.account_content {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;

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
      p {
        width: 50%;
        @media (max-width: $small_screen) {
          width: 100%;
        }
      }
    }
    .next_btn {
      display: flex;
      justify-content: flex-end;
      @media (max-width: $small_screen) {
        display: block;
        .submit_register_button {
          width: 100%;
        }
      }
    }
    .property_forms {
      display: flex;
      @media (max-width: $small_screen) {
        flex-direction: column;
      }
    }
    .form_div {
      max-width: 560px;
      width: 100%;
    }
  }
  .account_label {
    width: 20%;
    padding-right: 30px;
    padding-top: 10px;
    margin-right: 10px;
    @media (max-width: $small_screen) {
      width: 100%;
      padding-bottom: 10px;
      margin-right: 0;
      padding-right: 0;
    }
    p {
      color: #94a3b8;
      font-size: 13px;
    }
  }
  .terms_condition {
    width: 100%;
    p,
    b {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.01em;
    }
  }
  .second_next {
    width: 180px;
    padding: 12px;
  }

  .property_avatar {
    border-radius: 50%;
    height: 130px;
    width: 130px;
  }
}
</style>
