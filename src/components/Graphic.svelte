<script lang="ts">
import { onMount } from "svelte";
var latest = "";
async function getLatest() {
	const res = await fetch(
		"https://api.github.com/repos/tnixc/website-v5/git/refs/heads/main",
	);
	const data = await res.json();
	let thing = data.object.sha;
	for (let char of thing) {
		latest += char;
		await new Promise((r) => setTimeout(r, 20));
	}
}
onMount(() => {
	getLatest();
});
</script>

<div class="max-w-screen absolute bottom-10 right-0 -z-50">
  <svg
    width="327"
    height="327"
    viewBox="0 0 327 327"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="163.663"
      cy="163.663"
      r="162.837"
      stroke="black"
      stroke-opacity="0.2"
    />
  </svg>

  <svg
    width="208"
    class="absolute left-0 top-0 -translate-x-20 -translate-y-[30px]"
    height="205"
    viewBox="0 0 208 205"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.03724 204.319L207.002 1.65773M207.002 1.65773L207.168 10.9384M207.002 1.65773L197.346 1.17294"
      stroke="black"
      stroke-opacity="0.2"
    />
  </svg>

  <svg
    width="156"
    class="absolute bottom-28 right-28"
    height="73"
    viewBox="0 0 156 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M155.912 0.70929L6.69787 0.709303L6.69788 71.6123M6.69788 71.6123L0.962585 65.877M6.69788 71.6123L12.4332 65.877"
      stroke="black"
      stroke-opacity="0.6"
    />
  </svg>
  <svg
    class="absolute bottom-10 right-0"
    width="249"
    height="130"
    viewBox="0 0 249 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.499517 0L0.499512 129.027M4.49952 0L4.49952 129.027M8.49953 0L8.49952 129.027M12.4995 0L12.4995 129.027M16.4995 0L16.4995 129.027M20.4995 0L20.4995 129.027M24.4996 0L24.4995 129.027M28.4996 0L28.4996 129.027M32.4996 0L32.4996 129.027M36.4996 0L36.4996 129.027M40.4996 0L40.4996 129.027M44.4996 0L44.4996 129.027M48.4996 0L48.4996 129.027M52.4996 0L52.4996 129.027M56.4996 0L56.4996 129.027M60.4996 0L60.4996 129.027M64.4996 0L64.4996 129.027M68.4996 0L68.4996 129.027M72.4996 0L72.4996 129.027M76.4996 0L76.4996 129.027M80.4996 0L80.4996 129.027M84.4997 0L84.4997 129.027M88.4997 0L88.4997 129.027M92.4997 0L92.4997 129.027M96.4997 0L96.4997 129.027M100.5 0L100.5 129.027M104.5 0L104.5 129.027M108.5 0L108.5 129.027M112.5 0L112.5 129.027M116.5 0L116.5 129.027M120.5 0L120.5 129.027M124.5 0L124.5 129.027M128.5 0V129.027M132.5 0V129.027M136.5 0V129.027M140.5 0V129.027M144.5 0V129.027M148.5 0V129.027M152.5 0V129.027M156.5 0V129.027M160.5 0V129.027M164.5 0V129.027M168.5 0V129.027M172.5 0V129.027M176.5 0V129.027M180.5 0V129.027M184.5 0V129.027M188.5 0V129.027M192.5 0V129.027M196.5 0V129.027M200.5 0V129.027M204.5 0V129.027M208.5 0V129.027M212.5 0V129.027M216.5 0V129.027M220.5 0V129.027M224.5 0V129.027M228.5 0V129.027M232.5 0V129.027M236.5 0V129.027M240.5 0V129.027M244.5 0V129.027M248.5 0V129.027"
      stroke="black"
      stroke-opacity="0.2"
    />
  </svg>
  <svg
    class="absolute -left-12 -top-12"
    width="363"
    height="383"
    viewBox="0 0 363 383"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="191.663"
      cy="191.663"
      r="190.626"
      stroke="black"
      stroke-opacity="0.2"
      stroke-dasharray="16 8"
    />
  </svg>

  <svg
    class="absolute bottom-10 left-10"
    width="131"
    height="378"
    viewBox="0 0 131 378"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.12915 377.5L130.156 248.5M1.12915 373.5L130.156 244.5M1.12915 369.5L130.156 240.5M1.12915 365.5L130.156 236.5M1.12915 361.5L130.156 232.5M1.12915 357.5L130.156 228.5M1.12915 353.5L130.156 224.5M1.12915 349.5L130.156 220.5M1.12915 345.5L130.156 216.5M1.12915 341.5L130.156 212.5M1.12915 337.5L130.156 208.5M1.12915 333.5L130.156 204.5M1.12915 329.5L130.156 200.5M1.12915 325.5L130.156 196.5M1.12915 321.5L130.156 192.5M1.12915 317.5L130.156 188.5M1.12915 313.5L130.156 184.5M1.12915 309.5L130.156 180.5M1.12915 305.5L130.156 176.5M1.12915 301.5L130.156 172.5M1.12915 297.5L130.156 168.5M1.12915 293.5L130.156 164.5M1.12915 289.5L130.156 160.5M1.12915 285.5L130.156 156.5M1.12915 281.5L130.156 152.5M1.12915 277.5L130.156 148.5M1.12915 273.5L130.156 144.5M1.12915 269.5L130.156 140.5M1.12915 265.5L130.156 136.5M1.12915 261.5L130.156 132.5M1.12915 257.5L130.156 128.5M1.12915 253.5L130.156 124.5M1.12915 249.5L130.156 120.5M1.12915 245.5L130.156 116.5M1.12915 241.5L130.156 112.5M1.12915 237.5L130.156 108.5M1.12915 233.5L130.156 104.5M1.12915 229.5L130.156 100.5M1.12915 225.5L130.156 96.4998M1.12915 221.5L130.156 92.4998M1.12915 217.5L130.156 88.4998M1.12915 213.5L130.156 84.4998M1.12915 209.5L130.156 80.4998M1.12915 205.5L130.156 76.4998M1.12915 201.5L130.156 72.4998M1.12915 197.5L130.156 68.4998M1.12915 193.5L130.156 64.4998M1.12915 189.5L130.156 60.4998M1.12915 185.5L130.156 56.4998M1.12915 181.5L130.156 52.4998M1.12915 177.5L130.156 48.4998M1.12915 173.5L130.156 44.4998M1.12915 169.5L130.156 40.4998M1.12915 165.5L130.156 36.4998M1.12915 161.5L130.156 32.4998M1.12915 157.5L130.156 28.4998M1.12915 153.5L130.156 24.4998M1.12915 149.5L130.156 20.4998M1.12915 145.5L130.156 16.4998M1.12915 141.5L130.156 12.4998M1.12915 137.5L130.156 8.49976M1.12915 133.5L130.156 4.49976M1.12915 129.5L130.156 0.499756"
      stroke="black"
      stroke-opacity="0.1"
    />
  </svg>
  <svg
    width="420"
    class="absolute -left-full bottom-12"
    height="11"
    viewBox="0 0 420 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.856201 5.45761H418.981M0.856201 5.45761L5.74478 10.3462M0.856201 5.45761L5.74478 0.569035M418.981 5.45761L414.093 10.3462M418.981 5.45761L414.093 0.569035"
      stroke="black"
    />
  </svg>
  <h1
    class="absolute bottom-10 right-4 select-none font-display text-9xl text-white"
  >
    V5
  </h1>
  <div class="absolute -left-full bottom-16 bg-black/10 p-2 text-sm opacity-40">
    <a
      href="https://github.com/tnixc/website-v5"
      class="select-none hover:underline"
    >
      {latest}
    </a>
  </div>
</div>

<style>
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  svg:nth-child(1) {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation-delay: 500ms;
    animation: draw 2000ms ease-in-out forwards;
  }
  svg:nth-child(2) {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation-delay: 100ms;
    animation: draw 2000ms ease-in-out forwards;
  }
  svg:nth-child(3) {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation-delay: 200ms;
    animation: draw 4000ms ease-in-out forwards;
  }
  svg:nth-child(4) {
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation-delay: 300ms;
    animation: draw 2000ms ease-in-out forwards;
  }
  svg:nth-child(5) {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation-delay: 400ms;
    animation: draw 2000ms ease-in-out forwards;
  }
  svg:nth-child(6) {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation-delay: 500ms;
    animation: draw 1000ms ease-in-out forwards;
  }
  svg:nth-child(7) {
    stroke-dasharray: 420;
    stroke-dashoffset: 420;
    animation-delay: 600ms;
    animation: draw 1000ms ease-in-out forwards;
  }
</style>
