<template>
  <Layout :title="this.$route.params.id">
    <div class="container">
      <main>
        <h1>All {{ $route.params.id }} posts</h1>
        <article v-for="post in posts" :key="post.id">
          <h2>{{post.title}}</h2>
          <div v-html="post.content"/>
        </article>
      </main>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$route.params.id
    };
  },
  computed: {
    posts() {
      return this.$page.tag.belongsTo.edges.map(e => e.node);
    }
  }
};
</script>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
            id
        }
      }
    }
  }
}
</page-query>