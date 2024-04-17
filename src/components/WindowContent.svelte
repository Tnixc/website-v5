<script lang="ts">
  import openicon from "pixelarticons/svg/open.svg";
  import githubicon from "pixelarticons/svg/github.svg";
  import { sleep } from "../utils";
  import { projects } from "../data/projects";
  async function close() {
    const button = document.getElementById("projects")!;
    const windowContent = document.getElementById("window-content")!;
    const window = document.getElementById("window")!;
    const windowLayer = document.getElementById("window-layer")!;
    const {
      width: buttonW,
      height: buttonH,
      x: buttonX,
      y: buttonY,
    } = button.getBoundingClientRect();
    windowContent.style.visibility = "hidden";
    window.style.transform = "";
    window.style.height = `${buttonH}px`;
    window.style.width = `${buttonW}px`;
    window.style.left = `${buttonX}px`;
    window.style.top = `${buttonY}px`;
    window.style.zIndex = "0";
    await sleep(600);
    windowLayer.classList.add("opacity-0", "pointer-events-none");
    button.style.visibility = "visible";
  }
</script>

<div class="p-2 text-white" id="window-content">
  <button
    on:click={() => close()}
    class="flex gap-2 border border-zinc-700 p-2"
  >
    <img
      src={openicon}
      height="24"
      width="24"
      alt="open icon"
      class="-scale-y-100 invert"
    />
    Close</button
  >
  <div class="flex flex-col gap-2 py-2">
    {#each projects as project}
      <div class="border border-zinc-600 p-2 flex flex-col gap-1">
        <h1 class="text-xl">{project.name}</h1>
        <p class="opacity-70">{project.description}</p>
        <div class="flex gap-2">
          <img
            src={githubicon}
            height="24"
            width="24"
            alt="open icon"
            class="invert"
          />
          <a href={project.github} class="text-blue-400 hover:underline">
            {project.github}
          </a>
        </div>
        <div class="flex gap-2">
          {#if project.tags}
            {#each project.tags as z}
              <div class="flex gap-2">
                <span class="p-1 bg-{z.color}-300/40">
                  {z.name}
                </span>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
<span
  class="hidden bg-blue-300/40
bg-emerald-300/40
bg-gray-300/40
bg-green-300/40
bg-orange-300/40
bg-red-300/40
bg-violet-300/40"
/>
