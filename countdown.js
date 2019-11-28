// 1. Create URL object from window.location
const url = new URL(window.location)
// 2. Create URLSearchParams object from URL
const params = new URLSearchParams(url.search)
// 3. Get event and date from params
const title = params.get('title')
const date = params.get('date')

// 4. Set 
const titleSpan = document.querySelector('.title')
titleSpan.textContent = title

const then = moment(new Date(date))
const now = moment.now()
const diff = then.diff(now, 'seconds')

const clock = $('.timer').FlipClock(diff, {
  countdown: true,
  clockFace: 'DailyCounter',
  language: $('.frTag').length ? 'fr-ca' : 'en-us'
})