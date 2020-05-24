<template>
  <div class="hello">
    hello
  </div>
</template>

<script>
import pdfToBase64 from "pdf-to-base64"
let $=require("jquery")
export default {
  name: 'HelloWorld',
  data () {
    return {
       
    }
  },  
  methods:{
        //传入图片路径，返回base64
    getBase64(img){
        function getBase64Image(img,width,height) {//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
          var canvas = document.createElement("canvas");
          canvas.width = width ? width : img.width;
          canvas.height = height ? height : img.height;
 
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          var dataURL = canvas.toDataURL();
          return dataURL;
        }
        var image = new Image();
        image.crossOrigin = '';
        image.src = img;
        var deferred=$.Deferred();
        if(img){
          image.onload =function (){
            deferred.resolve(getBase64Image(image));//将base64传给done上传处理
          }
          return deferred.promise();//问题要让onload完成后再return sessionStorage['imgTest']
        }
      }
  },
  mounted(){
    //pdfToBase64("http://192.168.240.48:8000/group1/M00/0B/B7/wKjwMV6_T7OAVFBbAAIedywHnKM708.pdf?token=9f84f3283e16f96523836da4bb67e617&ts=1589617517")
    //pdfToBase64("http://p1.pstatp.com/large/435d000085555bd8de10")
    //pdfToBase64("http://119.57.117.216:8000/group1/M00/0B/BD/wKjwMV7CTv-AC5pfAAAkbFYZX4M148.jpg?token=a66fa23a671d0c443bae27aeaadd1b1c&ts=1589792511")
    pdfToBase64("http://192.168.240.48:8000/group1/M00/0B/BD/wKjwMV7CUGeAF05mAAAkbCSTJmY693.jpg?token=7fc326325861cb760e134d5a88d4ac5e&ts=1589792871")
    .then(
        (response) => {
          console.log("test")
            console.log(response); 
        }
    )
    .catch(
        (error) => {
            console.log(error);  
        }
    )

//  //这是网上的一张图片链接
//     　　 //var url="http://p1.pstatp.com/large/435d000085555bd8de10";
//     var url="http://192.168.240.48:8000/group1/M00/0B/B7/wKjwMV6_T7SAUfvXAAIo8ygw1Xc693.png?token=0c95ca228e588e976a890fe0baf34445&ts=1589621977"
//         this.getBase64(url)
//             .then(function(base64){
//                   console.log(base64);//处理成功打印在控制台
//             },function(err){
//                   console.log(err);//打印异常信息
//             });       

  }
}
</script>

<style scoped>

</style>
