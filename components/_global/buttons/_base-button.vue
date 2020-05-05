<template>
<button
:disabled="loading"
:type="nativeType"
class="btn"
:class="{
[`btn-${type}`]:true,
[`btn-${size}`]:true,
['btn-block']:block

}"
>
<span v-if="loading">
<i class="fas fa-spinner fa-spin"></i>
</span>
       <slot/>             
</button>
</template>

<script>
export default {
name:'base-button',
props:{
   type:{type:String ,default:'primary'},
   size:{type:String ,default:'md'},
   nativeType:{type:String,default:'submit'},
   loading:{type:Boolean,default:false},
   block:{type:Boolean,default:false},
}
}
</script>

<style>

</style>