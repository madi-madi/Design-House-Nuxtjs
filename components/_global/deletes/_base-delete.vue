<template>
                <button 
                 class="btn"
                  :class="[`btn-${type}`,`btn-${size}`,customClass]"
                 @click="showAlert" >
                 <slot/>
                  </button>
</template>

<script>
export default {
  name:'base-delete',
props:{
   id:{type:Number ,required:true},
   url:{type:String ,required:true},
   id:{type:Number ,required:true},
   type:{type:String ,default:'primary'},
   size:{type:String ,default:'md'},
   loading:{type:Boolean,default:false},
   block:{type:Boolean,default:false},
  customClass: {type: String,default: ''},

},
methods:{
        showAlert() {
                  const self = this;
                  this.$swal({
                  title: 'Are You Sure Delete this recores?',
                  // text: 'Change default working day hours can affect on claendar settings  and calculations.',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes',
                  confirmButtonClass: "swal2-confirm btn btn-info m-btn m-btn--custom",
                  cancelButtonClass: "swal2-confirm btn btn-danger m-btn m-btn--custom",
                  cancelButtonText:'No'
                  }).then(function (result) {
                  if (result.value) {
                  self.$axios
                  .delete(self.url)
                  .then(res => self.$emit('deleted', self.id))
                  .catch(e => console.log(e));
                  // self.$emit('deleted', self.id);
                  }
                  }, 
                  function (dismiss) {
                  if (dismiss === "cancel") {
                  this.$swal(
                  "Cancelled",
                  "Canceled Note",
                  "error"
                  )
                  }
                  });

    },
}
}
</script>

<style>

</style>