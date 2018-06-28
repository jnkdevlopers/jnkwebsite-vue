<template>
    <div id="content">
    <!-- Page Title -->
    <div class="page-title bg-dark dark">
        <div class="bg-image" style='background-image: url("/static/img/coaching_bg02.873889f.jpg";'><img src="../assets/img/photos/coaching_bg02.jpg"  alt=""></div>
        <div class="container-fluid container-custom">
            <h1>About Us</h1>
            <p class="lead text-muted">Some informations about our business</p>
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
            <p>Jnksolutions is a webdevelopment company based on calicut ,At jnk solution we build high perfomance scalable web apps and mobile apps , we also provide a uique rental website program which allow customers to 
                create an online identity with minimum effort and reasonble price . Every member of jnk solution are in love with technolgies , we love coding , we love making apps 
                and we also love to share our knowlege ,so we also provide tech talks and  free tutorial via youtube .  </p>
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
</style>
