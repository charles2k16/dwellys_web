<template>
  <div class="section">
    <hr class="hr_rule" />
    <h2 class="pb-10 pt-20">Messages</h2>
    <div class="messages">
      <div class="customers_chat">
        <div class="chat_head">
          <!-- search -->
          <section class="d-flex message_search">
            <span class="material-icons" style="color: #94a3b8"> search </span>
            <el-input
              v-model="search"
              placeholder="Search chat"
              class="message_search_input"
              type="search"
            ></el-input>
          </section>
        </div>
        <div class="customers mt-20" >
          <!-- customers -->
          <div class="customer p-10" v-for="(customer, index) in customers" :key="index" @click="getCustomer(customer)" :style="customer.isSelect && {'border-left': '3px solid #de0b0b'}">
            <div class="">
              <div class="d-flex justify_between pb-10">
                <div class="d-flex justify_between">
                  <img :src="getImage(customer.img)" />
                  <div class="customer_message_seen"></div>
                  <p class="pl-10"> {{customer.name}} </p>
                </div>
                <span style="color: #64748b; font-size: 11px"> {{customer.lastSeen}} </span>
              </div>
              <p style="color: #64748b; font-size: 11px">
                {{customer.newMessage}}
              </p>
            </div>
          </div>
        
        </div>
      </div>
      <div class="chats ml-20" v-if="customer.name">
        <div class="chat_header d-flex justify_between px-10">
          <div class="d-flex flex_column p-10">
            <img :src="getImage(customer.img)" />
            <div class="chat_seen"></div>
            <div class="pl-10">
              <p>{{customer.name}} </p>
              <span style="color: #64748b; font-size: 11px">{{customer.lastSeen}} </span>
            </div>
          </div>
          <div>
            <NuxtLink to="/" class="d-flex mr-10" style="color: #334155">
              <span class="material-icons mr-10"> outlined_flag </span
              >Report</NuxtLink
            >
          </div>
        </div>
        <div class="chat_section px-20 pt-20">
          <div class="chat_content">
            <div class="days py-10">
              <div class="day_line1"></div>
              <div class="px-10"><p>Today</p></div>
              <div class="day_line2"></div>
            </div>
            <div class="pt-20">
              <section class="client_message">
                <p class="message_text p-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                  a nunc, etiam ut ut vitae mattis.
                </p>
                <p class="message_text p-10">Lorem ipsum dolor sit amet</p>
                <small>Mon 5:34pm</small>
              </section>
              <section class="user_messages">
                <p class="message_text p-10">Lorem ipsum dolor sit amet</p>
                <p class="message_text p-10">Lorem ipsum dolor sit amet</p>
                <small>Mon 5:34pm</small>
              </section>
            </div>
          </div>
          <div class="d-flex align_center chat_input p-10">
            <span
              class="material-icons"
              style="color: #94a3b8; font-size: 30px"
            >
              search
            </span>
            <el-input
              v-model="text"
              placeholder="Enter chat"
              type="search"
              class="mr-10 send_message_input"
            ></el-input>
            <el-button class="send_chat">Send</el-button>
          </div>
        </div>
      </div>
       <div class="w-100 d-flex justify_center" v-else>
      <h4>Click a client to view chats</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

 interface property {
  name: String,
  newMessage: String,
  img: String,
  lastSeen: String,
  isSelect: Boolean,
  }

export default Vue.extend({
  name: "AccountPage",

  data() {
    return {
      search: "" as string,
      text: "" as string,
      customers: [
        {name: "James Babatunde", newMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a nunc, etiam ut ut vitae mattis.', isSelect: false, lastSeen: '2 mins ago', img: 'customer1.png'},
        {name: "Martin Yeboah", newMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a nunc, etiam ut ut vitae mattis.', isSelect: false, lastSeen: '2 mins ago', img: 'customer2.png'},
        {name: "Kwadwo Asare", newMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a nunc, etiam ut ut vitae mattis.', isSelect: false, lastSeen: '2 mins ago', img: 'customer3.png'},
        {name: "Agbeko Sly", newMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a nunc, etiam ut ut vitae mattis.', isSelect: false, lastSeen: '2 mins ago', img: 'customer1.png'},
        {name: " Joyce Kutah", newMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a nunc, etiam ut ut vitae mattis.', isSelect: false, lastSeen: '2 mins ago', img: 'customer1.png'},
        {name: "Agbeko Sly", newMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a nunc, etiam ut ut vitae mattis.', isSelect: false, lastSeen: '2 mins ago', img: 'customer2.png'},
        {name: "Agbeko Sly", newMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus a nunc, etiam ut ut vitae mattis.', isSelect: false, lastSeen: '2 mins ago', img: 'customer3.png'},
      ],
      customer: {}

    };
  },
  computed: {
    isValid() {},
  },
  methods: {
      getImage(pic: string): string {
      return require("../assets/img/" + pic);
    },
    getCustomer(newCustomer:property ) {
       this.customers.filter(customer => customer.name === newCustomer.name ? customer.isSelect = true : customer.isSelect = false);
       this.customer = newCustomer
    },
    submitAccount() {
      console.log("submit");
    },
  },
});
</script>

<style lang="scss">
.messages {
  display: flex;
  height: 100%;
  max-height: 100vh;
  .message_search {
    padding: 5px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    align-items: center;
    .message_search_input {
      border: none;

      .el-input__inner {
        border: none;
        background: #fff;
      }
    }
  }
  .customers_chat {
    width: 30%;
    .customers {
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      height: 70vh;
      max-height: 700px;
      overflow-y: auto;
      margin-bottom: 20px;

      .customer {
        border-bottom: 1px solid #e2e8f0;
        cursor: pointer;
       
          
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
    margin-bottom: 20px;
    padding-bottom: 30px;
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
      height: 70vh;
      max-height: 750px;

      .chat_content {
        height: 90%;
        overflow-y: auto;
        .days {
          display: flex;
          width: 100%;
          align-items: center;
          .day_line1,
          .day_line2 {
            width: 50%;
            height: 1px;
            background: rgba(226, 232, 240, 1);
          }
        }
        .client_message,
        .user_messages {
          max-width: 70%;
          .message_text {
            background: #f1f5f9;
            border-radius: 0px 8px 8px 8px;
            margin-bottom: 5px;
          }
        }
        .user_messages {
          float: right;
          text-align: right;
          .message_text {
            background: #cf0100;
            color: white;
            border-radius: 0px 8px 8px 8px;
          }
        }
      }
      .chat_input {
        width: 100%;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        .send_message_input {
          .el-input__inner {
            border: none;
            background: #fff;
          }
        }
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
