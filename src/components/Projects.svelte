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
		"duration-[600ms]",
		"max-h-[96vh]",
	);
	window.style.boxShadow =
		"-20px 125px 51px rgba(0, 0, 0, 0.01),-11px 70px 43px rgba(0, 0, 0, 0.05), -5px 31px 32px rgba(0, 0, 0, 0.09),-1px 8px 17px rgba(0, 0, 0, 0.1)";
	window.style.transitionTimingFunction = "cubic-bezier(0.47, 0, 0.23, 1.18)";
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
	document.body.style.scale = "0.95";
	const windowLayer = document.getElementById("window-layer")!;
	const windowContent = document.getElementById("window-content")!;
	const window = document.getElementById("window")!;
	const button = document.getElementById("projects")!;
	button.style.visibility = "hidden";
	windowContent.style.visibility = "visible";
	windowLayer.classList.remove("opacity-0", "pointer-events-none");
	windowLayer.style.scale = "1.053";
	windowLayer.style.background = "#ffffff99";
	window.style.width = "100vh";
	window.style.height = "100vh";
	window.style.left = "50%";
	window.style.top = "50%";
	window.style.transform = "translate(-50%, -50%)";
	window.style.overflow = "scroll";
	window.style.zIndex = "100";
}
</script>

<div
  id="window-layer"
  class="pointer-events-none fixed inset-0 z-50 opacity-0 duration-500 "
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
