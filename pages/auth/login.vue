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
                        <nuxt-link :to="{name:'verificationResend'}">Resend email</nuxt-link>

                        </alert-error>
                        <div class="form-group">
                            <input
                                type="text"
                                v-model="form.email"
                                name="email"
                                class="form-control form-control-lg font-14 fw-300"
                                :class="{ 'is-invalid': form.errors.has('email') }"
                                placeholder="Email"
                            />
                            <has-error :form="form" field="email"></has-error>
                        </div>
                        <div class="form-group">
                            <input
                                v-model="form.password"
                                type="password"
                                name="password"
                                class="form-control form-control-lg font-14 fw-300"
                                :class="{ 'is-invalid': form.errors.has('password') }"
                                placeholder="Password"
                            />
                            <has-error :form="form" field="password"></has-error>
                        </div>
                        <div class="mt-4 mb-4 clearfix">
                            <a class="forgot-pass color-blue font-14 fw-400" href="#"> Forgot password? </a>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
                                Login
                            </button>
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