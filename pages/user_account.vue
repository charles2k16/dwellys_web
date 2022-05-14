<template>
  <div class="section account_content">
    <div class="create_account">
      <h3>Create an account</h3>
      <p>Provide information about yourself for identity</p>
    </div>
    <hr class="hr_rule" />
    <div class="account_form">
      <el-form ref="userAccount" v-model="account" label-position="top">
        <div class="d-flex pb-20">
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
                  <el-input v-model="account.last_name" placeholder="Last Name">
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

        <div class="d-flex pb-20">
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

            <div class="mt-10">
              <small>
                By selecting Agree and continue, I agree to Dwellys Terms of
                Service, Payments Terms of Service, and Nondiscrimination Policy
                and acknowledge the Privacy Policy.</small
              >
            </div>
            <div class="mt-20 d-flex justify_end">
              <el-button type="primary" @click="submitAccount"
                >Agree and continue</el-button
              >
            </div>
          </div>
        </div>
      </el-form>
    </div>
    <div class="user_account_footer">
      <div class="pb-10">
        <img src="~/assets/img/logo.png" class="user_img_logo" />
      </div>
      <small>
        Dwellys International Limited (dwellys) is a company registered in Ghana
        with company registration number CS234262018 at 8th Floor, Silver Star
        Tower, Airport City, Accra - Ghana.
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default Vue.extend({
  name: "AccountPage",
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      account: {
        first_name: "" as string,
        last_name: "" as string,
        date: "" as string,
        email: "" as string,
        phone: "" as string,
        terms: false as boolean,
        number: "" as string,
      },
    };
  },
  computed: {
    isValid() {},
  },
  methods: {
    submitAccount() {
      console.log("submit");
    },
  },
});
</script>

<style lang="scss">
.account_content {
  padding-top: 40px;
  .user_account_footer {
    padding: 80px 0 30px;
    width: 20%;
    .user_img_logo {
      width: 75.61px;
      height: 16.3px;
    }
  }
  .create_account {
    padding-bottom: 20px;
  }
  .account_form {
    padding-top: 20px;

    .form_div {
      max-width: 500px;
      width: 100%;
    }
  }
  .account_label {
    width: 20%;
  }
}
</style>
