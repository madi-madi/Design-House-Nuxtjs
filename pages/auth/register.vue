<template>
            <!-- Section Cards -->
            <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Register
                    </h1>
                    <form class="auth-form" @submit.prevent="submit" autocomplete="on">
                        <alert-success :form="form"> Done </alert-success>
                        <div class="form-group">
                        <base-input 
                        :form="form"
                        customClass="fares form-control form-control-lg font-14 fw-300"
                        field="name"
                        inputType="text"
                        v-model="form.name"
                        placeholder="name"
                        ></base-input>

                        </div>
                        <div class="form-group">
                        <base-input 
                        :form="form"
                        customClass="fares form-control form-control-lg font-14 fw-300"
                        field="username"
                        inputType="text"
                        v-model="form.username"
                        placeholder="username"
                        ></base-input>
                        </div>
                        <div class="form-group">
                        <base-input 
                        :form="form"
                        customClass="fares form-control form-control-lg font-14 fw-300"
                        field="email"
                        inputType="email"
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
                        <div class="form-group">
                        <base-input 
                        :form="form"
                        customClass="fares form-control form-control-lg font-14 fw-300"
                        field="password_confirmation"
                        inputType="password"
                        v-model="form.password_confirmation"
                        placeholder="Password Confirmation"
                        ></base-input>
                        </div>
                        
                        <div class="text-right">
                            <base-button 
                            :loading="form.busy"
                            >
                            Register
                            </base-button>
                            <!-- <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
                                <span v-if="form.busy">
                                <i class="fas fa-spinner fa-spin"></i>
                                </span>
                                Register
                            </button> -->
                        </div>
                        <p class="font-14 fw-400 text-center mt-4">
                            Already have an account?
                            <!-- <a class="color-blue" href="#"> Login</a> -->
                        <nuxt-link :to="{name:'login'}">Login</nuxt-link>

                        </p>
                    </form>
                </div>
            </section>
            <!-- End Cards -->
</template>

<script>
export default {
middleware:['guest'],
data(){
    return {
        form:this.$vform({
            username:'',
            name:'',
            email:'',
            password:'',
            password_confirmation:'',
        })
    }
},
methods:{

    submit(){
        this.form.post('/register')
        .then(res=>{
            this.form.reset();
            console.log(res);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}
}
</script>

<style>

</style>