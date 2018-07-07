<template>
    <div id="content">
    <!-- Page Title -->
    <div class="page-title bg-dark dark">
        <div class="bg-image" style='background-image: url("/static/img/coaching_bg02.873889f.jpg";'><img src="../assets/img/photos/coaching_bg02.jpg"  alt=""></div>
        <div class="container-fluid container-custom">
            <h1>404</h1>
            <p class="lead text-muted">Page Not Found</p>
        </div>
    </div>
    <!-- Section / About -->
    <section id="about" class="section">

        <div class="container container-sm">

          
           <center> <h1>Oops!!</h1></center>
            <center>  <h4>We Cant find the page your are looking  for</h4></center>
           
            
        </div>
    </section>

</div>
</template>
<script>
export default {
  name: "AboutUs",
  data() {
    return {};
  },
  mounted: function() {
    Skill.Basic.animations();
    window.scrollTo(0,0)
    $("#img_left").addClass("bounceInDown visible");
    $("#img_right").addClass("slideInRight visible");
    $(".icnActive").removeClass("icnActive");
    $("#icn_about").addClass("icnActive");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#img_left {
  -webkit-animation-duration: 0.8s;
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
}

#img_right {
  -webkit-animation-duration: 0.8s;
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
}

@media (min-width: 1281px) and (max-width: 1400px) {
  #img_left,
  #img_right {
    width: 280px;
  }
  h4 {
    font-size: 1.2rem;
  }
  #about p {
    font-size: 0.92rem;
  }
}
</style>
