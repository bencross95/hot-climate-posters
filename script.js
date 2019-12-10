function makeMarquee () {
  const title = 'worlds first vegan website'

  const marqueeText = new Array(200).fill(title).join(' ')

  const marquee = document.querySelector('.marquee span')

  marquee.innerHTML = marqueeText

}

makeMarquee()




function instaHover() {
  document.getElementById("insta-link-shape").style.background = "lime"
}

function instaHoverReset() {
  document.getElementById("insta-link-shape").style.background = "black"
}
