<template>
  <div id="demo">
        <p :style="{borderBottom:flag?'1px solid red':'',color: flag? 'red':'green'}">测试文件</p>
  </div>
</template>

<script>

export default {
  name: 'calendar_test',
  data () {
    return {
       flag:true
    }
  },  
  methods:{

  },
  mounted(){
    
  }
}
</script>

<style scoped>

</style>
