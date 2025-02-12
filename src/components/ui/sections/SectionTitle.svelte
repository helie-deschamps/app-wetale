<script lang="ts">
	const {
		text,
		withMargin = true,
	}: {
		text: string
		withMargin?: boolean
	} = $props()
</script>

<h2 style:margin-bottom={(withMargin && "1rem;") || undefined}>{text}</h2>

<style lang="scss">
	h2 {
		font-size: 1.5rem;
		text-transform: uppercase;
		font-weight: 900;
		flex: 1;
	}
</style>
