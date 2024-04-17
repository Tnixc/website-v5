<script lang="ts">
import openicon from "pixelarticons/svg/open.svg";
import WindowContent from "./WindowContent.svelte";
import { onMount } from "svelte";
onMount(() => {
	const button = document.getElementById("projects")!;
	const buttonW = button.getBoundingClientRect().width;
	const buttonH = button.getBoundingClientRect().height;
	const buttonX = button.getBoundingClientRect().x;
	const buttonY = button.getBoundingClientRect().y;
	const windowLayer = document.getElementById("window-layer")!;
	const window = windowLayer.appendChild(document.createElement("div"));
	window.id = "window";
	window.classList.add(
		"bg-black",
		"border",
		"border-black",
		"fixed",
		"duration-[300ms]",
		"max-h-[96vh]",
		"shadow-2xl",
	);
	window.style.transitionTimingFunction = "cubic-bezier(.17,.88,.66,1)";
	window.style.maxWidth = "96vw";
	window.style.width = `${buttonW}px`;
	window.style.height = `${buttonH}px`;
	window.style.left = `${buttonX}px`;
	window.style.top = `${buttonY}px`;
	window.style.overflow = "hidden";

	new WindowContent({
		target: window,
	});
});
async function expand() {
	const windowLayer = document.getElementById("window-layer")!;
	const windowContent = document.getElementById("window-content")!;
	const window = document.getElementById("window")!;
	const button = document.getElementById("projects")!;
	windowContent.style.visibility = "visible";
	button.style.visibility = "hidden";
	windowLayer.classList.remove("opacity-0", "pointer-events-none");
	window.style.width = "100vh";
	window.style.height = "100vh";
	window.style.left = "50%";
	window.style.top = "50%";
	window.style.transform = "translate(-50%, -50%)";
	window.style.overflow = "scroll";
}
</script>

<div
  id="window-layer"
  class="pointer-events-none fixed inset-0 z-50 bg-white/80 opacity-0 duration-500"
/>
<div class="flex justify-end p-2">
  <button
    class="unblur-in flex gap-4 bg-black px-12 py-6 text-white transition-[transform] duration-300 hover:scale-105"
    id="projects"
    on:click={() => {
      expand();
    }}
  >
    <img
      src={openicon}
      height="24"
      width="24"
      alt="open icon"
      class="-scale-x-100 invert"
    />
    Projects</button
  >
</div>

<style>
  #projects {
    box-shadow: -20px 125px 51px rgba(0, 0, 0, 0.01),
      -11px 70px 43px rgba(0, 0, 0, 0.05), -5px 31px 32px rgba(0, 0, 0, 0.09),
      -1px 8px 17px rgba(0, 0, 0, 0.1);
    animation-duration: 1000ms;
  }
</style>
