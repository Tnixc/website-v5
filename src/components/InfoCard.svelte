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
  <p class="absolute left-2 top-2 z-0 border border-black bg-white px-2">
    {data.Title}
  </p>
  <div class="border border-black p-2">
    {#each data.Info as info}
      <div>
        <span class="font-zed-bold">{info.key}</span>
        <span>-></span>
        <span>{info.value}</span>
      </div>
    {/each}
  </div>
</div>
