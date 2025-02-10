<script lang="ts">
	const {
		text,
	}: {
		text: string
	} = $props()
</script>

<h2>{text}</h2>

<style lang="scss">
	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		text-transform: uppercase;
		font-weight: 900;
	}
</style>
