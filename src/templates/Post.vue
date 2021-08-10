<template>
<div>
<header-layout></header-layout>
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
