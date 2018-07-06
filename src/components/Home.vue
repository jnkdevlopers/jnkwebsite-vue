<template>
   <div id="content">
    <!-- Section / Home -->
    <section id="home" class="section cover text-xs-center">
        <div class="container container-sm fullheight">
            <!-- BG Side -->
            <div class="bg-side bg-left">
                <img src="../assets/img/items/docs.png" alt=""  id='img_left' class="animated"  >
            </div>
            <!-- BG Side -->
            <div class="bg-side bg-right">
                <img src="../assets/img/items/ipad.png" alt=""  @click="animateimg" id='img_top' class="animated">
                <img   src="../assets/img/items/plant2.png" alt=""  id='img_right'   class="animated"   >
            </div>
            <!-- Content -->
            <div class="v-center pt-90 pb-90">
                <h1 class="display-3  ">Lets Make It Awesome!</h1>
                <p class="lead">Web Development | Android Development | Tutorials <br> Games | Computer Assembling | Tech Talks <br>Online Support</p>
                <div class="btn-group" data-local-scroll>
                  <router-link to="/aboutus" class="btn btn-primary btn-lg">About us</router-link>
                  <router-link to="/services" class="btn btn-secondary btn-lg">Our services</router-link>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
  name: "Welcome",
  data() {
    return {};
  },
  mounted: function() {
    Skill.Basic.animations();
    window.scrollTo(0, 0);
    $("#img_left").addClass("slideInLeft visible");
    $("#img_right").addClass("slideInUp visible");
    $("#img_top").addClass("bounceInDown visible");
    $(".icnActive").removeClass("icnActive");
    $("#icn_home").addClass("icnActive");
  },
  methods: {
    animateimg: function() {
      $("#img_top").removeClass("bounceInDown");
      $("#img_top").addClass("jello");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#img_left {
  -webkit-animation-duration: 0.3s;
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
}

#img_right {
  -webkit-animation-duration: 0.3s;
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
}
#img_top {
  -webkit-animation-duration: 0.5s;
  -webkit-animation-delay: 1.2s;
  -moz-animation-delay: 1.2s;
}

@media (min-width: 1281px) and (max-width: 1400px) {
  #img_left {
    width: 290px;
    left: 12%;
  }
  #img_top {
    width: 330px;
    height: 350px;
    margin-right: 19%;
  }
  #img_right {
    width: 280px;
    height: 300px;
    margin-right: 27%;
  }
  .display-3 {
    font-size: 2.6rem;
  }
  .lead {
    font-size: 1.25rem;
  }
  .btn {
    width: 116.5px;
    height: 51.38px;
    padding: 1.3rem 1.2rem;
  }
}
</style>
