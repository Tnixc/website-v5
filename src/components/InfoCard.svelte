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
<div class="relative pt-5 w-fit max-w-md">
  <p class="absolute top-2 left-2 px-2 bg-white border border-black ">{data.Title}</p>
  <div class="border border-black p-2">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus voluptate laudantium possimus animi nulla ad minus debitis harum numquam magni iusto illum tempora quo culpa, officiis natus excepturi delectus. Voluptas vel exercitationem ullam fugiat beatae dolorem ipsa quo dolor.
  </div>
</div>

