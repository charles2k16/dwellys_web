<template>
  <div>
    <div class="section pt-20">
      <ApplicationHandler ref="propertyAction" />

      <div class="align_center mb-10">
        <div class="arrow_back">
          <NuxtLink to="/">
            <span class="material-icons">arrow_back</span>
          </NuxtLink>
        </div>
        <p>
          <b
            >{{ propertyDetails.listing_detail.name }} -
            {{ propertyDetails.listing_detail.location }},
            {{ propertyDetails.listing_detail.region }}
          </b>
        </p>
      </div>
      <div class="d-flex justify_between flex-wrap pb-10 text-grey">
        <div class="details_plot">
          <p class="align_center mr-20">
            <span class="material-icons mr-5"> room </span
            >{{ propertyDetails.listing_detail.city }}
          </p>

          <p class="align_center">
            <span class="material-icons mr-5"> schedule </span>Last updated 2
            mins ago
            <!-- {{ propertyDetails.updated_at }} -->
          </p>
        </div>
        <div class="details_plot">
          <p class="align_center mr-20">
            <span class="material-icons mr-5"> share </span>Share
          </p>
          <p class="align_center">
            <span class="material-icons mr-5"> favorite_border </span>Share
          </p>
        </div>
      </div>
    </div>
    <div class="mob-margin section">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="hasMorePhotos ? 20 : 24">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item
              v-for="(image, index) in propertyDetails.listing_detail
                .listing_images"
              :key="index"
            >
              <img :src="src + image.photo" class="carousel_image" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :xs="8" :sm="8" :md="4" v-if="hasMorePhotos">
          <div class="thumbnail">
            <img :src="src + image.photo" class="_image" />
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="section mt-20">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="18">
          <div>
            <p class="pb-10"><b> Basic Information</b></p>

            <div class="d-flex">
              <span
                class="info_card"
                v-for="(
                  specification, index
                ) in propertyDetails.property_specifications"
                :key="index"
              >
                <span class="material-icons mr-5"> weekend </span>
                <p>
                  {{ specification.number }}
                  {{ specification.specification.name }}
                </p>
              </span>

              <span
                class="info_card"
                v-for="specification in propertyDetails.other_specifications"
                :key="specification.id"
              >
                <p class="d-flex">
                  <!-- <span class="material-icons mr-5"> weekend </span> -->
                  {{ specification.number }}
                  {{ specification.name }}
                </p>
              </span>
            </div>

            <div class="property_description mt-20">
              <h4>Description</h4>
              <p>
                {{ propertyDetails.listing_detail.description }}
              </p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6">
          <div class="info_side_card">
            <el-card shadow="hover" class="p-10">
              <div style="height: 200px">
                <p>Rent</p>
                <p class="mt-5 amout">
                  <b style="font-size: 24px; line-height: 28px"
                    >${{ propertyDetails.listing_detail.price }}.00</b
                  >/ month
                </p>
                <div class="d-flex mt-20">
                  <img
                    :src="src + propertyDetails.lister.avatar"
                    class="agent_avatar"
                  />
                  <div class="ml-20">
                    <p>
                      <b
                        >{{ propertyDetails.lister.first_name }}
                        {{ propertyDetails.lister.last_name }}</b
                      >
                    </p>
                    <p style="font-size: 13px; color: #64748b">
                      Independent agent
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <el-button type="primary" style="width: 100%" @click="showOwner"
                  ><p class="d-flex justify_between">
                    Send a message<span class="material-icons">
                      arrow_forward
                    </span>
                  </p></el-button
                >
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>

      <div class="amenities pb-20">
        <hr class="hr_rule" />
        <div class="amenities_content">
          <h4 class="mt-20">Amenities</h4>
          <ul
            class="amenites_list"
            v-for="amenity in propertyDetails.amenities"
            :key="amenity.amenity.name"
          >
            <li>{{ amenity.amenity.name }}</li>
          </ul>
        </div>
      </div>

      <div>
        <hr class="hr_rule" />
        <h4 class="mt-20">Similar properties</h4>

        <div class="pt-20">
          <SimilarProperties />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ApplicationHandler from '@/handlers/ApplicationHandler.vue';

export default Vue.extend({
  name: 'PropertyDetails',
  components: {
    ApplicationHandler,
  },
  data() {
    return {
      src: 'http://localhost:8000/',
      activeName: 'first' as string,
      image: '' as any,
      propertyDetails: {} as any,
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
      user: '',
    };
  },
  created() {
    this.propertyDetails = this.$route.params.property;
    console.log(this.propertyDetails);
  },
  computed: {
    hasMorePhotos() {
      return (
        this.$route.params.property.listing_detail.listing_images.length > 1
      );
    },
  },
  methods: {
    handleClick(tab: string, event: object) {
      console.log(tab, event);
    },
    prevImage(image: any) {
      this.image = image;
    },
    //  lastUpdate (date:any) {
    //     return moment(date).format("MMMM Do YYYY");
    //   },
    showOwner(): void {
      console.log('show');
      (this as any).$refs.propertyAction.showOwnerModal(this.user);
    },
  },
});
</script>

<style lang="scss" scoped>
$medium_screen: 768px;
$small_screen: 426px;

.arrow_back {
  width: 40px;
  padding-top: 5px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  color: rgba(203, 213, 225, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}
.details_plot {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 13px;
  }
  .material-icons {
    font-size: 18px;
  }
}
.carousel_image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.thumbnail {
  width: 100%;
  height: 200px;

  ._image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.info_card {
  background: #f8fafc;
  padding: 5px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin: 0 10px;
  display: flex;

  p {
    font-size: 13px;
  }
  .material-icons {
    font-size: 22px;
    color: grey;
  }
}
.amenities {
  padding-top: 20px;

  .amenites_list {
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;

    max-width: 500px;

    li {
      list-style: none;
      padding-bottom: 20px;
      font-size: 14px;
      line-height: 20px;
      margin-left: 15px;

      &::before {
        content: '\2022';
        color: red;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }
}
.property_description {
  p {
    font-size: 14px;
    margin-top: 10px;
  }
}

.info_side_card {
  width: 100%;

  @media (max-width: $small_screen) {
    margin-top: 40px;
  }

  .agent_avatar {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }
}
</style>
