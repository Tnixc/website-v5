<script lang="ts">
import Header from "../components/Header.svelte";
import Banner from "../components/Banner.svelte";
import InfoCard from "../components/InfoCard.svelte";
import Footer from "../components/Footer.svelte";
import Projects from "../components/Projects.svelte";
import Graphic from "../components/Graphic.svelte";
import {
	aboutInfo,
	skillsInfo,
	stuffInfo,
	personInfo,
} from "../data/InfoCards";
</script>

<main class="relative flex flex-col md:min-h-screen md:overflow-hidden">
  <div class="z-50 flex max-h-screen w-full flex-col bg-black/5">
      <Banner />
    <Header />
  </div>

  <div
    class="relative flex flex-wrap-reverse overflow-scroll p-2 pt-28 md:gap-4 md:pt-2"
  >
    <div
      class="unblur-in flex flex-col"
      style="animation-duration: 1000ms; animation-delay: 200ms;"
    >
      <InfoCard data={aboutInfo} />
      <InfoCard data={skillsInfo} />
    </div>
    <div
      class="unblur-in flex flex-col md:pt-20"
      style="animation-duration: 1000ms; animation-delay: 400ms;"
    >
      <InfoCard data={stuffInfo} />
      <InfoCard data={personInfo} />
    </div>
    <div class="absolute right-2 top-2">
      <Projects />
    </div>
  </div>
  <div class="pt-96 md:pt-0">
    <Graphic />
  </div>
  <div class="flex flex-grow flex-col justify-end">
    <Footer />
  </div>
</main>
<style>
  main::after{
    content: "";
    position: absolute;
    inset: 0;
    z-index: 999;
    pointer-events: none;
    background: linear-gradient(-25deg, #00000044, transparent, #00000022, #ffffff44, #00000088, #ffffff00);
    filter: blur(10px);
    opacity: 0.5;
  }
</style>

