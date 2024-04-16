<script lang="ts">
  import { headerLinks } from "../data/header";
  import { toast } from "svelte-sonner";
  import copyicon from "pixelarticons/svg/copy.svg";
  import openicon from "pixelarticons/svg/open.svg";
  import ToasterToast from "../components/ToasterToast.svelte";

  function copy(link: string): void {
    navigator.clipboard.writeText(link);
    toast(ToasterToast);
  }
</script>

<header
  class="unblur-in flex flex-wrap justify-between"
  style="animation-duration: 500ms; animation-delay: 500ms;"
>
  <div class="flex flex-wrap">
    {#each headerLinks as element}
      <div class="flex items-baseline">
        <span class="select-none px-2 opacity-50">/</span>
        {#if element.action == "open"}
          <a
            href={element.value}
            class="{element.class} group relative py-2 hover:underline"
            >{element.text}
            <span
              class="invisible absolute left-1/2 top-full z-[99] flex w-max -translate-x-1/2 translate-y-2 gap-1 border bg-white py-1 pl-2 pr-1 text-black opacity-0 shadow-xl blur-sm transition-all delay-150 duration-300 group-hover:visible group-hover:z-[999] group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0"
            >
              Click to open
              <img src={openicon} height="24" width="24" alt="open icon" />
            </span></a
          >
        {/if}
        {#if element.action == "copy"}
          <button
            on:click={() => copy(element.value)}
            class="{element.class} group relative py-2 hover:underline"
            >{element.text}
            <span
              class="invisible absolute left-1/2 top-full z-[99] flex w-max -translate-x-1/2 translate-y-2 gap-1 border bg-white py-1 pl-2 pr-1 text-black opacity-0 shadow-xl blur-sm transition-all delay-150 duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0"
            >
              Click to copy
              <img src={copyicon} height="24" width="24" alt="copy icon" />
            </span>
          </button>
        {/if}
      </div>
    {/each}
  </div>
  <div class="flex p-2">
    <a href="/" class="hover:underline">Home</a>
    <span class="px-2">|</span>
    <a href="/blog" class="hover:underline">Blog</a>
  </div>
</header>
