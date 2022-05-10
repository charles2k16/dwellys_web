<template>
  <div>
    <div class="section"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
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
    };
  },
  methods: {
    onCountryUpdate(country: object) {
      console.log(country, 'event');
    },
  },
});
</script>

<style lang="scss" scoped></style>
