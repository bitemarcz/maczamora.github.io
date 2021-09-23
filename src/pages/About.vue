<template>
<body class="about-page">
<header-layout>
</header-layout>
<div class="about">
  <b-container class="top-container">
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10"><!--<h1>Meet the Team!</h1>--><b-jumbotron header="About Us" lead="Meet the researchers at Counter-Comms"></b-jumbotron></b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
  </b-container>
<b-container class="main-container">
      <b-row class="pb-5 pt-5">
        <!-- <h4 class="career">Career Background</h4> -->
        <b-col></b-col>
        <b-col cols="10">
          <h1 class="heading">What is Counter Comms?</h1>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">
          Counter-Comms is a brand that goes beyond the conversations. We think in terms of countermeasures rather than solutions. We believe it's the ideas and creativity that will take us to our destination. 
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">
            With the most recent ransomware events, black hat hackers are gaining speed and traction in supply chain attacks. They won't stop at anything to get what they want. From nation-states to script kiddies and scammers, there is no slowing down for the enemy. Even some of the most robust enterprises can't keep up with company-wide demand and protection, so they need to distribute protective mechanisms and education for their employees to protect themselves. You may ask yourself, when will it end? What more can I do? How do I protect my assets? That's where the Counter-Comms Blog comes in.
        </b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">
            We are building a world-class team of researchers, both new and experienced, to share their passion and education for Software, Hacking, Privacy, DevSecOps, and National Defense. Counter-Comms hopes to expand the team as growth continues.           
            <!-- <form action="/contact"><input type="submit" value="Get in Contact" /></form> -->
        </b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">
          <h1 class="heading">The Brand</h1>
        </b-col>
        <b-col></b-col> 
      </b-row>
      <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">
          <g-image class="brand" src="~/Capshure-Sec-v1.6.png" alt="Responsive Logo"/>
        </b-col>
        <b-col></b-col> 
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">
          The Counter-Comms logo represents the entire lifecycle of Cybersecurity. The red color represents offense, and the blue color represents defense. The white squares represent a keyboard and ethics that an ethical hacker must uphold. We like to call these sophisticated minds white-hat hackers. The gold represents the amount of revenue in circulation around this industry. The Counter-Comms logo was built with the idea to have a recognized identity within the open source community and the broader world at large.
        </b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col cols="10">
        </b-col>
        <b-col></b-col>
      </b-row>
       <b-row class="pb-5 pt-5">
        <b-col></b-col>
        <b-col >
          <div class="info-person-1">
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="pt-5">
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
</div>
<footer-layout></footer-layout>
</body>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
  },
    data() {
      return {
        imageProps: {}
      }
    }
  };
</script>

<style>

.about {
  background-color: #2475f0;
  color: white;
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