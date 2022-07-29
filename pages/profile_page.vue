<template>
  <div class="settings">
    <div class="pt-20">
      <div class="settings_header">
        <h3 class="pb-20 pt-20 section">Settings</h3>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="nav_scroll">
        <el-tab-pane label="My details" name="first" class="new_tab"
          ><div class="section">
            <el-form>
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
                        <el-input v-model="account.date" type="date">
                        </el-input>
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
                  </el-form-item>
                  <vue-phone-number-input
                    v-model="account.number"
                    :border-radius="7"
                    default-country-code="GH"
                  />

                  <div class="mt-20 d-flex justify_end">
                    <el-button type="primary" class="btn_sm" @click="toNext"
                      >Next</el-button
                    >
                  </div>
                </div>
              </div>
            </el-form>
          </div></el-tab-pane
        >
        <el-tab-pane label="Verification" name="second" class="settings_body"
          >Verification</el-tab-pane
        >
        <el-tab-pane label="Security" name="third" class="settings_body"
          >Security</el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { products } from '@/assets/data/index.js'
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default Vue.extend({
  name: "settings",
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      activeName: "first" as string,
      home: "" as string,
      step: 1,
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
  methods: {
    handleClick(tab: string, event: object) {
      console.log(tab, event);
    },
    toPrev() {
      this.step--;
    },
    toNext() {
      this.step++;
    },
  },
});
</script>

<style lang="scss">
.account_form {
  padding-top: 20px;
}
.settings_header {
  background: #f8fafc;
  .settings_body {
    background: white;
  }
}
.form_div {
  max-width: 500px;
  width: 100%;
}

.account_label {
  width: 20%;
  padding-right: 30px;
  margin-right: 10px;
  p {
    color: #94a3b8;
    font-size: 13px;
  }
}
</style>
