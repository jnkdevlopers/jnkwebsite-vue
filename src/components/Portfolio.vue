<template>
  <div id="content">

    <!-- Page Title -->
    <div class="page-title bg-dark dark">
        <div class="bg-image" style='background-image: url("/static/img/bg_portfolio.0f57f7b.jpg");'><img src="../assets/img/photos/bg_portfolio.jpg" alt="" ></div>
        <div class="container-fluid container-custom">
            <h1>Portfolio</h1>
            <p class="lead text-muted">Some Of Our Works</p>
        </div>
    </div>

    <!-- Section / Portfolio -->
    <section id="portfolio" class="section">

        <div class="container-fluid container-custom">
        
           
            <!-- Works List -->
            <div id="works-list" class="row masonry">
                <div class="masonry-sizer col-lg-4 col-sm-6 col-xs-12" style="display:none"></div>
                <div class="masonry-item filter-one col-lg-4 col-sm-6 col-xs-12">
                    <!-- Image Box -->
                    <div class="image-box image-hover" >
                        <div class="image animated" data-animation="bounceInDown"  data-animation-delay="500">
                            <a href="#" ><img src="../assets/img/projects/project01.jpg" alt=""  ></a>
                        </div>
                        <div class="title text-xs-center animated" data-animation="bounceInUp" data-animation-delay="700"  >
                            <a href="#" >
                                <h5 class="mb-0">LOVE LETTER</h5>
                                <p class="text-sm text-muted mb-0">A Innovative fun app to sent anonymous Love Letters</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="masonry-item filter-two col-lg-4 col-sm-6 col-xs-12">
                    <!-- Image Box -->
                    <div class="image-box image-hover">
                        <div class="image animated" data-animation="bounceInDown"  data-animation-delay="500">
                            <a href="#" ><img src="../assets/img/projects/project02.jpg" alt=""></a>
                        </div>
                        <div class="title text-xs-center animated" data-animation="bounceInUp" data-animation-delay="700">
                            <a href="#" >
                                <h5 class="mb-0">MRA ONLINE</h5>
                                <p class="text-sm text-muted mb-0">Official Website of Muthappan Kavu Residence Association</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="masonry-item filter-one col-lg-4 col-sm-6 col-xs-12">
                    <!-- Image Box -->
                    <div class="image-box image-hover">
                        <div class="image animated" data-animation="bounceInDown"  data-animation-delay="500">
                            <a href="#" ><img src="../assets/img/projects/project03.jpg" alt=""></a>
                        </div>
                        <div class="title text-xs-center animated" data-animation="bounceInUp" data-animation-delay="700">
                            <a href="#" >
                                <h5 class="mb-0">SHOPWISE</h5>
                                <p class="text-sm text-muted mb-0">An app design to get latest offer and deals around the city</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="masonry-item filter-three col-lg-4 col-sm-6 col-xs-12">
                    <!-- Image Box -->
                    <div class="image-box image-hover">
                        <div class="image animated" data-animation="bounceInDown"  data-animation-delay="500">
                            <a href="#" ><img src="../assets/img/projects/project04.jpg" alt=""></a>
                        </div>
                        <div class="title text-xs-center animated" data-animation="bounceInUp" data-animation-delay="700">
                            <a href="#" >
                                <h5 class="mb-0">Luttapi</h5>
                                <p class="text-sm text-muted mb-0">A Fun Game</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="masonry-item filter-one col-lg-4 col-sm-6 col-xs-12">
                    <!-- Image Box -->
                    <div class="image-box image-hover">
                        <div class="image animated" data-animation="bounceInDown"  data-animation-delay="500">
                            <a href="#" ><img src="../assets/img/projects/project05.jpg" alt=""></a>
                        </div>
                        <div class="title text-xs-center animated" data-animation="bounceInUp" data-animation-delay="700">
                            <a href="#" >
                                <h5 class="mb-0">LOST</h5>
                                <p class="text-sm text-muted mb-0">An Online Treasure Hunt game  designed in association with DRONA 17</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="masonry-item filter-two col-lg-4 col-sm-6 col-xs-12">
                    <!-- Image Box -->
                    <div class="image-box image-hover">
                        <div class="image animated" data-animation="bounceInDown"  data-animation-delay="500">
                            <a href="#" ><img src="../assets/img/projects/project06.jpg" alt=""></a>
                        </div>
                        <div class="title text-xs-center animated" data-animation="bounceInUp" data-animation-delay="700">
                            <a href="#" >
                                <h5 class="mb-0">Donate Now</h5>
                                <p class="text-sm text-muted mb-0">A Charity solution web app </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </section>
</div>
</template>
<script>
export default {
  name: "Portfolio",
  data() {
    return {};
  },
  mounted: function() {
    Skill.Basic.animations();
    $(".icnActive").removeClass("icnActive")
    $("#icn_portfolio").addClass("icnActive")
    $("#img_left").addClass("slideInLeft visible")
    $("#img_right").addClass("slideInUp visible")
    $("#img_top").addClass("bounceInDown visible")
  },
  methods: {
    animateimg: function() {
      $("#img_top").removeClass("bounceInDown ")
      $("#img_top").addClass("jello")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#img_left {
}

#img_right {
  -webkit-animation-duration: 0.5s;
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
}
#img_top {
  -webkit-animation-duration: 0.8s;
  -webkit-animation-delay: 0.7s;
  -moz-animation-delay: 0.7s;
}
</style>
