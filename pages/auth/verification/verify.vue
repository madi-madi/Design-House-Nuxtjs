<template>
            <!-- Section Cards -->
            <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Email Verification  
                    </h1>
                    <form class="auth-form">
                        
                        
                        <div class="form-group" v-if="status">
                            <div class="alert alert-success" >
                                {{ message }}
                            </div>
                        <nuxt-link :to="{name:'login'}">Proceed to Login</nuxt-link>

                        </div>
                        <div class="form-group" v-else>
                            <div class="alert alert-danger">
                                  {{ message }}
                            </div>
                            <a href="#">Resend verification link</a>
                        </div>
                    </form>
                </div>
            </section>
            <!-- End Section Cards -->
</template>

<script>
export default {
 middleware:['guest'],
 async asyncData({params,query,app}){
    const q = await Object.keys(query)
    .map(k => `${k}=${query[k]}`)
    .join('&');
    try {
      const {data} = await app.$axios.post(`/verification/verify/${params.id}?${q}`)
      console.log(data);
      return {status:true,message:data.status.message}
    } catch (error) {
      console.log(error);

      return {status:true,message:error.response.data.errors.message}
      
    }
  }
}
</script>

<style>

</style>