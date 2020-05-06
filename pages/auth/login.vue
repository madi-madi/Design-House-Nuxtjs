<template>
              <!-- Section Cards -->
            <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Login
                    </h1>
                    <form class="auth-form" action="" method="" @submit.prevent="submit">
                        <alert-error :form="form" v-if="form.errors.has('verification')">
                            {{ form.errors.get('verification') }}
                        <nuxt-link :to="{name:'verification.resend'}">Resend email</nuxt-link>

                        </alert-error>
                        <div class="form-group">
                        <base-input 
                        :form="form"
                        readonly="true"
                        customClass="fares form-control form-control-lg font-14 fw-300"
                        field="email"
                        v-model="form.email"
                        placeholder="Email"
                        ></base-input>
                        </div>
                        <div class="form-group">
                        <base-input 
                        :form="form"
                        customClass="fares form-control form-control-lg font-14 fw-300"
                        field="password"
                        inputType="password"
                        v-model="form.password"
                        placeholder="Password"
                        ></base-input>
                        </div>
                        <div class="mt-4 mb-4 clearfix">
                            <nuxt-link class="forgot-pass color-blue font-14 fw-400"
                             :to="{name:'password.email'}"
                             > 
                                Forgot password? </nuxt-link>
                        </div>
                        <div class="text-right">
                            <base-button 
                            :loading="form.busy"

                            >
                            Login
                            </base-button>
                            <!-- <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
                                <span v-if="form.busy">
                                <i class="fas fa-spinner fa-spin"></i>
                                </span>
                                Login
                            </button> -->
                        </div>
                        <p class="font-14 fw-400 text-center mt-4">
                            Don't have an account yet?
                            <!-- <a class="color-blue" href="#"> Create an account</a> -->
                        <nuxt-link :to="{name:'register'}">Create an account</nuxt-link>

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
            password:'',
        })
    }
},
methods:{

    submit(){
        this.$auth.loginWith('local',{
            data:this.form
        })
        .then(res=>{
            this.form.reset();
            console.log(res);
        })
        .catch(error=>{
            console.log(error.response.data.errors);
            this.form.errors.set(error.response.data.errors)
        })
    }
}
}
</script>

<style>

</style>