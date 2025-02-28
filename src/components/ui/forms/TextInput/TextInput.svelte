<script lang="ts">
	import { touchHandlers } from "../../../../utils/component_features/touchHandlers"
	import type { FullAutoFill } from "svelte/elements"

	type Properties = {
		category?: "text" | "email" | "password"
		placeholder: string
		value: string
		required?: boolean
		tabindex?: number
		icon?: "email" | "password"
		pattern?: string
		defaultValue?: string
		autoComplete?: FullAutoFill
	}
	let {
		category = "text",
		placeholder,
		value = $bindable(),
		required = false,
		tabindex,
		icon,
		pattern,
		defaultValue,
		autoComplete,
	}: Properties = $props()
</script>

<div use:touchHandlers class:icon>
	<input
		type={category}
		{placeholder}
		bind:value
		{required}
		{tabindex}
		{pattern}
		{defaultValue}
		autocomplete={autoComplete}
	/>
	{#if icon === "email"}
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z"
				fill="black"
			/>
		</svg>
	{:else if icon === "password"}
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
</div>

<style lang="scss">
	@use "/src/styles/variables/colors";

	div {
		box-sizing: border-box;
		&.icon {
			position: relative;
			input {
				padding-left: calc(16px * 2 + 1.8em);
			}
		}
		svg {
			position: absolute;
			top: 50%;
			left: 16px;
			transform: translateY(-50%);
			path {
				fill-opacity: 0.4;
				stroke-opacity: 0.4;
			}
		}
		input {
			display: block;
			width: 100%;
			box-sizing: border-box;
			border-radius: 8px;
			padding: 12px 16px;
			border: none;
			font-weight: 600;
			&:focus,
			&:focus-visible {
				~ svg path {
					fill-opacity: 1;
					stroke-opacity: 1;
				}
			}
		}
	}
</style>
