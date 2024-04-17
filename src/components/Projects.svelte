<script lang="ts">
import openicon from "pixelarticons/svg/open.svg";
import WindowContent from "./WindowContent.svelte";
import { sleep } from "../utils";
async function expand() {
	const button = document.getElementById("projects")!;
	button.style.visibility = "hidden";
	const buttonW = button.getBoundingClientRect().width;
	const buttonH = button.getBoundingClientRect().height;
	const buttonX = button.getBoundingClientRect().x;
	const buttonY = button.getBoundingClientRect().y;
	console.log(buttonW, buttonH, buttonX, buttonY);
	// create window
	const windowLayer = document.querySelector(".window-layer")!;
	windowLayer.classList.remove("opacity-0", "pointer-events-none");
	const window = windowLayer.appendChild(document.createElement("div"));
	window.id = "window";
	window.style.transitionTimingFunction = "cubic-bezier(0,.98,.58,.97)";
	window.style.maxWidth = "96vw";
	window.style.width = `${buttonW}px`;
	window.style.height = `${buttonH}px`;
	window.style.left = `${buttonX}px`;
	window.style.top = `${buttonY}px`;
	window.classList.add(
		"window",
		"bg-black",
		"border",
		"border-black",
		"fixed",
		"duration-300",
		"max-h-[96vh]",
		"shadow-2xl",
	);
	await sleep(300);
	window.style.width = "100vh";
	window.style.height = "100vh";
	window.style.left = "50%";
	window.style.top = "50%";
	window.style.transform = "translate(-50%, -50%)";
	new WindowContent({
		target: window,
	});
}
</script>

<div
  class="window-layer pointer-events-none fixed inset-0 z-50 bg-white/80 opacity-0 duration-500"
/>
<div class="flex justify-end p-2">
  <button
    class="unblur-in flex gap-4 bg-black px-12 py-6 text-white transition-all duration-300 hover:scale-105"
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
