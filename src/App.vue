
<template>
  <div id="app">
    <!-- <div id="page-loader" class="bg-white">
    <svg class="loader" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle class="circle" fill="none" stroke-width="2" stroke-linecap="round" cx="16" cy="16" r="14"></circle></svg>
    <span class="loading-txt text-muted">Loading...</span>
  </div> -->
<!-- Loader / End -->

<!-- Header -->
<header id="header" class="dark">
    <a href="index.html" class="logo">
       <h3 style="font-family: 'Exo', sans-serif;"># JNKSOLUTIONS</h3>
    </a>

    <!-- Navigation -->
    <nav id="main-menu">
        <div class="nav-wrapper">
            <ul class="nav nav-primary">
                <li><router-link to="/"><i class="li-home" id='icn_home' ></i>Start</router-link></li>
                <li><router-link to="/aboutus"     id='nav_about'><i class="li-feedback" id='icn_about'></i>About</router-link></li>
                <li><router-link to="/services"  ><i class="li-laptop" id='icn_service'></i>Services</a></router-link></li>
                <li><router-link to="/portfolio"><i class="li-imac" id='icn_portfolio'></i>Portfolio</a></router-link></li>
                <li><router-link to="/contactus"><i class="li-email" id='icn_contact'></i>Contact</a></router-link></li>
            </ul>
        </div>
        <span class="selector"></span>
    </nav>

</header>
<!-- Header / End -->

<!-- Content -->
 
    <router-view  class="animated" data-animation="fadeIn "/>
    <footer id="footer" class="border-top">
    <div class="container-fluid container-custom">
        <div class="row">
            <div class="col-xl-5 text-xl-left text-xs-center">
                <div class="module-group">
                    <div class="module copyright">
                        <a href="index.html" class="logo mr-15"><img src="assets/img/logo-dark.svg" height="80" alt=""></a>
                        <span class="text-muted">Copyright Skill 2018 © <a href="http://www.jnksolutions.in/" target="blank">JNKSOLUTIONS</a>.</span>
                    </div>
                </div>
            </div>
            <div class="col-xl-7 text-xl-right text-xs-center">
                <div class="module-group">
                    <div class="module">
                        <span class="text-muted mr-5">Language:</span>
                        <ul class="nav-footer">
                            <li class="active"><a href="#">English</a></li>
                        </ul>
                    </div>
                    <div class="module">
                        <span class="text-muted mr-10">Follow Us</span>
                        <a href="#" class="icon icon-circle icon-hover icon-secondary icon-sm"><i class="ti-facebook"></i></a>
                        <a href="#" class="icon icon-circle icon-hover icon-secondary icon-sm"><i class="ti-twitter-alt"></i></a>
                        <a href="#" class="icon icon-circle icon-hover icon-secondary icon-sm"><i class="ti-google"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<div id="mobile-nav-toggle" class=""><span></span><span></span><span></span></div>
<!-- Footer / End -->
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function(){
      Skill.Basic.init();
       $('#mobile-nav-toggle').on('click', function () {
            $(this).toggleClass('open');
            $body.toggleClass('mobile-nav-open');
            });
  }
}
</script>
<style>
.icnActive{
 color: #F57C00;
 opacity:1;
 font-weight: bold;
}
@import url('https://fonts.googleapis.com/css?family=Exo');
</style>
