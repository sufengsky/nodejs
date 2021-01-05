<template>
  <div id="app">
    <!--    <router-view/>-->

    <button @click="showImg">预览图片</button>
    <button @click="previewImg">预览图片（插件）</button>
  </div>
</template>

<script>
  import {ImgPreviewer} from "./plugins/imgPreview"

  export default {
    name: 'App',
    methods: {
      showImg() {
        ImgPreviewer.preview("https://sufengsky.github.io/learn/css/2.jpg")
      },
      previewImg() {
        this.$previewImg("https://sufengsky.github.io/learn/css/3.jpg")
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
