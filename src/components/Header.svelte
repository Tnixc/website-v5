<script lang="ts">
  import { headerLinks } from '../data/header';
</script>

<header class="flex flex-wrap justify-between">
  <div class="flex flex-wrap">
    {#each headerLinks as element}
      <div class="flex items-baseline">
        <span class="px-2 opacity-50">/</span>
        {#if element.action == 'open'}
          <a
            href="{element.value}"
            class="{element.class} group relative py-2 hover:underline"
            >{element.text}
            <span
              class="invisible absolute left-1/2 top-full z-50 w-max -translate-x-1/2 translate-y-2 border border-black bg-white px-2 py-1 text-black opacity-0 shadow-xl blur-md transition-all delay-150 duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0"
            >
              Click to open
            </span>
          </a>
        {/if}
        {#if element.action == 'copy'}
          <a
            href="{element.value}"
            class="{element.class} group relative py-2 hover:underline"
            >{element.text}
            <span
              class="invisible absolute left-1/2 top-full z-50 w-max -translate-x-1/2 translate-y-2 border border-black bg-white px-2 py-1 text-black opacity-0 shadow-xl blur-md transition-all delay-150 duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0"
            >
              Click to copy
            </span>
          </a>
        {/if}
      </div>
    {/each}
  </div>
</header>
