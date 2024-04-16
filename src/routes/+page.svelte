<script lang="ts">
  import Header from "../components/Header.svelte";
  import Banner from "../components/Banner.svelte";
  import InfoCard from "../components/InfoCard.svelte";
  import Footer from "../components/Footer.svelte";
  import {
    aboutInfo,
    skillsInfo,
    stuffInfo,
    personInfo,
  } from "../data/InfoCards";
</script>

<div class="sticky top-0 z-50 flex max-h-screen w-full flex-col bg-zinc-100">
  <Banner />
  <Header />
</div>
<div class="flex flex-wrap p-2 md:gap-4">
  <div
    class="unblur-in flex flex-col"
    style="animation-duration: 1000ms; animation-delay: 200ms;"
  >
    <InfoCard data={aboutInfo} />
    <InfoCard data={skillsInfo} />
  </div>
  <div
    class="flex flex-col md:pt-20 unblur-in"
    style="animation-duration: 1000ms; animation-delay: 400ms;"
  >
    <InfoCard data={stuffInfo} />
    <InfoCard data={personInfo} />
  </div>
</div>
<Footer />
