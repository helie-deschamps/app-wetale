<script lang="ts">
	var {
		currentStep,
		steps,
	}: {
		currentStep: number
		steps: string[]
	} = $props()
</script>

<ol>
	{#each steps as step, index (index)}
		<li>
			<span class="dot" class:selected={currentStep === index}> </span>
			{step}
		</li>
	{/each}
</ol>

<style lang="scss">
	ol {
		list-style-type: none;
		display: flex;
		justify-content: space-around;
		margin: 0;
		margin-block: 0;
		padding-inline-start: 0;
		font-weight: 600;
	}
	li {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		gap: 0.6em;
		&:before {
			content: "";
			background-color: black;
			width: 100%;
			height: 2px;
			position: absolute;
			top: 4.5px;
		}
		&:first-child:before {
			width: 50%;
			left: 50%;
		}
		&:last-child:before {
			width: 50%;
			left: 0;
		}
	}
	.dot {
		position: relative;
		height: 8px;
		width: 8px;
		background-color: white;
		border-radius: 50%;
		border: #87801f 2px solid;
		display: inline-block;
		&:after {
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: #87801f;
			border-radius: 50%;
			display: inline-block;
			height: 0;
			width: 0;
			transition:
				width 0.2s,
				height 0.2s,
				transform 0.2s;
		}
		&.selected:after {
			height: 18px;
			width: 18px;
		}
	}
</style>
