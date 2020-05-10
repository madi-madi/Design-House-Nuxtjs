import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCSCmTpjsznfbYTsfn_MzoaQD2or8uu2vo',
    libraries: 'places'
  }
});