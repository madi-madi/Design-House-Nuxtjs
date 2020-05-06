<template>
  <div>
            <!-- Start Hero -->
            <section class="hero text-center bg-secondary text-white">
                <div class="container">
                    <h1 class="font-28 fw-600 text-uppercase">
                        Upload a design
                    </h1>
                </div>
            </section>
            <!-- End Hero -->

            <!-- Upload Shot -->
            <div class="upload-shot">
                <div class="container">
                    <div
                        class="row justify-content-center align-items-center text-center"
                    >
                        <div class="col-md-6">
                           <div class="car bg-white shadow-sm">
                               <div class="d-flex flex-column justify-content-center p1">
                                        <div class="alert alert-danger" role="alert" v-if="errors">
                                             <p> An error occurred during the upload proccess</p>
                                             <p> {{ errors }}</p>
                                        </div>
                                        <slim-cropper :options="slimOptions">
                                         <input type="file" name="image">
                                        </slim-cropper>
                                        <div class="text-success caption-sm m2" v-if="uploading">
                                            <i class="fas fa-spinner fa-spin"></i>
                                        </div>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Upload Shot -->
  </div>
</template>

<script>
import Slim from '@/components/slim/slim.vue';
export default {
middleware:['auth'],
components:{
'slim-cropper':Slim
},
data(){
  return {
    slimOptions:{
      service:this.slimService,
      post:'output',
      defaultInputName:'image',
      minSize:'800,600',
      lable:'Select Image ',
      maxFileSize: 2 ,// 2mb
    },
    uploading:false,
    errors:'',
  }
},
methods:{
 slimService(formdata,progress,success, failure,slim){
     this.uploading = true,
     this.$axios.post('/designs',formdata)
     .then(res=>{
        console.log(res);
        this.$router.push({
           name:'designs.edit',
           params:{id:res.data.item.id}
        });
     })
     .catch(error =>{
        console.log(error.response.data.errors.image[0]);
        this.errors =error.response.data.errors.image[0];
        failure(500);
     })
     .finally(()=>this.uploading = false)

 }
}
}
</script>

<style>

</style>