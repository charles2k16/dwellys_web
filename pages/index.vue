<template>
  <div>
    <NuxtLink to="/">
      <img src="/logo.png" alt="logo" width="70px" class="mb-20" />
    </NuxtLink>
    <br />
    <div class="section d-flex justify_center">
      <div class="send_div">
        <h2 class="center">Quick send</h2>
        <br />
        <hr class="hr_rule" />

        <el-form ref="sendForm" label-position="top" class="mt-20">
          <el-form-item label="Send Amount">
            <div class="align_center">
              <CountryDropdown @selected="onCountryUpdate" />
              <el-input
                v-model="sendForm.amount"
                type="number"
                placeholder="0.00"
                class="ml-20"
              ></el-input>
            </div>

            <div class="center mt-20">
              <span class="text-primary"> <b>1 GHS = 55.1 NGN </b></span>
            </div>
          </el-form-item>

          <el-form-item label="Recipient gets">
            <div class="align_center">
              <CountryDropdown @selected="onCountryUpdate" />
              <el-input
                v-model="sendForm.recipient_amt"
                type="number"
                placeholder="0.00"
                class="ml-20"
              ></el-input>
            </div>
          </el-form-item>

          <el-form-item label="Delivery method">
            <el-select
              v-model="sendForm.payment_method"
              class="full_width brij_select"
            >
              <el-option
                v-for="pay in payOptions"
                :key="pay.value"
                :label="pay.label"
                :value="pay.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <div class="d-flex justify_between mt-30">
          <small class="text-grey">Processing fee</small>
          <small class="text-primary">56 GHS</small>
        </div>
        <div class="d-flex justify_between mt-10">
          <small class="text-grey">Transfer time</small>
          <small class="text-primary">Within minutes</small>
        </div>

        <br />
        <hr class="hr_rule" />

        <div class="d-flex justify_between mt-10">
          <small class="text-grey">Amount to pay</small>
          <small class="text-primary">324 GHS</small>
        </div>
        <div class="d-flex justify_between mt-10">
          <small class="text-grey">Recipient gets</small>
          <small class="text-primary">761.65 NGN</small>
        </div>

        <br />
        <hr class="hr_rule" />

        <div class="mt-20">
          <el-button
            type="primary"
            class="full_width"
            @click="$router.push('/login')"
          >
            Send Now
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { products } from '@/assets/data/index.js'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      sendForm: {
        amount: null,
        recipient_amt: null,
        payment_method: '' as string,
      },
      payOptions: [
        { value: ':brijwallet', label: ':brij wallet' },
        { value: ':brijEx', label: ':brijEx' },
        { value: 'M-PESA', label: 'M-PESA' },
      ],
    }
  },
  methods: {
    onCountryUpdate(country: object) {
      console.log(country, 'event')
    },
  },
})
</script>

<style lang="scss" scoped>
.send_div {
  max-width: 500px;
  width: 100%;
}
</style>
