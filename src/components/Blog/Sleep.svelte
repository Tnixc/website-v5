<script>
  import { sleepData } from "../../data/blog-data/sleep";
  let average =
    Math.round(
      (sleepData.reduce((acc, curr) => {
        let time = curr.asleep.split(":");
        let hours = parseInt(time[0]);
        let minutes = parseInt(time[1]);
        let seconds = parseInt(time[2]);
        let totalMinutes = hours * 60 + minutes + seconds / 60;
        return acc + totalMinutes;
      }, 0) /
        sleepData.length) *
        100
    ) / 100;
</script>

<p class="text-xl">
  This is data from {sleepData.length} nights of sleep, tracked with my
  <a href="https://support.apple.com/en-us/111853">Apple watch SE 2</a>
  using <a href="https://autosleepapp.tantsissa.com/home"> Autosleep </a>.
</p>
<h1 class="text-2xl">
  On average, I slept for <code>{average}</code> minutes or
  <code>{Math.round((average * 100) / 60) / 100}</code> hours each night.
</h1>
