<template>
  <div class="setting-block">
    <div class="setting-title font-16 fw-500">Designs</div>

    <div class="setting-body white-bg-color">
      <table class="table table-striped">
        <thead>
          <tr>
            <td></td>
            <td>Title</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="design in designs" :key="design.id">
            <td>
              <div v-if="design.images">
                <img :src="design.images.thumbnail" width="50" />
              </div>
            </td>
            <td>{{ design.title }}</td>
            <td>{{ design.is_live ? 'Published' : 'Draft' }}</td>
            <td>
                <nuxt-link
                class="btn btn-info"
                :to="{ name: 'designs.show', params: { slug: design.slug } }"
                >
                <i class="fas fa-eye"></i>

                </nuxt-link>
              <nuxt-link
                class="btn btn-success"
                :to="{ name: 'designs.edit', params: { id: design.id } }"
              >
              <i class="fas fa-edit"></i>
                
              </nuxt-link>
              
              <!-- <a href="" class="btn btn-danger"> <i class="fas fa-trash"></i></a> -->
                    
                <base-delete @deleted="handleDelete" type="danger" :id="design.id"   :url="`designs/${design.id}/delete`" ><i class="fas fa-trash"></i></base-delete>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
      designs: []
    };
  },

  methods: {
    async fetchUserDesigns() {
       await this.$axios.$get(
        `/users/${this.$auth.user.id}/designs`
      ).then(res=>{
        console.log(res);
      this.designs = res.item;
      }).catch(err=>{});
    },

        handleDelete(id) {
      this.designs = this.designs.filter(design => design.id !== id);
    },


  },

  created() {
    this.fetchUserDesigns();
  }
};
</script>

<style></style>
