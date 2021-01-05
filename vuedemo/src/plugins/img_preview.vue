<template>
  <div>
    <div class="main_layer">
      <img v-for="img in images" :src="img" class="img" @click="imgClick(img)">
    </div>
    <div class="preview_layer" v-show="is_show" @click="divClick">
      <img :src="to_preview_img" class="current_view_img"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "img_preview",

    data() {
      return {
        is_show: false,
        to_preview_img: '',
        images: [
          // 'https://sufengsky.github.io/learn/css/1.jpg',
          // 'https://sufengsky.github.io/learn/css/2.jpg',
          // 'https://sufengsky.github.io/learn/css/3.jpg',
          // 'https://sufengsky.github.io/learn/css/4.jpg',
        ]
      }
    },
    methods: {
      imgClick(img_url) {
        this.to_preview_img = img_url
        this.is_show = true
      },
      divClick() {
        this.is_show = false
      }
    },
  }
</script>

<style scoped>
  .main_layer {
    z-index: 1;
  }

  .img {
    width: 50%;
    height: 100px;
  }

  .preview_layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    z-index: 10;
    background-color: #191919;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .current_view_img {
    width: 100%;
  }
</style>
