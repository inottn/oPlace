const places = document.querySelectorAll('.place')

Array.from(places).forEach((place, index, places) => {
  place.addEventListener('click', function(e) {
    this.classList.add('click')
    places.forEach((p, i) => {
      if (p === this) return
      if (i < index) p.classList.add('hide-left')
      else p.classList.add('hide-right')
    })
  })
})