<template>
  <div>
    <div class="account_content">
      <div class="create_account">
        <h3>Create an account</h3>
        <p>Provide information about yourself for identity</p>
      </div>
      <div class="divider"></div>
      <div class="account_form">
        <el-form
          ref="userAccount"
          v-model="account"
          class="client"
          label-position="top"
        >
          <div style="display: flex; padding-bottom: 20px">
            <div class="account_label">
              <el-form-item label="Name"></el-form-item>
            </div>
            <div style="width: 500px">
              <div style="display: flex; justify-content: space-between">
                <el-form-item label="First Name">
                  <el-input
                    v-model="account.first_name"
                    placeholder="First name"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="Last Name">
                  <el-input v-model="account.last_name" placeholder="Last Name">
                  </el-input>
                </el-form-item>
              </div>
              <el-form-item label="Date">
                <el-input v-model="account.date" type="date"> </el-input>
              </el-form-item>

              <!-- <el-form-item label="Password">
                <el-input v-model="account.password" placeholder="password">
                </el-input>
              </el-form-item> -->
            </div>
          </div>
          <div class="divider"></div>
          <div style="display: flex; padding-top: 20px">
            <div class="account_label">
              <el-form-item label="Contact information"></el-form-item>
            </div>
            <div style="width: 500px">
              <el-form-item label="Email address">
                <el-input
                  v-model="account.email"
                  type="email"
                  placeholder="email@gmail.com"
                >
                </el-input>
              </el-form-item>
              <el-form-item
                label="Phone number"
                style="margin-bottom: 0"
              ></el-form-item>
              <div style="display: flex">
                <el-row style="width: 100px; margin-right: 10px">
                  <el-col>
                    <el-form-item>
                      <el-select
                        v-model="account.country"
                        filterable
                        placeholder="Select a Role"
                      >
                        <!-- <el-option
                            v-for="(role, index) in roles"
                            :key="index"
                            :label="role.name"
                            :value="role._id"
                          ></el-option> -->
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-form-item style="width: 100%">
                  <el-input v-model="account.phone" placeholder="553245353">
                  </el-input>
                </el-form-item>
              </div>
              <div style="margin-top: 10px">
                <el-checkbox v-model="account.terms">
                  By selecting Agree and continue, I agree to Dwellys Terms of
                  Service, Payments Terms of Service, and Nondiscrimination
                  Policy and acknowledge the Privacy Policy.</el-checkbox
                >
              </div>
              <div class="submit_btn">
                <el-button class="submit" @click="submitAccount"
                  >Agree and continue</el-button
                >
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
export default Vue.extend({
  name: "AccountPage",

  data() {
    return {
      account: {
        first_name: "" as string,
        last_name: "" as string,
        date: "" as string,
        email: "" as string,
        phone: "" as string,
        terms: false as boolean,
        country: "" as string,
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

<style lang="scss" scoped>
.account_content {
  padding-top: 40px;
  width: 85%;
  margin: 0 auto;
  .create_account {
    padding-bottom: 20px;
  }
  .divider {
    border: 1px solid #e2e8f0;
    width: 100%;
    height: 2px;
  }
  .account_form {
    padding-top: 20px;
  }
  .account_label {
    width: 20%;
  }
  .submit_btn {
    margin-top: 30px;
    float: right;
    .submit {
      background: var(--button-bg);
      color: white;
      border-radius: 8px;
    }
  }
}
</style>
