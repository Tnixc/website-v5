<script>
import "../app.css";
import { Toaster } from "svelte-sonner";
import { setupViewTransition } from "sveltekit-view-transition";
setupViewTransition();
</script>

<svelte:head>
  <script
    defer
    src="https://analytics.us.umami.is/script.js"
    data-website-id="d41f775b-3a39-4ed9-b68a-5afe73974f01"
  ></script>
</svelte:head>

<Toaster
  toastOptions={{
    unstyled: true,
    classes: {
      toast: "bg-white border w-full p-2 shadow-xl font-zed",
      title: "text-black",
    },
  }}
/>
<slot />
<style>
	/* Disable default crossfade. */
	:root {
		view-transition-name: none;
	}

	/* Or, just modify the duration. */
	:global(::view-transition-old(root)),
	:global(::view-transition-new(root)) {
		animation-duration: 2s;
	}
</style>
