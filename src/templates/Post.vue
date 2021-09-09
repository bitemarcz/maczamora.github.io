<template>
  <Layout class="page-bk">
    <b-container class="main-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="9">
          <div class="post-title">
            <h1 class="post-title__text">
              {{ $page.post.title }}
            </h1>

            <PostMeta :post="$page.post" />
          </div>

          <div class="post content-box">
            <div class="post__header">
              <g-image
                alt="Cover image" v-if="$page.post.thumbnail" :src="$page.post.thumbnail"/>
            </div>

            <div class="post__content" v-html="$page.post.content" />

            <div class="post__footer">
              <PostTags :post="$page.post" />
            </div>
          </div>

          <div class="post-comments">
            <!-- Add comment widgets here -->
          </div>

          <Author class="post-author" />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";
export default {
  components: {
    PostMeta,
    PostTags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.excerpt,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    excerpt
    content
    thumbnail (width: 860, blur: 10)
    tags {
      id
      path
    }
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
  background-color: white;
  color: #2B2129;
}
.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
.post-comments {
  padding: calc(var(--space) / 2);
  &:empty {
    display: none;
  }
}
.post-author {
  margin-top: calc(var(--space) / 2);
}

.main{
    background-color: #2475f0;
}
</style>