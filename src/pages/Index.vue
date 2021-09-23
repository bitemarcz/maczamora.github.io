<template>
  <div class="index">
    <header-layout>
    </header-layout>
    <div class="jumbotron">
      <b-jumbotron header="Counter Comms" lead="We focus on the countermeasures.">
        <hr>
        <p>
          For more information or if you would like to contact us, please submit a request from the contact page. Please feel free to explore our Blog for news and information. 
        </p>
      </b-jumbotron>
    </div>
    <b-container fluid class="embed">
      <div class=video>
          <b-embed
            type="video"
            src="pexels-mikhail-nilov-7534239.mp4"
            allowfullscreen
            allow=autoplay 
            autoplay=1
            autopause=0
            muted=true
            loop=1
          ></b-embed>
        </div>
    </b-container>
    <b-container class="main-container">
      <b-row class="pb-4 pt-4">
        <b-col></b-col>
        <b-col cols="10">Welcome! Thank you for visiting the Counter Comms Blog. As you begin your journey with our technology brand, we hope you find your time valuable.</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-4 pt-4">
        <b-col></b-col>
        <b-col cols="10">Our Mission, provide engaging technology news and information while increasing the awareness of the software industry through research and development.</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-4 pt-4">
        <b-col></b-col>
        <b-col cols="10">If you would like to contact us or open up a discussion, please submit a contact form.</b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10"></b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-1 pt-5">
        <b-col></b-col>
        <!-- <b-col cols="12"><b-img-lazy v-bind="imageProps" rounded src="safar-safarov-LKsHwgzyk7c-unsplash.jpg" fluid alt="Responsive image"></b-img-lazy></b-col> -->
        <b-col></b-col>
      </b-row>
    </b-container>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
    data() {
      return {
        imageProps: {}
      }
    }
  };
</script>

<style>
.index {
  background-color: #2475f0;
  color: #FFFFFF;
}

.jumbotron { 
  text-align: center;
  background-color: #BE27CF; 
  color: #FFFFFF;
  margin-bottom: 0;
}

.embed {
  width: 100%;
  padding: 0;
}

.video {
  width: 100%;
  padding: 0;

}

</style>
