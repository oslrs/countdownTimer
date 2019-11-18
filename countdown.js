const then = moment(new Date("2019/11/29"));
const now = moment.now();
const diff = then.diff(now, "seconds");;
console.log(diff);

const clock = $('.timer').FlipClock(diff, {
  countdown: true,
  clockFace: "DailyCounter"
});