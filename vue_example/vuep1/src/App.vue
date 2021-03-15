<template>
  <div id="app">
    {{ title }}
    <router-view @viewIn="changeTitle"></router-view>
    <hello-world>
        <template v-slot:footer>footer</template>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      
      
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "默认标题",
    };
  },
  methods: {
    changeTitle(t) {
      this.title = t;
    },
  },
  mounted() {
    this.$router.push({
      path: "/bus/ca",
      query: {
        param: "abc",
      },
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
