<template>
<body class="services-page">
  <header-layout>
  </header-layout>
  <div class="services">
  <b-container class="top-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10"><!--<h1>Meet the Team!</h1>--><b-jumbotron header="Services" lead="Checkout out our services, More to come"></b-jumbotron></b-col>
        <b-col></b-col>
      </b-row>
  </b-container>
  <b-container class="main-container">
  <div class="service-types">
    <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col>
            <div class="service">
            <b-card
                title="SW Factory as a Service"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2">
              <g-image src="~/box.svg" width="150" height="150" position="center"/>
              <b-card-text class="info-card">We take the work out of designing and implementing a customized software factory for your product delivery.</b-card-text>
            </b-card>
          </div>
          </b-col>
          <b-col >
            <div class="service">
              <b-card
                title="Software and App Security"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2">
              <g-image src="~/shield-lock-fill.svg" width="150" height="150" position="center"/>
              <b-card-text class="info-card">Let's build Cybersecurity into your SDLC and analyze gaps or holes you have in your applications. </b-card-text>
            </b-card>
          </div>
          </b-col>
          <b-col >
            <div class="service">
            <b-card
                title="DevSecOps"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2">
              <g-image src="~/globe2.svg"  width="150" height="150" position="center"/>
              <b-card-text class="info-card">We build customized software engineering services using Kubernetes (K8s) in order to drive delivery for your customers.</b-card-text>
            </b-card>
          </div>
          </b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
          <!-- <h4 class="career">Career Background</h4> -->
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
      </b-row>
  </div>
</b-container>
    </div>
    <footer-layout></footer-layout>
  </body>
</template>

<script>
export default {
  metaInfo: {
    title: 'Services'
  }
}
</script>


<style>

.services-page {
  background-color: #2475f0;
  color: #FFFFFF;
}

.jumbotron { 
  text-align: center;
  background-color: #BE27CF; 
}

.service {
  color: #BE27CF;
}

.info-card {
  margin: 50px 5px 5px 5px;
}

g-image {
  margin: 50px 5px 5px 5px;
}
</style>