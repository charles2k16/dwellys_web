<template>
  <div>
    <ApplicationHandler ref="handleAction"></ApplicationHandler>
    <img src="/logo.png" alt="logo" width="70px" class="mb-20" />
    <br />
    <div class="section">
      <div class="profile_div">
        <div>
          <h2 class="center">Welcome to :brij! 🎉</h2>
          <p class="center mt-10">
            Let’s set you up quickly to start collecting payments, here are some
            things to do
          </p>
          <br />
          <hr class="hr_rule" />

          <div class="profile_section mt-20">
            <span class="icon_wrap">
              <i class="el-icon-star-off"></i>
            </span>

            <div>
              <p>Personal details</p>
              <span class="d-block"
                >This information must match a government issued document or
                your transfer might be delayed.</span
              >
            </div>

            <el-button
              type="primary"
              class="ml-20"
              @click="personalDetailsForm"
            >
              Start sending
            </el-button>
          </div>

          <div class="profile_section mt-20">
            <span class="icon_wrap">
              <i class="el-icon-document-checked"></i>
            </span>

            <div>
              <p>Review your amount</p>
              <span class="d-block">
                Review and confirm the amount you are sending
              </span>
            </div>
          </div>

          <div class="profile_section mt-20">
            <span class="icon_wrap">
              <i class="el-icon-money"></i>
            </span>

            <div>
              <p>Payment method</p>
              <span class="d-block">
                Make your first sales by sharing your page.
              </span>
            </div>
          </div>

          <div class="profile_section mt-20">
            <span class="icon_wrap">
              <i class="el-icon-tickets"></i>
            </span>

            <div>
              <p>Recipient details</p>
              <span class="d-block">
                Set up payout details so you can get paid.
              </span>
            </div>
          </div>

          <div class="profile_section mt-20">
            <span class="icon_wrap">
              <i class="el-icon-tickets"></i>
            </span>

            <div>
              <p>Enter your pin and transaction complete.</p>
              <span class="d-block">
                Set up payout details so you can get paid.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {}
  },
  methods: {
    onCountryUpdate(e: any) {
      console.log(e, 'event')
      console.log(e.formattedNumber, 'format')
    },
    personalDetailsForm(): void {
      ;(this as any).$refs.handleAction.openUserForm()
    },
  },
})
</script>

<style lang="scss" scoped>
.profile_div {
  height: 100%;
  display: flex;
  justify-content: center;

  align-items: center;

  > div {
    max-width: 700px;
    width: 100%;
  }
}
.profile_section {
  display: flex;
  align-items: center;
  background: #f3f3f6;
  border-radius: 12px;
  border: 1px solid #f3f3f7;
  padding: 24px;

  p {
    font-size: 17px;
  }

  .icon_wrap {
    margin-right: 24px;
    background: #e6e6ea;
    border-radius: 8px;
    padding: 12px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 48px;

    i {
      font-size: 24px;
    }
  }
}
</style>
