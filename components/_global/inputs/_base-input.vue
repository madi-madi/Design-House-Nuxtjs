<template>
  <div>
    <input
      :autocomplete="autocomplete"
      :type="inputType"
      :value="value"
      :readonly="readonly"
      :placeholder="placeholder"
      :class="[{ 'is-invalid ': form.errors.has(field) }, customClass]"
      @input="handleInput"
    />
    <has-error :form="form" :field="field"></has-error>
  </div>
</template>

<script>
export default {
  props: {
    form: {type: Object,required: true},
    field: {type: String,required: true},
    value: {type: String,default: ''},
    placeholder: {type: String,default: ''},
    customClass: {type: String,default: ''},
    inputType: {type: String,default: 'text'},
    readonly: {type: Boolean,default: false},
    autocomplete: {type: Boolean,default: false}
  },

  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    }
  },

  mounted() {
    //console.log(this.$attrs);
  }
};
</script>

<style></style>