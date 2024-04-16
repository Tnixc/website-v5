<script lang="ts">
  import Header from '../components/Header.svelte';
  import Banner from '../components/Banner.svelte';
  import InfoCard from '../components/InfoCard.svelte';
  import {
    aboutInfo,
    skillsInfo,
    stuffInfo,
    personInfo,
  } from '../data/InfoCards';
</script>

<div class="sticky top-0 z-50 flex max-h-screen w-full flex-col bg-zinc-100">
  <Banner />
  <Header />
</div>
<div class="p-2 flex md:gap-4 flex-wrap">
  <div class="flex flex-col">
    <InfoCard data="{aboutInfo}" />
    <InfoCard data="{skillsInfo}" />
  </div>
  <div class="flex flex-col md:pt-20">
    <InfoCard data="{stuffInfo}" />
    <InfoCard data="{personInfo}" />
  </div>
</div>
