<template>
  <md-card-content>
    <vue-disqus
      :shortname="shortname"
      :identifier="disqusId"
      :url="url">
    </vue-disqus>
  </md-card-content>
</template>

<script>
  import VueDisqus from 'vue-disqus/VueDisqus.vue';

  export default {
    name: 'post-comment',
    components: {
      VueDisqus
    },
    props: {
      shortname: String
    },
    computed: {
      url: function() {
        return location.protocol + '//' + location.hostname + this.$route.path;
      },
      disqusId: function() {
        return this.$route.path.replace(/\//g, '-');
      }
    }
  };
</script>

<style scoped>

</style>
