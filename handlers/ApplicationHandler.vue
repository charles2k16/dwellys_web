<template>
  <div>
    <!-- Add Class dialog -->
    <el-dialog
      :visible.sync="showAddClassModal"
      width="40%"
      :destroy-on-close="true"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h3>{{ modalTitle }}</h3>
        <p class="mt-10">
          All fields should be filled for accurate class filtering.
        </p>
      </template>
      <AddClasses @closeClassModal="closeAddClassModal" />
    </el-dialog>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ModalHandler',
  data() {
    return {
      modalTitle: '' as string,
      showAddClassModal: false as boolean,
      successFunc: null as any,
    }
  },
    methods: {
    addClassModal(refereshTable: any): void {
      this.modalTitle = 'Add Classes'
      this.successFunc = refereshTable
      this.showAddClassModal = true
    },
    closeAddClassModal() {
      this.closeModal(this.successFunc)
      this.showAddClassModal = false
    },
    closeModal(done: any) {
      done()
    },
    }
})
