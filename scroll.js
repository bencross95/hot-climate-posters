if ($(window).width() < 1400) {

}
else {

  $(document).on("scroll", function () {

    var pixels = $(document).scrollTop()

    $(".sideways-scroll-div").css("left", -1 * pixels + 750)

  })


}
