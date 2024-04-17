<script lang="ts">
import { sleep } from "../utils";
async function close() {
	const button = document.getElementById("projects")!;
	const windowContent = document.getElementById("window-content")!;
	windowContent.style.visibility = "hidden";
	const {
		width: buttonW,
		height: buttonH,
		x: buttonX,
		y: buttonY,
	} = button.getBoundingClientRect();
	const window = document.getElementById("window")!;
	const windowLayer = document.querySelector(".window-layer")!;
	window.style.transform = "";
	window.style.height = `${buttonH}px`;
	window.style.width = `${buttonW}px`;
	window.style.left = `${buttonX}px`;
	window.style.top = `${buttonY}px`;
	windowLayer.classList.add("opacity-0", "pointer-events-none");
	await sleep(300);
	window.remove();
	button.style.visibility = "visible";
}
</script>

<div class="p-2 text-white" id="window-content">
  <button on:click={() => close()}>Close</button>
  <div>hello world</div>
</div>
