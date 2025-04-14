<script lang="ts">
	import SectionTitle from "../../components/ui/sections/SectionTitle.svelte"
	import { currentUser } from "../../utils/stores/currentUser.js"

	let email = $state("")

	void (async () => {
		email = (await $currentUser?.get("eMail")) ?? ""
	})()
</script>

<SectionTitle text="Mon compte" />
<p>{email}</p>
