// 1. Create URL object from window.location
const url = new URL(window.location)
// 2. Create URLSearchParams object from URL
const params = new URLSearchParams(url.search)
// 3. Get event and date from params
const title = params.get('title')
const date = params.get('date')

// 4. Calculate time difference in seconds
const then = moment(new Date(date))
const now = moment.now()
const diff = then.diff(now, 'seconds')
console.log(diff)

if (diff < 0) {
  // Generic message in case timer runs out
  const titleSpan = document.querySelector('.title')
  titleSpan.textContent = $('.frTag').length ? 'Bonne Vente !' : 'Happy Selling!' 

  // Timer set to 00:00:00
  const clock = $('.timer').FlipClock('YYYY/MM/DD', {
    countdown: true,
    clockFace: 'DailyCounter',
    language: $('.frTag').length ? 'fr-ca' : 'en-us'
  })
} else {
  // 5. Set title
  const titleSpan = document.querySelector('.title')
  titleSpan.textContent = title

  // 6. Set timer
  const clock = $('.timer').FlipClock(diff, {
    countdown: true,
    clockFace: 'DailyCounter',
    language: $('.frTag').length ? 'fr-ca' : 'en-us'
  })
}