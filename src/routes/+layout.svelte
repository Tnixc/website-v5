<script>
import "../app.css";
import "../fonts.css";
import { Toaster } from "svelte-sonner";
</script>

<Toaster
  toastOptions="{{
    unstyled: true,
    classes: {
      toast: 'bg-white border w-full p-2 shadow-2xl font-sans',
      title: 'text-black',
    },
  }}"
/>
<slot />
