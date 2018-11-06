const places = document.querySelectorAll('.place')
const placeIntroductions = document.querySelectorAll('.place-introduction')
const closePlaceIntroductionBtns = document.querySelectorAll('.place-introduction-close-btn')

Array.from(places).forEach((place, index, places) => {
  place.addEventListener('click', function(e) {
    if (e.target === closePlaceIntroductionBtns[index] || place.classList.contains('click')) return

    this.classList.add('click')

    places.forEach((p, i) => {
      if (p === this) return
      if (i < index) p.classList.add('hide-left')
    })

    placeIntroductions[index].classList.add('show')
    console.log(1)
  })
})

Array.from(closePlaceIntroductionBtns).forEach((btn, index, btns) => {
  btn.addEventListener('click', function(e) {
    placeIntroductions[index].classList.remove('show')
    places[index].classList.remove('click')
    places.forEach((p, i) => {
      if (p === this) return
      if (i < index) p.classList.remove('hide-left')
    })
  })
})