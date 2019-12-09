function makeMarquee () {
  const title = 'worlds first vegan website'

  const marqueeText = new Array(200).fill(title).join(' ')

  const marquee = document.querySelector('.marquee span')

  marquee.innerHTML = marqueeText




}

makeMarquee()



// scroll width is relative to the length of the list of posters
