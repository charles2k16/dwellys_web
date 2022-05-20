<template>
  <div class="section messages pt-20">
    <div class="customers_chat">
      <div class="chat_head">
        <h2 class="pb-10">Messages</h2>
        <!-- search -->
        <section class="d-flex message_search">
          <span class="material-icons" style="color: #94a3b8"> search </span>
          <el-input
            v-model="search"
            placeholder="Search chat"
            type="search"
          ></el-input>
        </section>
      </div>
      <div class="customers mt-20">
        <!-- customers -->
        <div class="customer p-10">
          <div>
            <div class="d-flex justify_between pb-10">
              <div class="d-flex justify_between">
                <img src="~/assets/img/customer1.png" />
                <div class="customer_message_seen"></div>
                <p class="pl-10">James Babatunde</p>
              </div>
              <span style="color: #64748b; font-size: 11px">2 mins ago</span>
            </div>
            <p style="color: #64748b; font-size: 11px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a
              nunc, etiam ut ut vitae mattis.
            </p>
          </div>
        </div>
        <div class="customer p-10">
          <div>
            <div class="d-flex justify_between pb-10">
              <div class="d-flex justify_between">
                <img src="~/assets/img/customer2.png" />
                <div class="customer_message_seen"></div>
                <p class="pl-10">Martin Yeboah</p>
              </div>
              <span style="color: #64748b; font-size: 11px">2 mins ago</span>
            </div>
            <p style="color: #64748b; font-size: 11px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a
              nunc, etiam ut ut vitae mattis.
            </p>
          </div>
        </div>
        <div class="customer p-10">
          <div>
            <div class="d-flex justify_between pb-10">
              <div class="d-flex justify_between">
                <img src="~/assets/img/customer3.png" />
                <div class="customer_message_seen"></div>
                <p class="pl-10">Kwadwo Asare</p>
              </div>
              <span style="color: #64748b; font-size: 11px">2 mins ago</span>
            </div>
            <p style="color: #64748b; font-size: 11px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a
              nunc, etiam ut ut vitae mattis.
            </p>
          </div>
        </div>
        <div class="customer p-10">
          <div>
            <div class="d-flex justify_between pb-10">
              <div class="d-flex justify_between">
                <img src="~/assets/img/customer1.png" />
                <div class="customer_message_seen"></div>
                <p class="pl-10">James Babatunde</p>
              </div>
              <span style="color: #64748b; font-size: 11px">2 mins ago</span>
            </div>
            <p style="color: #64748b; font-size: 11px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a
              nunc, etiam ut ut vitae mattis.
            </p>
          </div>
        </div>
        <div class="customer p-10">
          <div>
            <div class="d-flex justify_between pb-10">
              <div class="d-flex justify_between">
                <img src="~/assets/img/customer2.png" />
                <div class="customer_message_seen"></div>
                <p class="pl-10">Martin Yeboah</p>
              </div>
              <span style="color: #64748b; font-size: 11px">2 mins ago</span>
            </div>
            <p style="color: #64748b; font-size: 11px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a
              nunc, etiam ut ut vitae mattis.
            </p>
          </div>
        </div>
        <div class="customer p-10">
          <div>
            <div class="d-flex justify_between pb-10">
              <div class="d-flex justify_between">
                <img src="~/assets/img/customer3.png" />
                <div class="customer_message_seen"></div>
                <p class="pl-10">Kwadwo Asare</p>
              </div>
              <span style="color: #64748b; font-size: 11px">2 mins ago</span>
            </div>
            <p style="color: #64748b; font-size: 11px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a
              nunc, etiam ut ut vitae mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="chats ml-20">
      <div class="chat_header d-flex justify_between px-10">
        <div class="d-flex flex_column p-10">
          <img src="~/assets/img/customer3.png" />
          <div class="chat_seen"></div>
          <div class="pl-10">
            <p>Kwadwo Asare</p>
            <span style="color: #64748b; font-size: 11px">2 mins ago</span>
          </div>
        </div>
        <div>
          <NuxtLink to="/" class="d-flex mr-10" style="color: #334155">
            <span class="material-icons mr-10"> outlined_flag </span
            >Report</NuxtLink
          >
        </div>
      </div>
      <div class="chat_section p-20">
        <div class="chat_content">chat contents</div>
        <div class="d-flex align_center chart_search p-10">
          <span class="material-icons" style="color: #94a3b8; font-size: 30px">
            search
          </span>
          <el-input
            v-model="search"
            placeholder="Search chat"
            type="search"
            class="mr-10"
          ></el-input>
          <el-button class="send_chat">Send</el-button>
        </div>
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
      search: "" as string,
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
.messages {
  display: flex;
  // min-height: 100vh;
  .message_search {
    padding: 5px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    align-items: center;
  }
  .customers_chat {
    width: 30%;
    .customers {
      border-radius: 8px;
      border: 1px solid #e2e8f0;

      height: 500px;
      overflow-y: scroll;
      .customer {
        border-bottom: 1px solid #e2e8f0;
        &:active {
          border-left: 2px solid #cf0100;
          background: #f1f5f9;
        }
        .customer_message_seen {
          width: 7px;
          height: 7px;
          background: rgba(34, 197, 94, 1);
          position: relative;
          border-radius: 100%;
          left: -12px;
          top: 15px;
        }
      }
    }
  }
  .chats {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    flex: 1;
    height: 600px;
    overflow: hidden;
    .chat_header {
      background: #f8fafc;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
      border-radius: 8px 8px 0px 0px;
      .chat_seen {
        width: 7px;
        height: 7px;
        background: rgba(34, 197, 94, 1);
        position: relative;
        border-radius: 100%;
        top: 37px;
        left: -12px;
      }
    }
    .chat_section {
      .chat_content {
        height: 440px;
        overflow-x: scroll;
      }
      .chart_search {
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        margin-top: auto;
        width: 100%;
        bottom: 0;
        .send_chat {
          background: #334155;
          color: #fff;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
