<template>
<body class="blog-page">
<header-layout></header-layout>
<div class="about">
  <b-container class="top-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10"><!--<h1>Meet the Team!</h1>--><b-jumbotron header="Blog" lead="Get your paper folks"></b-jumbotron></b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col>
          <ul>
            <!-- <li v-for="post in $page.post.edges" :key="post.id">
              <g-link class="postLinks" :to="post.node.path">
                {{post.node.title}}
              </g-link>
            </li> -->
          </ul>
        </b-col>
        <b-col></b-col>
      </b-row>
  </b-container>
<b-container class="main-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">
          <PostCard v-for="edge in $page.post.edges" :key="edge.node.id" :post="edge.node"/>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
</div>
<footer-layout></footer-layout>
</body>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  metaInfo: {
    title: "Blog",
  },

  components: {
    PostCard
  },
    data() {
      return {
        imageProps: {}
      }
    }
  };
</script>

<page-query>
query {
   post: allPost {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        excerpt
        thumbnail (width: 770, height: 380, blur: 10)
        path
        tags
      }
    }
  }
}
</page-query>

<style>

.about {
  background-color: #2475f0;
  color: white;
}

.postLinks {
  color: black;
}

.jumbotron { 
  text-align: center;
  background-color: #BE27CF; 
  color: #FFFFFF;
}

.info-person-1 {
  color: #BE27CF;
}

.heading {
  border-bottom-style: solid;
}

.brand{
  position: center; top: 0px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  display: block; 
  width: 250px;
  height: 250px;

}

input[type=submit] {
  background-color: #7435F2;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  width: 100%;
}

</style>