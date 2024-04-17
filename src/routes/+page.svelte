<script lang="ts">
import Header from "../components/Header.svelte";
import Banner from "../components/Banner.svelte";
import InfoCard from "../components/InfoCard.svelte";
import Footer from "../components/Footer.svelte";
import Projects from "../components/Projects.svelte";
import {
	aboutInfo,
	skillsInfo,
	stuffInfo,
	personInfo,
} from "../data/InfoCards";
</script>

<main class="relative flex flex-col md:h-screen md:overflow-hidden">
  <div class="z-50 flex max-h-screen w-full flex-col bg-zinc-100">
    <Banner />
    <Header />
  </div>
  <div class="relative" id="top">
    <Projects />
  </div>
  <div class="relative flex flex-wrap overflow-scroll p-2 py-20 md:gap-4">
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
  </div>
  <div class="relative flex-grow" id="bottom">
    <Footer />
  </div>
</main>

<style>
  #top::after,
  #bottom::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 4rem;
    z-index: 1;
  }
  #top::after {
    top: 100%;
    @apply bg-gradient-to-b from-zinc-100 to-transparent;
  }
  #bottom::after {
    bottom: 100%;
    @apply bg-gradient-to-t from-zinc-100 to-transparent;
  }
</style>
