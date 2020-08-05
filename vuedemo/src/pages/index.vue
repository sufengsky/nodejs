<template>
<div>
    <h1>路由列表：</h1>
     <router-link to="/demo/index">父子组件数据传递</router-link><br/>
</div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
       
    }
  },  
  methods:{

  },
  mounted(){
    console.log("test");
  }
}
</script>

<style scoped>

</style>
