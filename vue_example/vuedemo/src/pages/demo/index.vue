<template>
<div>
    <div v-show="mainShow">
    用户姓名: {{userInfo.name}}<br/>
    <input type="button" value="获取用户姓名" @click="btnShowUserInfo"/>
    </div>

    <user-info :display="isShowUserInfo" @submit="getUserInfo"></user-info>
</div>
</template>

<script>
import demo_userinfo from './components/userInfo';
export default {
  name: 'demo_index',
  components:{
      userInfo:demo_userinfo
  },
  data () {
    return {
       mainShow:true,
       isShowUserInfo:false,
       
       userInfo:{
           name:"",
       }
    }
  },  
  methods:{
    btnShowUserInfo(){
        this.mainShow=false;
        this.isShowUserInfo=true;        
    },
    getUserInfo(userInfo){
        this.isShowUserInfo=false;
        this.mainShow=true;
        this.userInfo.name=userInfo.name;
    }
  },
  mounted(){

  }
}
</script>

<style scoped>

</style>
