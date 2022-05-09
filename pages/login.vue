<template>
  <div>
    <div class="section">
      <div class="login_div">
        <div>
          <div class="center">
            <img src="/logo.png" alt="logo" width="40px" class="mb-20" />
          </div>

          <h2 class="center">Create a Brij send account.</h2>
          <br />
          <hr class="hr_rule" />

          <el-form ref="loginForm" label-position="top" class="mt-20">
            <el-form-item label="Phone Number">
              <vue-phone-number-input
                v-model="loginForm.number"
                :border-radius="7"
                default-country-code="GH"
                @update="onCountryUpdate"
              />
            </el-form-item>

            <el-form-item label="Email address">
              <el-input
                v-model="loginForm.email"
                placeholder="Your email address"
              ></el-input>
            </el-form-item>

            <el-form-item label="Password">
              <el-input
                v-model="loginForm.password"
                type="password"
                placeholder="Your password"
                show-password
              ></el-input>
            </el-form-item>

            <div class="mt-20">
              <el-checkbox v-model="accept_terms"
                ><span
                  >I agree that I accept the
                  <span class="text-primary">terms and conditions</span> and
                  <span class="text-primary"> privacy policy</span> of :brij
                </span>
              </el-checkbox>
            </div>
          </el-form>

          <div class="mt-20">
            <el-button
              type="primary"
              class="full_width"
              @click="$router.push('/profile')"
            >
              Sign In
            </el-button>

            <span class="d-block mt-20 center text-grey"
              >Don’t have an account?
              <span class="text-primary clickable">Sign up</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
// import { products } from '@/assets/data/index.js'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    VuePhoneNumberInput,
  },
  data() {
    return {
      accept_terms: false,
      loginForm: {
        number: '',
        email: '' as string,
        password: '' as string,
      },
    }
  },
  methods: {
    onCountryUpdate(e: any) {
      console.log(e, 'event')
      console.log(e.formattedNumber, 'format')
    },
  },
})
</script>

<style lang="scss" scoped>
.login_div {
  height: 800px;
  display: flex;
  justify-content: center;
  // border: 1px solid grey;
  align-items: center;

  > div {
    max-width: 400px;
    width: 100%;
  }
}
</style>
