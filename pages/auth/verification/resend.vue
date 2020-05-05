<template>
            <!-- Section Cards -->
            <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Resend Verification Email
                    </h1>
                    <form class="auth-form" @submit.prevent="submit">
                    <alert-success :form="form" v-if="form.message">
                      {{ form.message }}
                    </alert-success>

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
                        
                        <div class="text-right">
                            <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
                                <span v-if="form.busy">
                                <i class="fas fa-spinner fa-spin"></i>
                                </span>
                                Resend
                            </button>
                        </div>
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
        this.form.post('/verification/resend',{
            data:this.form
        })
        .then(res=>{
            this.form.reset();
            console.log(res.data.status.message);
            console.log(this.form.message = res.data.status.message);
            console.log(this.form);
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