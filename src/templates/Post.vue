<template>
  <Layout>
    <article>
      <header>
      <h2>{{$page.post.title}}</h2>
      <!-- <p>Published on {{$page.post.date}}</p> -->

      <p><i>{{$page.post.timeToRead}}min to read</i></p>
      </header>

      <main class="content" v-html="$page.post.content"></main>
    </article>
  </Layout>
</template>

<style>
article > header {
  text-align: center;
}

.content {
  margin-top: 48px;
}
</style>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    timeToRead
    content
  }
}
</page-query>