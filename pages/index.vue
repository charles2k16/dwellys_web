<template>
  <div class="home">
    <div class="home_landing_page">
      <div class="landing_content section">
        <h2>
          Discover the world’s hub for <bold>houses</bold> and
          <bold>properties</bold> for sale and rent
        </h2>
        <el-tabs type="card" @tab-click="handleClick">
          <el-tab-pane label="Buy">
            <div class="buy">
              <el-form
                ref="home"
                class="search_home"
                v-model="home"
                label-position="top"
              >
                <el-input
                  v-model="home"
                  class="search_input"
                  placeholder="Where do you want to live?"
                >
                </el-input>
                <el-button type="primary">Find your home</el-button>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Rent">Configs</el-tab-pane>
          <el-tab-pane label="Lease">Lease</el-tab-pane>
        </el-tabs>
        <el-row class="d-flex pt-20">
          <div class="pr-20">
            <p><b>2000+ </b></p>
            <small>Properties for rent</small>
          </div>
          <div
            style="
              border-left: 1px solid #f8fafc;
              border-right: 1px solid #f8fafc;
            "
            class="px-20"
          >
            <p>1954+</p>
            <small>Properties for sale</small>
          </div>
          <div class="pl-20">
            <p>1954+</p>
            <small>Properties for sale</small>
          </div>
        </el-row>
      </div>
    </div>
    <div>
      <!-- <div>
        <el-tabs
          class="section"
          :tab-position="top"
          style="height: 200px; display: flex; justify-content: between"
        >
          <el-tab-pane label="User">User</el-tab-pane>
          <el-tab-pane label="Config">Config</el-tab-pane>
          <el-tab-pane label="Role">Role</el-tab-pane>
          <el-tab-pane label="Task">Task</el-tab-pane>
        </el-tabs>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import { products } from '@/assets/data/index.js'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      activeName: 'first' as string,
      home: '' as string,
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
    handleClick(tab: string, event: object) {
      console.log(tab, event);
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  color: var(--text-white);
  .home_landing_page {
    background-image: url('~/assets/img/home.png');
    background-repeat: no-repeat;
    background-size: 100% 400px;
    height: 400px;
    padding: 30px 0;
    .landing_content {
      display: flex;
      width: 90%;
      flex-direction: column;
      justify-content: center;
      // padding: 20px;
      h2 {
        color: var(--text-white);
        width: 35%;
        padding-bottom: 30px;
        font-weight: 400;
      }
      .buy {
        background: #ffffff;
        border-radius: 0px 10px 10px 10px;
        .search_home {
          display: flex;
          padding: 10px;
        }
      }
    }
  }
}
</style>
