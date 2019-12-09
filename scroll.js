if ($(window).width() > 1400) {
  $(document).on("scroll", function () {

    var pixels = $(document).scrollTop()

    $(".sideways-scroll-div").css("left", -1 * pixels + 750)

  })

}


else {

  $(document).on("scroll", function () {

    var pixels = $(document).scrollTop()

    $(".sideways-scroll-div").css("left", -1 * pixels + $(window).width()*0.5)

  })


}


// if above 1400, scroll indent is 750px
// if below, then scroll indent is 50vw






// want the scroll indent to be 750px before 1000px window, then 50vw
