<template>
    <div id="content">
    <!-- Page Title -->
    <div class="page-title bg-dark dark">
        <div class="bg-image" style='background-image: url("/static/img/coaching_bg02.873889f.jpg";'><img src="../assets/img/photos/coaching_bg02.jpg"  alt=""></div>
        <div class="container-fluid container-custom">
            <h1>About Us</h1>
            <p class="lead text-muted">Some Informations About Our Business</p>
        </div>
    </div>
    <!-- Section / About -->
    <section id="about" class="section">

        <div class="container container-sm">

            <!-- BG Side -->
            <div class="bg-side bg-left">
                <img src="../assets/img/items/coffee.png"  id='img_left' class="animated"   alt="">
            </div>
            <!-- BG Side -->
            <div class="bg-side bg-right">
                    <img src="../assets/img/items/camera.png"   id='img_right' class="animated">
            </div>
            <h4>Who we are?</h4>
            <!-- <p class="lead">JNKSOLUTIONS IS A CUSTOM SOFTWARE DEVELOPMENT COMPANY BASED ON CALICUT </p> -->
            <p>Jnksolutions is a web development company based on Calicut,At Jnksolutions we build high performance scalable web apps and mobile apps, we also provide a unique rental website program which allow customers to 
                create an online identity with minimum effort and reasonable price . Every member of Jnksolutions are in love with technologies , we love coding , we love making apps 
                and we also love to share our knowledge ,so we also provide tech talks and  free tutorial via YouTube .  </p>
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
