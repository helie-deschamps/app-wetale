<script lang="ts">
	import {
		ontouchend,
		ontouchstart,
	} from "../../../../utils/functions/touchHandlers"

	type Props = {
		category?: "text" | "email" | "password"
		placeholder: string
		value: string
		required?: boolean
		tabindex?: number
	}
	let {
		category = "text",
		placeholder,
		value = $bindable(),
		required = false,
		tabindex,
	}: Props = $props()
</script>

<input
	type={category}
	{placeholder}
	bind:value
	{required}
	{tabindex}
	{ontouchstart}
	{ontouchend}
/>

<style lang="scss">
	input {
		display: block;
		width: 100%;
		box-sizing: border-box;
		border-radius: 8px;
		padding: 12px 16px;
		border: none;
		margin: 0.5em;
		font-weight: 600;
	}
</style>
