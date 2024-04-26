<script lang="ts">
  import { sleepData } from "../../data/blog-data/sleep";
  let average =
    sleepData.reduce((acc, sleep) => acc + sleep.asleep, 0) / sleepData.length;
  let arrAsleep = sleepData.map((sleep) => sleep.asleep).sort((a, b) => a - b);
  let p10 = arrAsleep[Math.floor(arrAsleep.length * 0.1)];
  let p20 = arrAsleep[Math.floor(arrAsleep.length * 0.2)];
  let p30 = arrAsleep[Math.floor(arrAsleep.length * 0.3)];
  let p40 = arrAsleep[Math.floor(arrAsleep.length * 0.4)];
  let p50 = arrAsleep[Math.floor(arrAsleep.length * 0.5)];
  let p60 = arrAsleep[Math.floor(arrAsleep.length * 0.6)];
  let p70 = arrAsleep[Math.floor(arrAsleep.length * 0.7)];
  let p80 = arrAsleep[Math.floor(arrAsleep.length * 0.8)];
  let p90 = arrAsleep[Math.floor(arrAsleep.length * 0.9)];
</script>

<p class="text-xl">
  This is data from <code>{sleepData.length}</code> nights of sleep, tracked
  with my
  <a href="https://support.apple.com/en-us/111853">Apple watch SE 2</a>
  using <a href="https://autosleepapp.tantsissa.com/home"> Autosleep </a>.
</p>
<p class="text-3xl">
  On average, I slept for <code>{Math.round((average * 100) / 60) / 100}</code>
  minutes or
  <code>{Math.round((average * 100) / 3600) / 100}</code> hours each night.
</p>
<p class="text-2xl">
  I certaintly don't remember feeling that well rested, but ok. Also some of
  these are definitely wrong.
</p>
<div
  class="grid grid-flow-row-dense grid-cols-7 grid-rows-none gap-0.5 md:scale-125 md:grid-flow-col-dense md:grid-cols-none md:grid-rows-7"
>
  {#each sleepData as sleep}<div
      class="aspect-square rounded-sm bg-green-400 hover:bg-red-400"
    />{/each}
</div>
<p class="text-2xl hidden">
  <br />1. <code>{p10}</code> seconds of sleep is in the 10th percentile.
  <br />2. <code>{p20}</code> seconds of sleep is in the 20th percentile.
  <br />3. <code>{p30}</code> seconds of sleep is in the 30th percentile.
  <br />4. <code>{p40}</code> seconds of sleep is in the 40th percentile.
  <br />5. <code>{p50}</code> seconds of sleep is in the 50th percentile.
  <br />6. <code>{p60}</code> seconds of sleep is in the 60th percentile.
  <br />7. <code>{p70}</code> seconds of sleep is in the 70th percentile.
  <br />8. <code>{p80}</code> seconds of sleep is in the 80th percentile.
  <br />9. <code>{p90}</code> seconds of sleep is in the 90th percentile.
</p>
