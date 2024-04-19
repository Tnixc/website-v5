<script lang="ts">
import openicon from "pixelarticons/svg/open.svg";
import githubicon from "pixelarticons/svg/github.svg";
import { sleep } from "../utils";
import { projects } from "../data/projects";
async function close() {
	const button = document.getElementById("projects")!;
	const windowContent = document.getElementById("window-content")!;
	const windowLayer = document.getElementById("window-layer")!;
	const pane = document.getElementById("window")!;
	const {
		width: buttonW,
		height: buttonH,
		x: buttonX,
		y: buttonY,
	} = button.getBoundingClientRect();

	windowLayer.style.background = "transparent";
	pane.style.transform = "";
	pane.style.height = `${buttonH}px`;
	pane.style.width = `${buttonW}px`;
	pane.style.left = `calc(${buttonX}px + 3rem)`;
	pane.style.top = `calc(${buttonY}px - ${(buttonH * 2) / 3}px)`; // weird hacky fix
	pane.style.zIndex = "0";
	document.body.style.padding = "0rem";
	document.body.style.maxHeight = "unset";
	document.body.style.overflow = "auto";
	await sleep(300);
	windowContent.style.visibility = "hidden";
	await sleep(300);
	windowLayer.classList.add("opacity-0", "pointer-events-none");
	button.style.visibility = "visible";
}
</script>

<div class="p-2 text-white" id="window-content">
  <div class="flex items-center justify-between">
    <button
      on:click={() => close()}
      class="flex gap-2 border border-zinc-700 p-2"
    >
      <img
        src={openicon}
        height="24"
        width="24"
        alt="open icon"
        class="-scale-y-100 hue-rotate-180 invert"
      />
      Close</button
    >
    <h1 class="">Projects</h1>
    <a
      href="https://github.com/Tnixc"
      class="flex gap-2 border border-zinc-700 p-2"
    >
      <img
        src={githubicon}
        height="24"
        width="24"
        alt="open icon"
        class="hue-rotate-180 invert"
      />
      My Github</a
    >
  </div>
  <div class="flex flex-col gap-2 py-2">
    {#each projects as project}
      <div class="flex flex-col gap-1 border border-zinc-600 p-2">
        <h1 class="text-xl">{project.name}</h1>
        <p class="opacity-70">{project.description}</p>
        <div class="flex flex-wrap items-center gap-2">
          <img
            src={githubicon}
            height="24"
            width="24"
            alt="open icon"
            class="hue-rotate-180 invert"
          />
          <a
            href={project.github}
            class="break-all text-blue-400 hover:underline"
          >
            {project.github}
          </a>
          <div class="flex-grow" />
          {#if project.tags}
            {#each project.tags as z}
              <div class="flex gap-2">
                <span class="p-1 text-{z.color}-400">
                  <span class="select-none opacity-40">#</span>
                  {z.name}
                </span>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    {/each}
  </div>
  <p class="py-4 text-center">and hopefully more to come</p>
</div>
<!-- A hacky fix to get tailwind to work for now, no idea how i would fix this tbh -->
<span
  class="hidden text-blue-400 text-emerald-400 text-gray-400 text-green-400 text-orange-400 text-red-400 text-violet-400"
/>
