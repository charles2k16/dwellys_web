<template>
  <div class="plans_price pt-20">
    <div v-for="(plan, index) in pricingPlans" :key="index" class="mx-10">
      <div
        class="plans"
        @click="getPlan(plan)"
        :style="selectedPlan == plan.name && { border: '1px solid #de0b0b' }"
      >
        <h3>{{ plan.name }}</h3>
        <p class="plan_recommend">{{ plan.description }}</p>
        <h4 class="plan_pricing">{{ plan.currency }}{{ plan.price }}</h4>
        <p class="plan_duration">For {{ plan.no_of_days }} days</p>
        <el-button
          class="plan_btn mb-10"
          :type="selectedPlan == plan.name ? 'primary' : ''"
          >Select plan</el-button
        >
        <div class="pt-20 recommendations">
          <p class="pb-10">
            <img src="../../assets/svg/check.png" class="pr-10" />Recommended
            for individuals
          </p>
          <p class="pb-10">
            <img src="../../assets/svg/check.png" class="pr-10" />Recommended
            for individuals
          </p>
          <p class="pb-10">
            <img src="../../assets/svg/check.png" class="pr-10" />Recommended
            for individuals
          </p>
          <img src="../../assets/svg/help.png" class="pt-20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PlansPricing",
  props: {
    pricingPlans: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      selectedPlan: "" as string,
    };
  },
  methods: {
    getPlan(newPlan: any) {
      this.selectedPlan = newPlan.name;

      this.$emit("getPlan", newPlan.price);
    },
  },
});
</script>

<style lang="scss">
$small_screen: 426px;
$medium_screen: 768px;
.plans {
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  @media (max-width: $medium_screen) {
    margin-bottom: 20px;
  }
  h3 {
    padding-bottom: 5px;
  }
  .plan_recommend,
  .plan_duration {
    padding-bottom: 30px;
  }
  .plan_duration {
    padding-top: 5px;
    font-size: 14px;
  }
  .plan_pricing {
    font-weight: 700;
    font-size: 30px;
    line-height: 28px;
  }
  .recommendations {
    font-size: 14px;
  }
}
</style>
