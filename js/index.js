const places = document.querySelectorAll('.place')
const placeIntroductions = document.querySelectorAll('.place-introduction')

Array.from(places).forEach((place, index, places) => {
  place.addEventListener('click', function(e) {
    this.addEventListener('transitionend', function(e) {
      if (e.target !== this || e.pseudoElement !== "") return
      placeIntroductions[index].classList.add('show')
    })
    this.classList.add('click')
    places.forEach((p, i) => {
      if (p === this) return
      if (i < index) p.classList.add('hide-left')
      else p.classList.add('hide-right')
    })
  })
})