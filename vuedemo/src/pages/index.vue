<template>
<div>
    <h1>路由列表：</h1>
    <div style="line-height:20px;">
     <p class="item"><router-link to="/demo/index">父子组件数据传递</router-link><br/></p>
     <p class="item"><router-link to="/test">test</router-link><br/></p>
    </div>
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
.item{
  border:1px solid #ccc;
  padding:10px;
}
</style>
