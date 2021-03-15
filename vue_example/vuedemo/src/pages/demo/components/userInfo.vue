<template>
<div >
    <div v-show="display">
        请输入用户信息:<br/>
        用户名:<input type="text" placeholder="请输入用户名" v-model="uinfo.name"/><br/>
        <input type="button" value="提交"  @click="btnSubmitUserInfo"/>
    </div>
</div>
</template>

<script>

export default {
  name: 'demo_userinfo',
  props:{
    display:Boolean,
    submit:Function,
  },
  data () {
    return {
       uinfo:{
           name:"",
       }
    }
  },  
  methods:{
    btnSubmitUserInfo(){
        this.$emit("submit",this.uinfo)
    }
  },
  mounted(){

  }
}
</script>

<style scoped>

</style>
