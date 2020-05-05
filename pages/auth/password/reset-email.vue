<template>
              <!-- Section Cards -->
            <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Reset Password
                    </h1>
                    <form class="auth-form" action="" method="" @submit.prevent="submit">
                        <alert-success :form="form" v-if="form.message">
                                {{ form.message }}
                        </alert-success>
                        <div class="form-group">

                        <base-input 
                        :form="form"
                        customClass="fares form-control form-control-lg font-14 fw-300"
                        field="email"
                        v-model="form.email"
                        placeholder="Email"
                        ></base-input>
                        </div>

                        <div class="mt-4 mb-4 clearfix">
                        <nuxt-link :to="{name:'login'}"
                            class="forgot-pass color-blue font-14 fw-400" 
                        >Back to Login</nuxt-link>
                        </div>
                        <div class="text-right">
                            <base-button 
                            :loading="form.busy"

                            >
                            Send Reset Link
                            </base-button>
                            <!-- <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
                                <span v-if="form.busy">
                                <i class="fas fa-spinner fa-spin"></i>
                                </span>
                                Send Reset Link
                            </button> -->
                        </div>
                        <p class="font-14 fw-400 text-center mt-4">
                            <!-- <a class="color-blue" href="#"> Create an account</a> -->

                        </p>
                    </form>
                </div>
            </section>
            <!-- End Cards -->
</template>

<script>
export default {
data(){
    return {
        form:this.$vform({
            email:'',
        })
    }
},
methods:{

    submit(){
      this.form.post('/password/email')
      .then(response=>{
        this.form.reset();
        this.form.message = response.data.message;
        console.log(this.form);
      })
      .catch(error=>{
console.log(error.response.data.errors);
      })
    }
}
}
</script>

<style>

</style>