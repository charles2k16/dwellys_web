<template>
  <div class="section account_content">
    <div class="pb-20">
      <h3>Create an account</h3>
      <p class="mt-10">Provide information about yourself for identity</p>
    </div>
    <hr class="hr_rule" />
    <div class="account_form">
      <el-form ref="userAccount" v-model="account" label-position="top">
        <div class="personal_info_section pb-20">
          <div class="account_label">
            <h4 class="">Name</h4>
          </div>

          <div class="form_div">
            <el-row class="first_last">
              <el-col :xs="24" :sm="12" class="register_first_name">
                <el-form-item label="First Name">
                  <el-input
                    v-model="account.first_name"
                    placeholder="First name"
                  >
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item label="Last Name">
                  <el-input v-model="account.last_name" placeholder="Last Name">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="24">
                <el-form-item label="Date">
                  <el-input v-model="account.dob" type="date"> </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </div>
        <hr class="hr_rule" />

        <div class="contact_info_section pb-20">
          <div class="account_label">
            <h4>Contact information</h4>
          </div>
          <div class="form_div">
            <el-form-item label="Email address">
              <p style="color: red" v-if="error">
                <i class="el-icon-warning pr-10"></i>{{ error }}
              </p>
              <el-input
                v-model="account.email"
                type="email"
                placeholder="Enter email"
              >
              </el-input>
            </el-form-item>
            <el-form-item label="Phone number">
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
            <div class="mt-20 register_btn">
              <el-button
                class="submit_register_button"
                type="primary"
                @click="submitAccount"
                :disabled="!isValid"
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
        dob: "" as string,
        email: "" as string,
        phone: "" as string,
        terms: false as boolean,
        number: "" as string,
      },
      error: "" as string,
    };
  },
  computed: {
    isValid(): boolean {
      return (
        this.account.first_name !== "" &&
        this.account.last_name !== "" &&
        this.account.dob !== "" &&
        this.account.email !== "" &&
        this.account.number !== ""
      );
    },
  },
  methods: {
    onCountryUpdate() {},
    submitAccount() {
      if (
        String(this.account.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        console.log(this.account);
        this.error = "";
        this.$axios
          .post("v3/signup", this.account)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        this.$auth.loginWith("local", {
          data: this.account,
        });
      } else {
        this.error = "Enter a valide email address";
      }
    },
  },
});
</script>

<style lang="scss">
.account_content {
  padding-top: 40px;
  .register_header_line {
    display: none;
  }
  .user_account_footer {
    padding: 80px 0 30px;
    width: 20%;
    .user_img_logo {
      width: 75.61px;
      height: 16.3px;
    }
  }
  .account_form {
    padding-top: 20px;

    .personal_info_section {
      display: flex;
    }
    .contact_info_section {
      padding-top: 10px;
      display: flex;
    }
    .form_div {
      max-width: 500px;
      width: 100%;
      .register_first_name {
        padding-right: 20px;
      }
    }
  }
  .account_label {
    padding-top: 10px;
    width: 20%;
  }
  .register_btn {
    display: flex;
    justify-content: flex-end;
  }
}

@media (max-width: 425px) {
  .account_content {
    padding: 0 20px 10px;
    .register_header_line {
      display: block;
      margin-bottom: 20px;
    }
    .account_form {
      .personal_info_section {
        flex-direction: column;
      }
      .contact_info_section {
        flex-direction: column;
      }
      .form_div {
        max-width: 500px;
        width: 100%;
        .register_first_name {
          padding-right: 0;
        }
      }
      .account_label {
        padding-top: 10px;
        width: 100%;
      }
    }
    .user_account_footer {
      padding: 80px 0 30px;
      width: 100%;
      .user_img_logo {
        width: 75.61px;
        height: 16.3px;
      }
    }
  }
  .register_btn {
    display: block;
    .submit_register_button {
      width: 100%;
    }
  }
}
</style>
