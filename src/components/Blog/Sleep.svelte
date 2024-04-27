<script lang="ts">
  import { sleepData } from "../../data/blog-data/sleep";
  let average =
    sleepData.reduce((acc, sleep) => acc + sleep.asleep, 0) / sleepData.length;
  let arrAsleep = sleepData.map((sleep) => sleep.asleep).sort((a, b) => a - b);
  let p = arrAsleep[Math.floor(arrAsleep.length * 0.93)];
  let arrBedtime = [];
  let z = sleepData.map((sleep) => {
    let offsetToBed =
      new Date(sleep.bedtime).getUTCHours() * 60 +
      new Date(sleep.bedtime).getUTCMinutes();
    arrBedtime.push(offsetToBed);
    return { offsetToBed: offsetToBed, asleep: sleep.asleep };
  });
  let ArrWeekend = sleepData.filter((sleep) => {
    let date = new Date(sleep.toDate);
    return date.getDay() === 0 || date.getDay() === 6;
  });
  let ArrWeekday = sleepData.filter((sleep) => {
    let date = new Date(sleep.toDate);
    return date.getDay() !== 0 && date.getDay() !== 6;
  });
  let avgWeek =
    ArrWeekday.reduce((acc, sleep) => acc + sleep.asleep, 0) /
    ArrWeekday.length;
  let avgWeekend =
    ArrWeekend.reduce((acc, sleep) => acc + sleep.asleep, 0) /
    ArrWeekend.length;
</script>

<p class="text-lg">
  This is data from <code>{sleepData.length}</code> nights of sleep, tracked
  with my
  <a href="https://support.apple.com/en-us/111853">Apple watch SE 2</a>
  using <a href="https://autosleepapp.tantsissa.com/home"> Autosleep </a> from
  <strong>April 20th, 2023 to April 26th, 2024</strong>.
</p>
<h1 class="text-3xl">
  On average, I slept for <code>{Math.round((average * 100) / 60) / 100}</code>
  minutes or
  <code>{Math.round((average * 100) / 3600) / 100}</code> hours each night.
</h1>
<p class="text-2xl">
  On weekends, I average <code
    >{Math.round((avgWeekend * 100) / 3600) / 100} hours</code
  >
  hours of sleep, on weekdays, I average
  <code>{Math.round((avgWeek * 100) / 3600) / 100} hours</code>.
</p>
<p class="text-lg">
  I certaintly don't remember feeling that well rested, but ok. Also some of
  these are definitely wrong.
</p>
<div
  class="grid grid-flow-row-dense grid-cols-7 grid-rows-none gap-0.5 py-10 md:grid-flow-col-dense md:grid-cols-none md:grid-rows-7 lg:scale-125"
>
  {#each sleepData as sleep}<div
      class="group aspect-square rounded-sm border border-black/10"
      style={`background-color: rgb(110, 163, 254, ${sleep.asleep / p})`}
    >
      <div
        class="pointer-events-none absolute z-50 hidden w-max -translate-y-full select-none rounded-sm border border-black/10 bg-stone-100/70 px-1 shadow-md backdrop-blur-sm group-hover:block"
      >
        <code class="block"
          >{Math.round((sleep.asleep / 3600) * 100) / 100} Hours</code
        >
        <span class="block text-sm opacity-60"
          >From {sleep.bedtime} to <br /> {sleep.waketime}</span
        >
      </div>
    </div>{/each}
</div>
<p>
  Some of the start times are incorrect due to me taking naps(silly me). Days
  with no data have been removed.
</p>
<div class="flex rounded-sm border border-black/10 p-1">
  {#each z as sleep}
    <div class="flex w-full flex-col bg-stone-100 pt-10 hover:brightness-75">
      <div
        style={`height: ${sleep.offsetToBed / 10}px`}
        class="w-full bg-stone-100"
      />
      <div
        style={`height: ${sleep.asleep / 60 / 10}px`}
        class="w-full bg-blue-400"
      />
    </div>
  {/each}
</div>
<p>
  And here it shows the time I went to bed and how long I slept. The weekens are
  really obvious.
</p>
<p>
  The sudden jump in the middle is from me moving from Hong Kong to Canada.
  There's some pretty messed up times here, especially during the summer on the
  left. It's based on UTC time and I don't want to deal with time zones.
</p>
