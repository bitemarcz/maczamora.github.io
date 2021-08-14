<template>
<div>
<header-layout></header-layout>
    <h1>{{ $page.post.title }}</h1>
    <img :src="$page.post.featuredImage" alt="blog">
    <div v-html="$page.post.content" />
<footer-layout></footer-layout>
</div>  
</template>

<page-query>
query Post ($path: String!) { 
  post: post (path: $path) {
    title 
    content
  }
}
</page-query>

<script>

export default {
    metaInfo() {
    
        return {
            title: this.$page.title
        }
    }
}
</script>
