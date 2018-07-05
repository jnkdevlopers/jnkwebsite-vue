<template>
    <div id="content">
    <!-- Page Title -->
    <div class="page-title bg-dark dark">
        <div class="bg-image" style='background-image: url("/static/img/coaching_bg02.873889f.jpg";'><img src="../assets/img/photos/contactus.jpg"  alt=""></div>
        <div class="container-fluid container-custom">
            <h1>Contact Us</h1>
            <p class="lead text-muted">Contact Us For Any Queries </p>
        </div>
    </div>
    <!-- Section / About -->
     <section id="contact" class="section">
        <div class="container-fluid container-custom">
            <div class="row">
                <div class="col-md-5">
                    <div class="box left">
                        <h4>Contact Us</h4>
                        <ul class="contact-list">
                            <li>
                                <i class="li-email"></i>
                                <div class="content">
                                    <span class="text-xs text-muted">E-mail:</span>
                                    <a href="#" class="text-lg">info@jnksolutions.in</a>
                                </div>
                            </li>
                            <li>
                                <i class="li-push"></i>
                                <div class="content">
                                    <span class="text-xs text-muted">Phone:</span>
                                    <a href="#"><span class="text-lg">+91 8301092209</span></a>
                                    <a href="#">&nbsp;,&nbsp; <span class="text-lg">+91 9947614112</span></a>
                                </div>
                            </li>
                            <li>
                                <i class="li-map1"></i>
                                <div class="content">
                                    <span class="text-xs text-muted">Address:</span>
                                    <span>Jafferkhan Colony, Near Planetarium <br> Calicut 673006 Kerala ,India</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="box right">
                        <h4>Write to Us</h4>
                        <form action="#" id="contact-form" class="contact-form validate-form"
                            data-message-error="Opps... Something went wrong - please try again later"
                            data-message-success="Thanks! You will recieve a responsve in 24h!">
                            <div class="form-group">                               
                                <input name="email" type="email" placeholder='Enter Your Email Address' class="form-control" required>
                            </div>
                            <div class="form-group">                                 
                                <textarea name="message" id="messagex" cols="30" rows="5" class="form-control"  placeholder="Type Your Message" required></textarea>
                            </div>
                            <div class="form-group form-submit">
                                <button type="submit" class="btn btn-submit">
                                    <span>Send message!</span>
                                    <svg class="loader loader-white" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle class="circle" fill="none" stroke-width="2" stroke-linecap="round" cx="16" cy="16" r="14"></circle></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
    $(".icnActive").removeClass("icnActive");
    $("#icn_contact").addClass("icnActive");
    $("#img_left").addClass("bounceInDown visible");
    $("#img_right").addClass("slideInRight visible");
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
