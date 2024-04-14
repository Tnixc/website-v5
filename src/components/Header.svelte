<script lang="ts">
  import { headerLinks } from '../data/header';
  import { toast } from 'svelte-sonner';
  import Thing from '../components/Thing.svelte';
  function copy(link: string): void {
    navigator.clipboard.writeText(link);
    toast(Thing);
  }
</script>

<header class="unblur-in flex flex-wrap justify-between">
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
              class="invisible absolute left-1/2 top-full z-40 flex w-max -translate-x-1/2 translate-y-2 border border-black bg-white py-1 pl-2 pr-1 text-black opacity-0 shadow-xl blur-md transition-all delay-150 duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0"
            >
              Click to open

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              >
                <path
                  d="M21,3L13,3L13,5L17,5L17,7L19,7L19,11L21,11L21,3ZM17,7L15,7L15,9L13,9L13,11L15,11L15,9L17,9L17,7Z"
                ></path>
              </svg>
            </span>
          </a>
        {/if}
        {#if element.action == 'copy'}
          <button
            on:click="{() => copy(element.value)}"
            class="{element.class} group relative py-2 hover:underline"
            >{element.text}
            <span
              class="invisible absolute left-1/2 top-full z-40 flex w-max -translate-x-1/2 translate-y-2 gap-1 border border-black bg-white py-1 pl-2 pr-1 text-black opacity-0 shadow-xl blur-md transition-all delay-150 duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0"
            >
              Click to copy
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 6H7V22H15V20H17V18H15V16H17V18H19V16H21V6ZM9 20V8H19V14H13V20H9ZM3 18H5V4H17V2H5H3V4V18Z"
                  fill="black"></path>
              </svg>
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
