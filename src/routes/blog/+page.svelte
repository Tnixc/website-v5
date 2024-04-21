<script>
import Header from "../../components/Header.svelte";
import dateicon from "pixelarticons/svg/calendar.svg";
export let data;
</script>

<main class="relative  h-[100dvh]">
  <Header />
  <div class="px-2">
    <div class="flex flex-wrap gap-4 border border-black p-2">
      <h1 class="flex font-display text-8xl">
        <svg
          width="43"
          height="42"
          viewBox="0 0 43 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.921936 23.569V19.015H9.63394L16.3659 19.708L16.8609 18.718L11.5149 14.461L5.37694 8.32295L8.54494 5.15495L14.6829 11.293L18.9399 16.639L19.9299 16.144L19.2369 9.41195V0.699951H23.7909V9.41195L23.0979 16.144L24.0879 16.639L28.3449 11.293L34.4829 5.15495L37.6509 8.32295L31.5129 14.461L26.1669 18.718L26.6619 19.708L33.3939 19.015H42.1059V23.569H33.3939L26.6619 22.876L26.1669 23.866L31.5129 28.123L37.6509 34.261L34.4829 37.429L28.3449 31.291L24.0879 25.945L23.0979 26.44L23.7909 33.172V41.884H19.2369V33.172L19.9299 26.44L18.9399 25.945L14.6829 31.291L8.54494 37.429L5.37694 34.261L11.5149 28.123L16.8609 23.866L16.3659 22.876L9.63394 23.569H0.921936Z"
            fill="black"
          />
        </svg>
        Blog
      </h1>
      <ul
        class="flex max-h-[calc(100vh_-_4rem)] min-w-[min(90vw,70ch)] flex-grow flex-col items-center gap-2 overflow-scroll"
      >
        {#each data.posts as post}
          <li
            class="w-max min-w-[min(90vw,70ch)] border transition-all duration-200 hover:shadow-md"
          >
            <a href={post.path} class="block p-8">
              <h1
                class="text-xl"
                style={`view-transition-name: ${post.meta.title.replace(
                  /[\W_]+/g,
                  "-"
                )}`}
              >
                {post.meta.title}
              </h1>
              <p class="flex gap-1 opacity-50">
                <img src={dateicon} height="20" width="20" alt="date icon" />
                {post.meta.date}
              </p>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</main>

<style>
  main::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 999;
    pointer-events: none;
    background: linear-gradient(
      -25deg,
      #00000022,
      transparent,
      #00000033,
      #ffffff44,
      #00000044,
      #ffffff99,
      #00000077
    );
    filter: blur(10px);
    opacity: 0.5;
  }
</style>
