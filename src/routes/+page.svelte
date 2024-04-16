<script lang="ts">
import Header from "../components/Header.svelte";
import Banner from "../components/Banner.svelte";
import InfoCard from "../components/InfoCard.svelte";
import {
	aboutInfo,
	skillsInfo,
	stuffInfo,
	personInfo,
} from "../data/InfoCards";
</script>

<Banner />
<Header />
<InfoCard data="{aboutInfo}" />
<InfoCard data="{skillsInfo}" />
<InfoCard data="{stuffInfo}" />
<InfoCard data="{personInfo}" />
