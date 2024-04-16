<script>
import "../app.css";
import "../fonts.css"
import { Toaster } from "svelte-sonner";
</script>

<Toaster
  toastOptions="{{
    unstyled: true,
    classes: {
      toast: 'bg-white border w-full p-2 shadow-xl font-zed',
      title: 'text-black',
    },
  }}"
/>
<slot />
