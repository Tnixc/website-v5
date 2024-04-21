<script lang="ts">
type Info = {
	key: string;
	value: string;
};
type InfoCardProps = {
	Title: string;
	Info: Info[];
};
export let data: InfoCardProps;
</script>

<div class="relative z-0 max-w-md pt-6">
  <p class="absolute left-2 top-2 z-20 border border-black bg-white px-2 backdrop-blur-sm">
    {data.Title}
  </p>
  <div class="border border-black p-2 backdrop-blur-sm z-10">
    {#each data.Info as info}
      <p>
        <span class="font-zed-bold">{info.key}</span>
        <span>-></span>
        <span>{info.value}</span>
      </p>
    {/each}
  </div>
</div>
