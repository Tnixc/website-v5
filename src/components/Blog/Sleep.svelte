<script lang="ts">
  import { sleepData } from "../../data/blog-data/sleep";
  let average =
    sleepData.reduce((acc, sleep) => acc + sleep.asleep, 0) / sleepData.length;
  let arrAsleep = sleepData.map((sleep) => sleep.asleep).sort((a, b) => a - b);
  let p = arrAsleep[Math.floor(arrAsleep.length * 0.93)];
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
  class="grid grid-flow-row-dense grid-cols-7 grid-rows-none gap-0.5 py-10 md:grid-flow-col-dense md:grid-cols-none md:grid-rows-7 lg:scale-125"
>
  {#each sleepData as sleep}<div
      class="group aspect-square rounded-sm border border-black/10"
      style={`background-color: rgb(110, 163, 254, ${sleep.asleep / p})`}
    >
      <div
        class="pointer-events-none absolute z-50 hidden w-max -translate-y-full select-none rounded-sm border border-black/10 bg-stone-100/70 px-1 shadow-md backdrop-blur-sm group-hover:block"
      >
        <span class="block"
          >{Math.round((sleep.asleep / 3600) * 100) / 100} Hours</span
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
<p>
  Here is a graph of the data, the height of each bar represents the amount of
  time I was asleep for that night. The dark blue bars are weekends.
</p>
<div class="flex items-end">
  {#each sleepData as sleep}
    {#if sleep.toDate.includes("Sunday") || sleep.toDate.includes("Saturday")}
      <div
        style={`height: ${(sleep.asleep * 8) / p}rem;`}
        class="w-full bg-blue-600/80"
      />
    {/if}
    {#if !sleep.toDate.includes("Sunday") && !sleep.toDate.includes("Saturday")}
      <div
        style={`height: ${(sleep.asleep * 8) / p}rem;`}
        class="w-full bg-sky-400/60"
      />
    {/if}
  {/each}
</div>
<p>
  I thought the difference between weekdays and weekends would be more apparent
  but I guess not.
</p>
