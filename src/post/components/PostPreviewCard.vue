<template>
  <router-link :to="index.link" tag="section" class="post-preview-card">
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <span class="md-title">
            {{index.title}}
          </span>
          <div class="md-subhead">{{index.created}}</div>
        </md-card-header>

        <md-card-content>
          {{index.summary}}
        </md-card-content>

        <md-card-actions>
          <md-button>
            <span class="md-subhead">{{index.category}}</span>
          </md-button>
          <md-button>
            <router-link tag="span" :to="index.link">{{$t('post.preview.more')}}</router-link>
          </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </router-link>
</template>

<script>
  export default {
    name: 'post-preview-card',
    props: {
      index: Object
    }
  };
</script>

<style scoped>
  .post-preview-card {
    max-width: 1084px;
    margin: 4px;
  }

  .md-card {
    margin: 0;
  }
</style>
